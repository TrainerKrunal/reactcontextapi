import React from 'react';

/**
 * Higher-Order Component: withAuthentication
 * 
 * This HOC checks if a user is authenticated before rendering the wrapped component.
 * If the user is not authenticated, it displays a fallback message or redirects to a login page.
 * 
 * @param {React.ComponentType} WrappedComponent - The component to be wrapped.
 * @param {React.ReactNode} FallbackComponent - The fallback UI to display when the user is not authenticated.
 * @returns {React.ComponentType} - A new component with authentication functionality.
 */

const withAuthentication = (WrappedComponent, FallbackComponent) => {
  return (props) => {
    const isAuthenticated = props.isAuthenticated; // Check authentication status from props

    if (!isAuthenticated) {
      // Render the fallback UI when the user is not authenticated
      return <FallbackComponent />;
    }

    // Render the wrapped component when the user is authenticated
    return <WrappedComponent {...props} />;
  };
};

export default withAuthentication;
