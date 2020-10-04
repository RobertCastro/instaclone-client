import React from 'react';
import { Button } from 'semantic-ui-react';
import { ApolloProvider } from "@apollo/client";
import client from "./config/apollo";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Estamos en APP</h1>
        <div>
          <Button primary>Primary</Button>
          <Button secondary>Secondary</Button>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
