import React, { useState } from 'react';
import { ApolloProvider } from "@apollo/client";
import client from "./config/apollo";
import Auth from "./pages/Auth";

function App() {
  const [auth, setAuth] = useState();

  return (
    <ApolloProvider client={client}>
      {!auth ? <Auth /> : <h1>Estas logueado</h1>}
    </ApolloProvider>
  );
}

export default App;
