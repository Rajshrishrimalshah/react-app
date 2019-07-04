import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import React from "react";

const USERS_MUTATE = gql`
  mutation createUser($id: Int, $username: String) {
    createUser(id: $id, username: $username) {
      id
      username
    }
  }
`;

const MutationApollo = () => (
  <Mutation mutation={USERS_MUTATE}>
    {(createUser, { data }) => {
      console.log("DATA Mutation--->", data);

      return (
        <div>
          <button
            onClick={e => {
              e.preventDefault();
              createUser({
                variables: { id: 22, username: "Ganesh" }
              });
            }}
          >
            Add User
          </button>
        </div>
      );
    }}
  </Mutation>
);

export default MutationApollo;
