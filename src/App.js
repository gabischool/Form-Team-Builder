import React, {useState} from "react";
import "./App.css";

// Import Components
import NotesForm from "./components/NotesForm";
import Notes from "./components/Notes";

// Import Data
import Data from "./data"

export default function App() {

  // Create state for the data
  const [notes, setNotes] = useState(Data)

  function addNewNote(qoraalCusub) {
    const newNote = [...notes, {...qoraalCusub}]

    setNotes(newNote)

  }

  return (

    <div className="App">
      <h1>Team Membres</h1>
      <NotesForm addNewNote={addNewNote}/>
      <Notes notes={notes} />
    </div>
  );
}
