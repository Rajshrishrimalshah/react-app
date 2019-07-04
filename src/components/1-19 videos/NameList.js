/* eslint-disable no-unused-vars */
import React from "react";
import Person from "./Person";
const NameList = () => {
  const persons = [
    {
      id: 1,
      name: "Bruce",
      skill: `Acting`,
      age: 30
    },
    {
      id: 2,
      name: "Diana",
      skill: `Dancing`,
      age: 30
    },
    {
      id: 3,
      name: "Clark",
      skill: `Boxing`,
      age: 30
    }
  ];

  const names = ["Bruce", "Clark", "Diana"];
  // const personList = persons.map(person => {
  //   return <Person key={person.id} person={person} />;
  // });

  const nameList = names.map((name, index) => <h2 key={index}> {name} </h2>);
  // return <div style={{ textAlign: "center" }}>{personList}</div>;
  return <div style={{ textAlign: "center" }}>{nameList}</div>;
};

export default NameList;
