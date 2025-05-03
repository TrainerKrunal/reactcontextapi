import React, { useState, useCallback } from 'react'; // Importing React, useState, and useCallback hooks

/**
 * This component demonstrates the use of useCallback() in React.
 * 
 * useCallback() is a React Hook that memoizes a callback function.
 * It is used to optimize performance by preventing the recreation of functions on every render.
 * The memoized function is recreated only when one of the dependencies changes.
 * 
 * Difference between React.memo(), useMemo(), and useCallback():
 * - React.memo(): Used to memoize entire functional components to prevent unnecessary re-renders.
 * - useMemo(): Used to memoize the result of a specific computation within a component.
 * - useCallback(): Used to memoize a callback function to prevent its recreation on every render.
 * 
 * When to use:
 * - Use React.memo() when you want to optimize a functional component by skipping re-renders if props haven't changed.
 * - Use useMemo() when you want to optimize expensive calculations or stabilize references to objects/arrays passed as props.
 * - Use useCallback() when you want to optimize functions passed as props to child components to prevent unnecessary re-renders.
 */

const UseCallBackDemo = () => {
  const [count, setCount] = useState(0); // State to track the count value
  const [text, setText] = useState(''); // State to track the input text

  // Memoize the increment function to prevent its recreation on every render
  const increment = useCallback(() => {
    setCount((prev) => prev + 1); // Increment the count value
  }, []); // No dependencies, so the function is memoized once

  return (
    <div>
      <h2>useCallback() Demo</h2> {/* Title of the demo */}
      <p>Count: {count}</p> {/* Display the current count */}
      <button onClick={increment}>Increment Count</button> {/* Button to increment count */}
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

export default UseCallBackDemo; // Export the component for use in other files

/**
 * Explanation for Participants:
 * 
 * The `UseCallBackDemo` component demonstrates the use of the `useCallback` hook in React.
 * Key points to observe:
 * 1. The `increment` function is memoized using `useCallback`, ensuring it is not recreated on every render.
 *    - This is particularly useful when passing functions as props to child components, as it prevents unnecessary re-renders.
 * 2. The `increment` function updates the `count` state when the button is clicked.
 * 3. The `text` state is updated independently of the `increment` function, showcasing that the memoized function remains stable.
 * 4. Participants should notice that the `increment` function is not recreated even when the `text` state changes.
 * 
 * This example highlights the difference between `useCallback` and other hooks like `useMemo`:
 * - `useCallback` is used to memoize functions.
 * - `useMemo` is used to memoize the result of computations.
 * 
 * Encourage participants to experiment by adding console logs or passing the `increment` function as a prop to a child component to observe its behavior.
 */
