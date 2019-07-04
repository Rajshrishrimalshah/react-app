import React from "react";

const Person = ({ person }) => {
  return (
    <div>
      <h2 key={person.id}>
        I am {person.name}. I am {person.age} year's old. I konw {person.skill}
      </h2>
    </div>
  );
};

export default Person;
