import "./task.css";
import { editTask, removeTask } from "../../../redux/todoListSlice";
import { useDispatch } from "react-redux";
import { AiOutlineCheck } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

function Task({ taskName, taskId, taskComplete }) {
  const dispatch = useDispatch();
  return (
    <div key={taskId} className="task__container">
      <span className={taskComplete ? "line" : null}>{taskName}</span>
      <div style={{ display: "flex" }}>
        {!taskComplete ? (
          <button
            style={{ background: "green", color:"white" }}
            onClick={() => {
              dispatch(editTask({ id: taskId, taskComplete: !taskComplete }));
            }}
          >
            <AiOutlineCheck />
          </button>
        ) : null}
        {taskComplete ? (
          <button style={{ background:"transparent"}}
            onClick={() => {
              dispatch(removeTask({ id: taskId }));
            }}
          >
            <BsFillTrashFill />
          </button>
        ) : null}
      </div>

      <div className="xd" />
    </div>
  );
}

export default Task;
