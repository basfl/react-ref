import { SinglePerson } from "./SinglePerson";
import PersonContext from "./PersonContext";
import React, { useContext } from "react";
export const List = () => {
  const mainData = useContext(PersonContext);
  console.log(mainData)

  return (
    <div>
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </div>
  );
};
