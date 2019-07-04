import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true
    };
  }

  render() {
    const { isLoggedIn } = this.state;

    return isLoggedIn && <div> Welcome Raj</div>;
    // return isLoggedIn ? <div>Welcome Raj !</div> : <div>Welcome Guest !</div>;

    // let message;
    // if (isLoggedIn) {
    //   return <div>Welcome Raj !</div>;
    // } else {
    //   return <div>Welcome Guest !</div>;
    // }

    // if (isLoggedIn) {
    //   message = <div>Welcome Raj !</div>;
    // } else {
    //   message = <div>Welcome Guest !</div>;
    // }

    // return <div> {message} </div>;
    // return (
    //   <div>
    //     <div>Welcome Raj !</div>;
    //     <div>Welcome Guest !</div>
    //   </div>
    // );
  }
}

export default UserGreeting;
