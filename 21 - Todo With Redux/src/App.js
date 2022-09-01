import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { useState } from "react";
import AddTask from "./components/AddTask/AddTask";
import TaskList from "./components/TaskList/TaskList";

function App() {
  const [whichList, setWhichList] = useState(false);
  const tasks = useSelector((state) =>
    state.todoList.filter((task) => task.completed === whichList)
  );

  const whichTask = (prop) => {
    if (prop === "normal") {
      setWhichList(false);
    } else if (prop === "completed") {
      setWhichList(true);
    }
  };

  return (
    <div className="App__container">
      <AddTask whichTask={whichTask} />
      {tasks.length !== 0 ? <TaskList tasks={tasks} /> : null}
    </div>
  );
}

export default App;
