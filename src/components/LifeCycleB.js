import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Raj"
    };
    console.log(`Lifecycle B - Constructor`);
  }

  static getDerivedStateFromProps(props, state) {
    console.log(`Lifecycle D - getDerivedStateFromProps`);
    return null;
  }

  componentDidMount() {
    console.log(`Lifecycle B - componentDidMount`);
  }

  render() {
    console.log(`Lifecycle B - render`);
    return <div> LifeCycleB </div>;
  }
}

export default LifeCycleB;
