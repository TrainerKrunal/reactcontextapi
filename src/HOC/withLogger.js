import React from 'react';

/**
 * Higher-Order Component: withLogger
 * 
 * This HOC logs props passed to the wrapped component.
 * It demonstrates how to enhance a component by adding additional functionality.
 * 
 * @param {React.ComponentType} WrappedComponent - The component to be wrapped.
 * @returns {React.ComponentType} - A new component with logging functionality.
 */

const withLogger = (WrappedComponent) => {
  return (props) => {
    console.log('Props:', props); // Log the props passed to the wrapped component

    return <WrappedComponent {...props} />; // Render the wrapped component with all props
  };
};

export default withLogger;
