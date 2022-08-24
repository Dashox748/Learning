import { useState } from "react";

function AddNote({ addNote }) {
  const [text, setText] = useState("");

  const handleInput = (event) => {
    if (200 - event.target.value.length >= 0) {
      setText(event.target.value);
    }

    console.log(event.keyCode);
  };

  const handleAddNote = () => {
    if (text.trim() === "") return;
    addNote(text);

    setText("");
  };
  return (
    <div className="note__container new">
      <textarea
        cols="10"
        rows="8"
        placeholder="Type to add Note..."
        value={text}
        onChange={(event) => handleInput(event)}
      />
      <div className="note__container-footer">
        <small>{200 - text.length}</small>
        <button className="add-note-button" onClick={() => handleAddNote()}>
          Add
        </button>
      </div>
    </div>
  );
}

export default AddNote;
