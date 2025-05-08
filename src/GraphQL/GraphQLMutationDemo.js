// GraphQLMutationDemo.js

// Import React for creating the component
import React, { useState } from 'react';
// Import gql to define GraphQL mutations and useMutation to execute them
import { gql, useMutation } from '@apollo/client';

// Define a GraphQL mutation using gql
// - This mutation adds a new user with name and email fields
const ADD_USER = gql`
  mutation AddUser($name: String!, $email: String!) {
    addUser(name: $name, email: $email) {
      id # Unique identifier for the new user
      name # Name of the new user
      email # Email address of the new user
    }
  }
`;

const GraphQLMutationDemo = () => {
  // State to manage form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Use the useMutation hook to execute the ADD_USER mutation
  // - addUser: Function to trigger the mutation
  // - { data, loading, error }: Contains mutation result, loading state, and error information
  const [addUser, { data, loading, error }] = useMutation(ADD_USER);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      // Execute the mutation with the provided variables
      await addUser({ variables: { name, email } });
      // Clear the form inputs after a successful mutation
      setName('');
      setEmail('');
    } catch (err) {
      console.error('Error adding user:', err);
    }
  };

  // Handle network errors and failed mutations
  // - Display a user-friendly error message if the mutation fails
  if (error) {
    console.error('Mutation error:', error); // Log the error for debugging
    return <p>Something went wrong. Please try again later.</p>;
  }

  return (
    <div>
      <h2>GraphQL Mutation Demo</h2> {/* Title of the component */}

      {/* Display loading state */}
      {loading && <p>Loading...</p>}

      {/* Display error state */}
      {error && <p>Error: {error.message}</p>}

      {/* Display success message */}
      {data && <p>User added successfully: {data.addUser.name} ({data.addUser.email})</p>}

      {/* Form to add a new user */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

// Export the component for use in the application
export default GraphQLMutationDemo;
