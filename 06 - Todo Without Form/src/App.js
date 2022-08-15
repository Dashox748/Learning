import "./App.css";
import { useState } from "react";

function App() {
  //Staty
  const [taskNameToSend, setTaskNameToSend] = useState("");
  const [listOfTasks, setListOfTasks] = useState([
    {
      id: 0,
      taskName: "Wyniesc cos",
      completed: "False",
    },
  ]);
  //functions
  const add = () => {
    if (taskNameToSend === "") {
      return;
    }
    const data = {
      id: Math.floor(Math.random() * (10000 - 1 + 1) + 1),
      taskName: taskNameToSend,
      completed: "False",
    };
    setListOfTasks([ data,...listOfTasks]);
    document.querySelector("input").value = "";
    setTaskNameToSend("");
  };
  const remove = (id) => {
    let index = listOfTasks.indexOf(
      listOfTasks.find((task) => {
        return task.id === id;
      })
    );
    setListOfTasks((currentTask) =>
      currentTask.filter((listOfTasks, i) => i !== index)
    );
  };
  const change = (id) => {
    let index = listOfTasks.indexOf(
      listOfTasks.find((task) => {
        return task.id === id;
      })
    );
    const copy = listOfTasks;
    setListOfTasks((currentTask) =>
        // eslint-disable-next-line array-callback-return
      currentTask.filter((listOfTasks, i) => {
        const data2 = {
          id: listOfTasks.id,
          taskName: listOfTasks.taskName,
          completed: "True",
        };
        if (i === index) {
          const list = copy.filter((value, i) => i !== index);
          setListOfTasks([...list, data2]);
        }
      })
    );
  };

  return (
    <div className="todoList__container">
      <div className="todoList__container-add">
        <input
          onChange={(event) => {
            setTaskNameToSend(event.target.value);
          }}
          type="text"
          placeholder="Task"
        />
        <button onClick={add}>+</button>
      </div>
      <div className="todoList__container-show">
        {listOfTasks.map((tasks) => (
          <div key={tasks.id}>
            <div
              style={{
                textDecoration:
                  tasks.completed === "True" ? "line-through" : "none",
              }}
            >
              {tasks.taskName}
            </div>
            <button
              onClick={() => {
                change(tasks.id);
              }}
              // style = {{ tasks.completed === "DONE" ? textDecoration : "Line-through" : "" }}
              id="status"
            >
              &#x2714;
            </button>
            <button
              id="del"
              onClick={() => {
                remove(tasks.id);
              }}
            >
              &#128465;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
