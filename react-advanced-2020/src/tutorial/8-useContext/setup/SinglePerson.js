
import React, { useContext } from "react";
import PersonContext from './PersonContext'
export const SinglePerson = ({ id, name}) => {
    const {removePerson}=useContext(PersonContext)
//    const data= userContext(PersonContext)
 //   console.log(data)
    return (
     <div>
          <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
     </div>
    );
  };