/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import SubscriptionApollo from "./SubscriptionApollo";
export class QueryApollo extends Component {
  USERS_QUERY = gql`
    query {
      users {
        id
        username
      }
    }
  `;

  render() {
    return (
      <div>
        <Query query={this.USERS_QUERY}>
          {({ loading, error, data, subscribeToMore }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error ...</p>;

            return (
              <SubscriptionApollo
                subscribeToMore={subscribeToMore}
                data={data}
              />
            );
          }}
        </Query>
      </div>
    );
  }
}

export default QueryApollo;
