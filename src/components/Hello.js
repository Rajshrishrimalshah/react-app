import React from "react";

const Hello = () => {
  return (
    // <div>
    //   <h1> Hello Raj </h1>
    // </div>
    React.createElement(
      "div",
      null,
      React.createElement("h1", null, "Hello RaJJJJ")
    )
  );
};

export default Hello;
