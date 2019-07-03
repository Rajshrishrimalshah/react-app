/* eslint-disable no-unused-vars */
import React from "react";
import { ApolloClient, InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { WebSocketLink } from "apollo-link-ws";
import { HttpLink } from "apollo-link-http";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";
// import { InMemoryCache } from "apollo-cache-inmemory";

import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import MutationApollo from "./components/MutationApollo";
import QueryApollo from "./components/QueryApollo";

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
  cache: new InMemoryCache()
});
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        {/* <Greet name="Aniket">
        <p> This is paragraph for 1st component </p>
      </Greet>
      <Greet name="Mayank" />
      <Greet name="John" />

      <Welcome name="RAJ">
        <p> This is paragraph for 1st component </p>
      </Welcome>
      <Welcome name="GANESH" />
      <Welcome name="ONKAR" /> */}
        {/* <Welcome /> */}
        {/* <Hello /> */}
        {/* <Message /> */}
        {/* <Counter /> */}
        <QueryApollo />
        <MutationApollo />
        <Greet />
      </div>
    </ApolloProvider>
  );
}

export default App;
