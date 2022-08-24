import Note from "./Note";
import "./noteList.css";
import AddNote from "./AddNote";
function NoteList({ notes, addNote, deleteNote }) {
  return (
    <div className="note-list__container">
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          deleteNote={deleteNote}
        />
      ))}
      <AddNote addNote={addNote} />
    </div>
  );
}

export default NoteList;
