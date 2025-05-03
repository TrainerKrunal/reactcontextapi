import { useState, useEffect } from 'react';

/**
 * Custom Hook: useFetch
 * 
 * This custom hook is used to fetch data from an API and manage the loading, error, and data states.
 * It simplifies the process of making API calls and handling their states in React components.
 * 
 * @param {string} url - The API endpoint to fetch data from.
 * @returns {object} - An object containing the fetched data, loading state, and error state.
 */

const useFetch = (url) => {
  const [data, setData] = useState(null); // State to store fetched data
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track errors

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true before fetching data
      try {
        const response = await fetch(url); // Fetch data from the API
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`); // Handle HTTP errors
        }
        const result = await response.json(); // Parse the JSON response
        setData(result); // Update the data state with the fetched data
      } catch (err) {
        setError(err.message); // Update the error state if an error occurs
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    fetchData(); // Call the fetchData function
  }, [url]); // Re-run the effect when the URL changes

  return { data, loading, error }; // Return the data, loading, and error states
};

export default useFetch;
