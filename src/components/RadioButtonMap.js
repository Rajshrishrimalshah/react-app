import React, { Component } from "react";

class RadioButtonMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const inputs = [["Male", "M"], ["Female", "F"], ["Other", "O"]];
    console.log(this.state);
    return (
      <div>
        {inputs.map(([text, value], i) => (
          <div key={i}>
            <input
              type="radio"
              name="gender"
              onChange={this.handleChange}
              value={text}
            />
            {text}
          </div>
        ))}
      </div>
    );
  }
}

export default RadioButtonMap;
