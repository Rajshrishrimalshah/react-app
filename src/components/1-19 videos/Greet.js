import React from "react";

const Greet = ({ name, children }) => {
  console.log(`In the greet function`);
  return (
    <div>
      <h3> Hello, {name} </h3>
      {children}
    </div>
  );
};
export default Greet;
