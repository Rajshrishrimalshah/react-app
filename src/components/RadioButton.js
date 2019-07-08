import React, { Component } from "react";

class RadioButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      platform: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="radio-buttons" style={{ textAlign: "center" }}>
        <div>
          <input
            id="windows"
            value="windows"
            name="platform"
            type="radio"
            onChange={this.handleChange}
          />
          Windows
        </div>
        <div>
          <input
            type="radio"
            id="mac"
            value="mac"
            name="platform"
            onChange={this.handleChange}
          />
          Mac
        </div>
        <div>
          <input
            id="linux"
            value="linux"
            name="platform"
            type="radio"
            onChange={this.handleChange}
          />
          Linux
        </div>
      </div>
    );
  }
}

export default RadioButton;
