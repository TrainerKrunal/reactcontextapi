import { useState } from 'react';

/**
 * Custom Hook: useLocalStorage
 * 
 * This custom hook is used to manage state that is synchronized with localStorage.
 * It allows you to store and retrieve data from the browser's localStorage in a React-friendly way.
 * 
 * @param {string} key - The key under which the data is stored in localStorage.
 * @param {any} initialValue - The initial value to use if no data is found in localStorage.
 * @returns {Array} - An array containing the stateful value and a function to update it.
 */

const useLocalStorage = (key, initialValue) => {
  // Retrieve the initial value from localStorage or use the provided initial value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key); // Get item from localStorage
      return item ? JSON.parse(item) : initialValue; // Parse JSON or return initial value
    } catch (error) {
      console.error('Error reading localStorage key:', key, error);
      return initialValue; // Return initial value if an error occurs
    }
  });

  // Function to update the value in state and localStorage
  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value; // Support functional updates
      setStoredValue(valueToStore); // Update state
      window.localStorage.setItem(key, JSON.stringify(valueToStore)); // Update localStorage
    } catch (error) {
      console.error('Error setting localStorage key:', key, error);
    }
  };

  return [storedValue, setValue]; // Return the stateful value and updater function
};

export default useLocalStorage;
