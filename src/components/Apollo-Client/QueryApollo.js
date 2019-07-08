/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

export class QueryApollo extends Component {
  USERS_QUERY = gql`
    query {
      users {
        id
        username
      }
    }
  `;

  USERS_SUB = gql`
    subscription {
      newUserAdded {
        id
        username
      }
    }
  `;

  subscribeToNewLinks = subscribeToMore => {
    subscribeToMore({
      document: this.USERS_SUB,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const user = {
          users: [...prev.users, { ...subscriptionData.data.newUserAdded }]
        };

        return user;
      }
    });
  };

  render() {
    return (
      <div>
        <Query query={this.USERS_QUERY}>
          {({ loading, error, data, subscribeToMore }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error ...</p>;

            this.subscribeToNewLinks(subscribeToMore);
            return (
              <ul>
                {data.users.map(({ id, username }) =>
                  username !== "" ? <li key={id}>{username}</li> : ""
                )}
              </ul>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default QueryApollo;
