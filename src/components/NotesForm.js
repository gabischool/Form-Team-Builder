import React, {useState} from "react";

const NoteForm = (props) => {
  // this component expects "addNewNote" function as a prop from app.js
  
  // Create state for the form
  const [formNote, setFormNote] = useState({
    id: Date.now(),
    title: "",
    body: "",
  })

  // create function keeps track of what you type and sends it to the state
  function handleChange(event) {
    let newData = {...formNote, [event.target.name]: event.target.value}

    setFormNote(newData)
  }
 

  // Create a function that submits your form to "addNewNote" function
  function handleSubmit(event) {
    event.preventDefault()
    
    props.addNewNote(formNote)
    

  }
 

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">UserName</label>
      <input
        type="text"
        placeholder="Enter username"
        id="username"
        name="username"
        value={formNote.username}
        onChange={handleChange}
      />

      <label htmlFor="email">Email</label>
      <textarea
        id="email"
        placeholder="Enter your email here"
        name="email"
        value={formNote.email}
        onChange={handleChange}
      />
      <label htmlFor="role">Role</label>
      <input
        type="role"
        id="role"
        placeholder="Add your role here"
        name="role"
        value={formNote.role}
        onChange={handleChange}
      />

      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
