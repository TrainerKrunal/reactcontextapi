import React from 'react';
import useFetch from './useFetch'; // Importing the custom useFetch hook

/**
 * FetchDemo Component
 * 
 * This component demonstrates the usage of the custom `useFetch` hook.
 * It fetches data from a public API and displays the results, along with loading and error states.
 */

const FetchDemo = () => {
  const url = 'https://jsonplaceholder.typicode.com/posts'; // Public API endpoint
  const { data, loading, error } = useFetch(url); // Using the custom useFetch hook

  return (
    <div>
      <h1>Fetch Demo</h1>
      {loading && <p>Loading...</p>} {/* Display loading state */}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>} {/* Display error state */}
      {data && (
        <ul>
          {data.slice(0, 10).map((post) => ( // Display the first 10 posts
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchDemo;
