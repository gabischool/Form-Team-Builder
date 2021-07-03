import React, {useState} from "react";
import './App.css';
import TeamForm from "./components/TeamForm";
import TeamMember from "./components/TeamMember";


export default function App() {

  const [member, setMember ]= useState ([                       

    {
      name: "Ahmed",
      email:"ahmed2021@gmail.com",
      role: "back-end engineer",
      
    },
    
    {   
      name: "fadumo",
      email:"fadumo@gmail.com",
      role: "desinger",
      
    },

    {
      name: "mohamed",
      email:"mohamed@gmail.com",
      role: "front-end engineer",
      
    },
       {
      name: "Ali",
      email:"ahmed2021@gmail.com",
      role: "full-stuck developer",
      
    }

  ])
        const addNewMember = (newData) => {

          let newMember = [...member, {...newData}]

            setMember(newMember)
    }

      return (

      <div className="App">
        <h1> Team Rendering here</h1>

        <TeamForm addNewMember={addNewMember}/>
        <TeamMember people={member} />
      </div>
  );
}

