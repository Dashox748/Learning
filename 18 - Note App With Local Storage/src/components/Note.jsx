import { MdDeleteForever } from "react-icons/md";
import "./note.css";

function Note({ id, text, date, deleteNote }) {
  return (
    <div className="note__container">
      <span>{text}</span>
      <div className="note__container-footer">
        <small>{date}</small>
        <MdDeleteForever
          className="delete_icon"
          size="1.3rem"
          onClick={() => {
            deleteNote(id);
          }}
        />
      </div>
    </div>
  );
}

export default Note;
