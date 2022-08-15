import { useState } from "react";
import '../App.css'
function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = e => {

    e.preventDefault();
    if(input===""){
      return
    }

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <div  className="form">
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
            placeholder='Add a todo'
            value={input}
            onChange={handleInput}
            name='text'
            className='todo-input'
        />
        <button onClick={handleSubmit} className='todo-button'>
          Add todo
        </button>

      </form>
    </div>
  );
}

export default TodoForm;
