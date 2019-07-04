import React, { Component } from "react";

class ClassClick extends Component {
  clickHandler = () => {
    alert(`Clicked the button`);
  };

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>
          click me from Class Component
        </button>
      </div>
    );
  }
}

export default ClassClick;
