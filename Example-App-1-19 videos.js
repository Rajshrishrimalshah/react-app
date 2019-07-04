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
import Greet from "./components/1-19 videos/Greet";
import Welcome from "./components/1-19 videos/Welcome";
import Hello from "./components/1-19 videos/Hello";
import Message from "./components/1-19 videos/Message";
import Counter from "./components/1-19 videos/Counter";
import MutationApollo from "./components/Apollo-Client/MutationApollo";
import QueryApollo from "./components/Apollo-Client/QueryApollo";
import FunctionalClick from "./components/1-19 videos/FunctionalClick";
import ClassClick from "./components/1-19 videos/ClassClick";
import EventBind from "./components/1-19 videos/EventBind";
import ParentComponent from "./components/1-19 videos/ParentComponent";
import UserGreeting from "./components/1-19 videos/UserGreeting";
import NameList from "./components/1-19 videos/NameList";
import StyleSheet from "./components/1-19 videos/StyleSheet";
import Inline from "./components/1-19 videos/Inline";
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
        </Greet> */}
        {/* <Greet name="Mayank" />
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

        {/* <QueryApollo />
        <MutationApollo /> */}

        {/* <Greet name="Raj !">
          <p> Good Morning ! </p>
        </Greet>
        <Welcome name="Superman" />
        <FunctionalClick />
        <ClassClick /> */}

        {/* <EventBind /> */}

        {/* <ParentComponent /> */}

        {/* <UserGreeting /> */}

        {/* <NameList /> */}

        {/* <StyleSheet primary={true} /> */}

        {/* <Inline /> */}
      </div>
    </ApolloProvider>
  );
}

export default App;
