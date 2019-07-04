import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comment: "",
      topic: ""
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = e => {
    const { username, comment, topic } = this.state;
    alert(`${username}, ${comment}, ${topic}`);
    e.preventDefault();
  };

  render() {
    const options = [
      {
        name: "Select",
        value: null
      },
      {
        name: "React",
        value: "react"
      },
      {
        name: "Angular",
        value: "angular"
      },
      {
        name: "Viu",
        value: "viu"
      }
    ];

    const { username, comment, topic } = this.state;
    console.log(this.state);
    return (
      <form style={{ textAlign: "center" }} onSubmit={this.handleSubmit}>
        <div>
          <br />
          <br />
          <label> Username </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleFieldChange}
          />
        </div>

        <br />

        <div>
          <label> Comment </label>
          <textarea
            name="comment"
            value={comment}
            onChange={this.handleFieldChange}
          >
            {" "}
          </textarea>
          >
        </div>

        <br />

        <div>
          <label> Topic </label>
          <select onChange={this.handleFieldChange} value={topic} name="topic">
            {options.map(item => (
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <br />
        <button type="submit"> submit </button>
      </form>
    );
  }
}

export default Form;
