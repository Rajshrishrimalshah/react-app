import React from "react";

const FunctionalClick = () => {
  const clickHandler = () => {
    console.log(`Button Click`);
    alert(`Buttton Click !`);
  };
  return (
    <div>
      <button onClick={clickHandler}>
        {" "}
        click me from Functional Component <br />
      </button>
    </div>
  );
};

export default FunctionalClick;
