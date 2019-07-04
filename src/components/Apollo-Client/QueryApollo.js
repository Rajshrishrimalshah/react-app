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
        console.log("prev--> prev", prev.users);
        console.log("subscriptionData -->", subscriptionData);
        console.log(`New User added:- `, subscriptionData.data.newUserAdded);

        return subscriptionData.data.newUserAdded;
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
            console.log("DATA QUERY--->", data);

            this.subscribeToNewLinks(subscribeToMore);
            return (
              <ul>
                {data.users.map(({ id, username }) => (
                  <li key={id}>{username}</li>
                ))}
              </ul>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default QueryApollo;
