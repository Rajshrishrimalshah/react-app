import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  increment = () => {
    // this.setState(
    //   {
    //     count: this.state.count + 1
    //   },
    //   () => {
    //     console.log(`Callback Value :-`, this.state.count);
    //   }
    // );
    // console.log(this.state.count);

    this.setState(
      prevState => ({
        count: prevState.count + 1
      }),
      () => {
        console.log("callback value :-", this.state.count);
      }
    );
  };

  incrementFive = () => {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h4> count: {count} </h4>
        {/* <button onClick={this.increment}> Increment</button> */}
        <button onClick={this.incrementFive}> Increment</button>
      </div>
    );
  }
}

export default Counter;
