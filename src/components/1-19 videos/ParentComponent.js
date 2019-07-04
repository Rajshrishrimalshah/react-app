import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: `parent`
    };
  }

  greetParent = childName => {
    const { parentName } = this.state;
    alert(`Hello ${parentName} from ${childName}`);
  };

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    );
  }
}

export default ParentComponent;
