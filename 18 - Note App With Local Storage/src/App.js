import NoteList from "./components/NoteList";
import "./App.css";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Search from "./components/Search";

function App() {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const newNote = notes.filter((note) => note.id !== id);

    setNotes(newNote);
  };
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-note-app-data"));
    if(savedNotes){
      setNotes(savedNotes);
    }

  }, []);
  useEffect(() => {
    localStorage.setItem("react-note-app-data", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="App__container">
      <Search handleSearchNote={setSearch} />
      <NoteList
        notes={notes.filter((note) => note.text.toLowerCase().includes(search))}
        addNote={addNote}
        deleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
