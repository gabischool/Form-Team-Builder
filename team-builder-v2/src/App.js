import { useState } from "react";
import './App.css';
import Form from './components/Form';




function App() {

const [members, setMembers] = useState ([

  
  // { name:"sakaria", email:"zakaria@gmail.com", role:"manager"}
  // you can uncomment it
 
]);


  function addMember(newMembers) {
    setMembers([...members, newMembers]);
  }


  return (
    <div className="App">
      <header className="App-header">
       <h2>Members List</h2>
       <Form addMember={addMember} /> 

      {members.map((member) => (
        <div className="member">
          <span>Name: {member.name}</span>
          <span>Email: {member.email} </span>
          <span>role: {member.role} </span>
        </div>
      ))}
     
      
        
      </header>
    </div>
  );
}

export default App;

 