// BasicTableComponent.js

// Import React to create the component
import React, { useState, useEffect } from 'react';

const BasicTableComponent = () => {
  // Generate 1000 rows of sample data
  // Each row contains an ID, a Name, and a random Value
  const data = [...Array(1000).keys()].map(i => ({
    id: i + 1, // Unique ID for each row
    name: `Item ${i + 1}`, // Name field with a unique label
    value: Math.floor(Math.random() * 1000), // Random value between 0 and 999
  }));

  const [renderTime, setRenderTime] = useState(0); // State to track render time

  useEffect(() => {
    const start = performance.now(); // Start timing
    return () => {
      const end = performance.now(); // End timing
      setRenderTime((end - start).toFixed(2)); // Calculate and set render time
    };
  }, []); // Run only once after the component mounts

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        {/* Title of the table */}
        <h2>Basic Data Table</h2>
        {/* Table structure with border and padding */}
        <table border="1" cellPadding="5">
          <thead>
            <tr>
              {/* Table headers */}
              <th>ID</th><th>Name</th><th>Value</th>
            </tr>
          </thead>
          <tbody>
            {/* Map through the data array to render each row */}
            {data.map(row => (
              <tr key={row.id}> {/* Unique key for each row */}
                <td>{row.id}</td><td>{row.name}</td><td>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        {/* Display render time */}
        <h3>Render Time</h3>
        <p>{renderTime} ms</p>
      </div>
    </div>
  );
};

export default BasicTableComponent;
