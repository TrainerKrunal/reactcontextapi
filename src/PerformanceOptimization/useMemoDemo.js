import React, { useState, useMemo } from 'react'; // Importing React, useState, and useMemo hooks

/**
 * This component demonstrates the use of useMemo() in React.
 * 
 * useMemo() is a React Hook that memoizes the result of a computation.
 * It is used to optimize performance by avoiding expensive calculations on every render.
 * The memoized value is recalculated only when one of the dependencies changes.
 * 
 * Difference between React.memo() and useMemo():
 * - React.memo(): Used to memoize entire functional components to prevent unnecessary re-renders.
 * - useMemo(): Used to memoize the result of a specific computation within a component.
 * 
 * When to use:
 * - Use React.memo() when you want to optimize a functional component by skipping re-renders if props haven't changed.
 * - Use useMemo() when you want to optimize expensive calculations or stabilize references to objects/arrays passed as props.
 */

const UseMemoDemo = () => {
  const [count, setCount] = useState(0); // State to track the count value
  const [text, setText] = useState(''); // State to track the input text

  // Expensive computation function
  const expensiveComputation = (num) => {
    console.log('Running expensive computation...'); // Log to indicate computation is running
    let result = 0; // Initialize result to 0
    for (let i = 0; i < 1000000000; i++) { // Simulate an expensive loop
      result += num; // Increment result by num in each iteration
    }
    return result; // Return the computed result
  };

  // Memoize the result of the expensive computation
  const computedValue = useMemo(() => expensiveComputation(count), [count]); // Recompute only when 'count' changes

  return (
    <div>
      <h2>useMemo() Demo</h2> {/* Title of the demo */}
      <p>Count: {count}</p> {/* Display the current count */}
      <p>Computed Value: {computedValue}</p> {/* Display the memoized computed value */}
      <button onClick={() => setCount((prev) => prev + 1)}>Increment Count</button> {/* Button to increment count */}
      <br /> {/* Line break for spacing */}
      <input
        type="text" // Input type is text
        value={text} // Bind input value to text state
        onChange={(e) => setText(e.target.value)} // Update text state on input change
        placeholder="Type something..." // Placeholder text for the input
      />
      <p>Typed Text: {text}</p> {/* Display the typed text */}
    </div>
  );
};

export default UseMemoDemo; // Export the component for use in other files
