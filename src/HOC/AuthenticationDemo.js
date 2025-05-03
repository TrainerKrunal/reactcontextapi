import React from 'react';
import withAuthentication from './withAuthentication'; // Importing the withAuthentication HOC

/**
 * Fallback Component
 * 
 * This component is displayed when the user is not authenticated.
 */
const FallbackComponent = () => {
  return (
    <div>
      <h1>Access Denied</h1>
      <p>You must be logged in to view this content.</p>
    </div>
  );
};

/**
 * Protected Component
 * 
 * This component is only accessible to authenticated users.
 */
const ProtectedComponent = () => {
  return (
    <div>
      <h1>Welcome to the Protected Page</h1>
      <p>This content is only visible to authenticated users.</p>
    </div>
  );
};

// Wrapping the ProtectedComponent with the withAuthentication HOC
const AuthenticationDemo = withAuthentication(ProtectedComponent, FallbackComponent);

export default AuthenticationDemo;
