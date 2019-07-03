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
        console.log("prev--> prev", prev);
        console.log("subscriptionData -->", subscriptionData);

        // if (!subscriptionData.data) return prev;
        // const newLink = subscriptionData.data.newLink;
        // const exists = prev.feed.links.find(
        //   ({ id }) => id === newLink.id
        // );
        // if (exists) return prev;

        // return Object.assign({}, prev, {
        //   feed: {
        //     links: [newLink, ...prev.feed.links],
        //     count: prev.feed.links.length + 1,
        //     __typename: prev.feed.__typename
        //   }
        // });
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
