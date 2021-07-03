import React from "react";



export default function TeamMember (props) {
console.log("props" , props)


return (

   <div>
     
     {props.people.map((member) => (
      <div> 
       
       <p>{member.name}</p>
       <p>{member.role}</p>
       <p>{member.email}</p>
      </div>
       ))}
     
    </div>
   

);

}