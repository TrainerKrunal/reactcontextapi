// GraphQLSubscriptionDemo.js

// Import React for creating the component
import React from 'react';
// Import gql to define GraphQL subscriptions and useSubscription to execute them
import { gql, useSubscription } from '@apollo/client';

// Define a GraphQL subscription using gql
// - This subscription listens for real-time updates when a new user is added
const USER_ADDED = gql`
  subscription OnUserAdded {
    userAdded {
      id # Unique identifier for the new user
      name # Name of the new user
      email # Email address of the new user
    }
  }
`;

const GraphQLSubscriptionDemo = () => {
  // Use the useSubscription hook to execute the USER_ADDED subscription
  // - data: Contains the real-time data received from the subscription
  // - loading: Boolean indicating if the subscription is still initializing
  // - error: Contains error information if the subscription fails
  const { data, loading, error } = useSubscription(USER_ADDED);

  // Handle loading state
  // - Display a loading message while the subscription is initializing
  if (loading) return <p>Loading subscription...</p>;

  // Handle error state
  // - Display an error message if the subscription fails
  if (error) return <p>Error: {error.message}</p>;

  // Handle real-time data
  // - Render the new user data received from the subscription
  return (
    <div>
      <h2>GraphQL Subscription Demo</h2> {/* Title of the component */}

      {data && (
        <div>
          <h3>New User Added:</h3>
          <p>
            <strong>{data.userAdded.name}</strong> ({data.userAdded.email})
          </p>
        </div>
      )}
    </div>
  );
};

// Export the component for use in the application
export default GraphQLSubscriptionDemo;
