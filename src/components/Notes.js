import React from "react";

const Notes = (props) => {

  // This component expects "notes" prop from app.js component

  return (
    <div className="note-list">
      {/* Loop Through all the notes from props */}
      {props.notes.map((note) => (
        <div className="note">
          <h2 className="username">{note.username}</h2>
          <p>{note.email}</p>
          <p>{note.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Notes;
