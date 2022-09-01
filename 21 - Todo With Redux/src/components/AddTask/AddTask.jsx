import { useState } from "react";
import { addTask } from "../../redux/todoListSlice";
import { useDispatch } from "react-redux";
import "./addTask.css";
import {FaChevronUp,FaChevronDown} from 'react-icons/fa'


function AddTask({ whichTask }) {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [active, setActive] = useState(false);

  const inputHandle = (event) => {
    setInputValue(event.target.value);
  };
  const changeListHandle = (list) => {
    whichTask(list);
  };
  const submitHandle = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      return;
    }
    dispatch(addTask({ taskName: inputValue }));
    setInputValue("");
  };
  return (
    <div className="addTask__container">
      <form onSubmit={submitHandle}>
        <input
          value={inputValue}
          onChange={inputHandle}
          placeholder="Add a task to do"
        />
      </form>
      <div className="addTask__container-button">
        <button
          onClick={() => {
            setActive(!active);
          }}
        >
          {active?<FaChevronDown/>
              :<FaChevronUp/>}
        </button>
        {active ? (
          <div className="addTask__container-list">
            <ul>
              <li
                onClick={() => {
                  changeListHandle("normal");
                }}
              >
                Normal
              </li>
              <li
                onClick={() => {
                  changeListHandle("completed");
                }}
              >
                Completed
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default AddTask;
