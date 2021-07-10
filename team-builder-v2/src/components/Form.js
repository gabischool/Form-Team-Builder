import React, { useState } from "react";

function Form(props) {


    const [input, setInput] = useState ({});

    function handleChange(event) {
        const updateMember = { ...input, [event.target.name]: event.target.value };
        setInput(updateMember);
      }

        
  function handleSubmit(event) {
    event.preventDefault();
    props.addMember(input);
  }


    return (
        <div>
         
            <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={handleChange}
        />

        
       
        <label>Email: </label>
        <input
          type="text"
          name="email"
          value={input.email}
          onChange={handleChange}
        />

      
        <label>role: </label>
        <input
          type="text"
          name="role"
          value={input.role}
          onChange={handleChange}
        />
    

        <button>Submit</button>
      </form> 
        </div>
    )
}

export default Form;
