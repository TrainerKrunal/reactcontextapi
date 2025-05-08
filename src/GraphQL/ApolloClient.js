// ApolloClient.js

// Import ApolloClient and InMemoryCache from Apollo Client library
import { ApolloClient, InMemoryCache } from '@apollo/client';

// Create an Apollo Client instance
// - uri: The endpoint of the GraphQL server
// - cache: InMemoryCache is used to cache query results for better performance
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // Replace with your GraphQL server URL
  cache: new InMemoryCache(),
});

// Export the Apollo Client instance for use in the application
export default client;
