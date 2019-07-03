import React, { Component } from "react";

class Welcome extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3> Hello, {this.props.name} </h3>
        {this.props.children}
      </div>
    );
  }
}

export default Welcome;
