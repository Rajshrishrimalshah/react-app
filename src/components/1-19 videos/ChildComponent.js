import React from "react";

const ChildComponent = props => {
  const { greetHandler } = props;
  return (
    <div>
      <button onClick={() => greetHandler(`child`)}> Grreet Parent </button>
    </div>
  );
};

export default ChildComponent;
