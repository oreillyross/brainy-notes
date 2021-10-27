import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const authtoken = process.env.REACT_APP_X_HASURA_ADMIN_SECRET_KEY;

export const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://brainy-notes.hasura.app/v1/graphql",
    headers: {
      "x-hasura-admin-secret": `${authtoken}`
    }
  }),
  cache: new InMemoryCache()
});

console.log(client);
