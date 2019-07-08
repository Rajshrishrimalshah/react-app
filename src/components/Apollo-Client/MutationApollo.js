import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const USERS_MUTATE = gql`
  mutation createUser($username: String) {
    createUser(username: $username) {
      id
      username
    }
  }
`;

export class MutationApollo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ``
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event, createUser) => {
    const { username } = this.state;

    event.preventDefault();
    createUser({
      variables: {
        username
      }
    });
  };

  render() {
    const { username } = this.state;

    return (
      <Mutation mutation={USERS_MUTATE}>
        {(createUser, { data }) => {
          return (
            <div style={{ textAlign: "center" }}>
              <label> Username </label>

              <input
                type="text"
                name="username"
                value={username}
                onChange={this.handleFieldChange}
              />
              <br />
              <br />
              <button
                disabled={username === "" ? true : false}
                onClick={e => this.handleSubmit(e, createUser)}
              >
                Add User
              </button>
            </div>
          );
        }}
      </Mutation>
    );
  }
}

export default MutationApollo;
