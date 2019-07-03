import React from "react";

const Greet = props => {
  console.log(`In the greet function`);
  return (
    <div>
      <h3> Hello, {props.name} </h3>
      {props.children}
    </div>
  );
};
export default Greet;
