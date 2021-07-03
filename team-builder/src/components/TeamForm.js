
import React, { useState } from "react";

export default function TeamForm (props) {

    const [ formNote, setFormNote ] = useState({
      id: Date.now(),
        
      role: "",
      name: "",
      email: "",
             
    })

      const handleChange = (event) => {
         let newInput = {...formNote, [event.target.name]: event.target.value }
           setFormNote(newInput)
      }

         const handleSubmit = (event) => {
            event.preventDefault()
            props.addNewMember(formNote)
            

         }

        



return (
    <form onSubmit={handleSubmit}>

        <label htmlFor="name">name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formNote.name}
            onChange={handleChange}
          />

                   
         <label htmlFor="email">email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter email"
            value={formNote.email}
            onChange={handleChange}
          /> 

             <label>role </label>
            <select value ={formNote.Role} name="role" onChange={handleChange}>
                        <option value="back-end engineer">back-end engineer</option>
                        <option value="designer">designer</option>
                        <option value="front-end engineer">front-end engineer</option>
                        <option value="full-stuck developer">full-stuck developer</option>
            </select>


            <button type="submit"> addNewMember</button>

    </form>


)
}