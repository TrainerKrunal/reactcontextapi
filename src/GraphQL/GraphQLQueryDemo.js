// GraphQLQueryDemo.js

// Import React for creating the component
import React from 'react';
// Import gql to define GraphQL queries and useQuery to execute them
import { gql, useQuery } from '@apollo/client';

// Define a GraphQL query using gql
// - This query fetches a list of users with their id, name, and email fields
const GET_USERS = gql`
  query GetUsers {
    users {
      id # Unique identifier for the user
      name # Name of the user
      email # Email address of the user
    }
  }
`;

const GraphQLQueryDemo = () => {
  // Use the useQuery hook to execute the GET_USERS query
  // - loading: Boolean indicating if the query is still in progress
  // - error: Contains error information if the query fails
  // - data: Contains the result of the query if successful
  const { loading, error, data } = useQuery(GET_USERS);

  // Handle loading state
  // - Display a loading message while the query is in progress
  if (loading) return <p>Loading...</p>;

  // Handle error state
  // - Display an error message if the query fails
  if (error) return <p>Error: {error.message}</p>;

  // Handle success state
  // - Render the list of users fetched from the GraphQL server
  return (
    <div>
      <h2>GraphQL Query Demo</h2> {/* Title of the component */}
      <ul>
        {data.users.map(user => (
          <li key={user.id}> {/* Render each user as a list item */}
            <strong>{user.name}</strong> ({user.email}) {/* Display user name and email */}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Export the component for use in the application
export default GraphQLQueryDemo;
