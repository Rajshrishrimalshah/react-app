import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Raj"
    };
    console.log(`Lifecycle A - Constructor`);
  }

  static getDerivedStateFromProps(props, state) {
    console.log(`Lifecycle A - getDerivedStateFromProps`);
    return null;
  }

  componentDidMount() {
    console.log(`Lifecycle A - componentDidMount`);
  }

  render() {
    console.log(`Lifecycle A - render`);
    return (
      <div>
        <div> LifeCycleA </div>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
