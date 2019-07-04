import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { name, children } = this.props;
    return (
      <div>
        <h3> Hello, {name} </h3>
        {children}
      </div>
    );
  }
}

export default Welcome;
