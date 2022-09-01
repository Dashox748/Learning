import Task from "./Task/Task";
import "./taskList.css";

function TaskList({ tasks }) {
  return (
    <div className="taskList__container">
      {tasks.map((task) => (
        <div key={task.id}>
          <Task
            taskName={task.taskName}
            taskId={task.id}
            taskComplete={task.completed}
          />
        </div>
      ))}
    </div>
  );
}

export default TaskList;
