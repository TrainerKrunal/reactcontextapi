import React from 'react';
import useLocalStorage from './useLocalStorage'; // Importing the custom useLocalStorage hook

/**
 * useLocalStorageDemo Component
 * 
 * This component demonstrates the usage of the custom `useLocalStorage` hook.
 * It allows the user to store and retrieve a value from localStorage interactively.
 */

const UseLocalStorageDemo = () => {
  const [name, setName] = useLocalStorage('name', ''); // Using the custom useLocalStorage hook

  return (
    <div>
      <h1>useLocalStorage Demo</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} // Update localStorage when input changes
        placeholder="Enter your name"
      />
      <p>Stored Name: {name}</p> {/* Display the stored value */}
    </div>
  );
};

export default UseLocalStorageDemo;
