// ReusableGraphQL.js

// Import gql to define reusable GraphQL queries and mutations
import { gql } from '@apollo/client';

// Define a reusable GraphQL query to fetch users
export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;

// Define a reusable GraphQL mutation to add a user
export const ADD_USER = gql`
  mutation AddUser($name: String!, $email: String!) {
    addUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

// Define a reusable GraphQL subscription to listen for new users
export const USER_ADDED = gql`
  subscription OnUserAdded {
    userAdded {
      id
      name
      email
    }
  }
`;
