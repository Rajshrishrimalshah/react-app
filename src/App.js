/* eslint-disable no-unused-vars */
import React from "react";
import { ApolloClient, InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { WebSocketLink } from "apollo-link-ws";
import { HttpLink } from "apollo-link-http";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";

import Form from "./components/Form";
import LifeCycleA from "./components/LifeCycleA";
import QueryApollo from "./components/Apollo-Client/QueryApollo";
import MutationApollo from "./components/Apollo-Client/MutationApollo";

let id = 2;
const httpLink = new HttpLink({
  uri: "http://localhost:9000/graphql" // use https for secure endpoint
});

const wsLink = new WebSocketLink({
  uri: "ws://localhost:9000/graphql", // use wss for a secure endpoint
  options: {
    reconnect: true
  }
});

const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  resolvers: {
    Mutation: {
      createUser: async (_, { username }, { cache, getCacheKey }) => {
        //await cache.writeData({ data: [{ users: username }] });
        await cache.writeData({ data: [{ users: id, username }] });
        id++;
      }
    }
  }
});
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <QueryApollo />
        <MutationApollo />

        {/* <Form /> */}
        {/* <LifeCycleA /> */}
      </div>
    </ApolloProvider>
  );
}

export default App;
