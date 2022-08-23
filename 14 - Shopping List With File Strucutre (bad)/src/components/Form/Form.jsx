import "./Form.css";
import { useState } from "react";
import useCollapse from "react-collapsed";
import Hamburger from "hamburger-react";

function Form(props) {

  const [input, setInput] = useState("");
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") {
      return;
    }

    props.onSubmit({
      ingredient: input,
      quantity: 1,
      bought: false,
      uniqueId: Math.floor(Math.random() * 10000),
    });
    setInput("");
  };

  return (
    <div className="form__container">
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={handleInput} placeholder="Add to List" />
        <button className="hamburger-menu-relative noselect">Add</button>

      </form>
    </div>
  );
}

export default Form;
