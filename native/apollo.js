import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export const isLoggedInVar = makeVar(false);

const client = new ApolloClient({
//   uri: "http://localhost:4000/graphql",
  uri: "https://e92e2b9b5e22.ngrok.io/graphql",
  cache: new InMemoryCache(),
});
export default client;