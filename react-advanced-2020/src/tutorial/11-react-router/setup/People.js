import React, { useState } from "react";
import { data } from "../../../data";
import { Link, useLocation, useHistory, useParams } from "react-router-dom";
const People = (props) => {
  console.log("*********userLocation", useLocation());
  console.log("*********userParam", useParams());
  console.log("***********userHistory", useHistory());
  const [people, setPeople] = useState(data);
  return (
    <div>
      <h1>People Page</h1>
      {people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <Link to={`/person/${person.id}`}>****</Link>
          </div>
        );
      })}
    </div>
  );
};

export default People;
