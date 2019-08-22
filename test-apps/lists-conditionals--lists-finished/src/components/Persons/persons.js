import React from 'react';
import Person from './Person/Person'
const persons=(props)=>props.persons.map((person, index) => {
            return <Person
              personClick={() => props.personsClick(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              personChanged={(event) => props.personsChange(event, person.id)} />
          });
  

export default persons