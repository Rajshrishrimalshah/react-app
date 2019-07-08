import React, { Component } from "react";
import { gql } from "apollo-boost";

class SubscriptionApollo extends Component {
  USERS_SUB = gql`
    subscription {
      newUserAdded {
        id
        username
      }
    }
  `;

  componentDidMount() {
    this.props.subscribeToMore({
      document: this.USERS_SUB,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const user = {
          users: [...prev.users, { ...subscriptionData.data.newUserAdded }]
        };

        return user;
      }
    });
  }
  render() {
    const { data } = this.props;
    return (
      <div>
        <ul>
          {data.map(({ id, username }) =>
            username !== "" ? <li key={id}>{username}</li> : ""
          )}
        </ul>
      </div>
    );
  }
}

export default SubscriptionApollo;
