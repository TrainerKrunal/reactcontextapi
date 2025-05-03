import React from 'react';
import withLogger from './withLogger'; // Importing the withLogger HOC

/**
 * LoggerDemo Component
 * 
 * This component demonstrates the usage of the `withLogger` HOC.
 * It displays a simple message and logs the props passed to it.
 */

const LoggerDemo = (props) => {
  return (
    <div>
      <h1>Logger Demo</h1>
      <p>This component is wrapped with the withLogger HOC.</p>
      <p>Message: {props.message}</p> {/* Display the message prop */}
    </div>
  );
};

// Wrapping the LoggerDemo component with the withLogger HOC
export default withLogger(LoggerDemo);
