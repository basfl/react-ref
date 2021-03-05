import React, { useState, useContext } from 'react';
import { data } from '../../../data';
import {List} from './List'
import PersonContext from './PersonContext'
// more components
//const PersonContext = React.createContext();
// fix - context api, redux (for more complex cases)


const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value={{removePerson,people}}>
      <h3>prop drilling</h3>
      <List  />
   
    </PersonContext.Provider>
  );
};





export default ContextAPI;
