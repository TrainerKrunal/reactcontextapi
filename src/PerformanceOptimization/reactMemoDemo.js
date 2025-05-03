// reactMemoDemo.js

// Import React and useState hook for managing state
import React, { useState } from 'react';

// A child component that only re-renders when its props change
// React.memo is a higher-order component that memoizes the result of a component's render
const ChildComponent = React.memo(({ count }) => {
  console.log('ChildComponent rendered'); // Log to verify when the child component re-renders
  return <p>Child Count: {count}</p>; // Display the child count
});

const ReactMemoDemo = () => {
  // State to manage the parent count
  const [parentCount, setParentCount] = useState(0);
  // State to manage the child count
  const [childCount, setChildCount] = useState(0);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}> {/* Styling for the component */}
      <h2>React.memo Demo</h2> {/* Title of the demo */}

      {/* Parent Counter */}
      <button onClick={() => setParentCount(parentCount + 1)}> {/* Increment parent count */}
        Increment Parent Count
      </button>
      <p>Parent Count: {parentCount}</p> {/* Display the parent count */}

      {/* Child Counter */}
      <button onClick={() => setChildCount(childCount + 1)}> {/* Increment child count */}
        Increment Child Count
      </button>
      <ChildComponent count={childCount} /> {/* Pass child count to the memoized child component */}
    </div>
  );
};

export default ReactMemoDemo;

/*
What is React.memo?
React.memo is a higher-order component (HOC) that optimizes performance by memoizing the rendered output of a functional component. It prevents unnecessary re-renders by comparing the current props with the previous props. If the props have not changed, the component is not re-rendered.

When to use React.memo?
1. Use React.memo for functional components that render the same output for the same props.
2. It is particularly useful for optimizing performance in components that receive frequently changing parent props but do not need to re-render unless specific props change.
3. Avoid using React.memo for components that rely on context or have complex props that are difficult to compare efficiently.
*/
