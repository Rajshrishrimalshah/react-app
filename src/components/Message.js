import React, { Component } from "react";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Welcome visitor"
    };
  }

  handleClick = () => {
    this.setState({
      message: "Thank you for subscribing"
    });
  };

  render() {
    const { message } = this.state;
    return (
      <>
        <h3> {message} </h3>
        <button onClick={this.handleClick}> Subscribe</button>
      </>
    );
  }
}

export default Message;
