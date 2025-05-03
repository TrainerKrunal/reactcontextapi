// BasicTableComponent.js

// Import React to create the component
import React, { useState, useEffect } from 'react';
import { FixedSizeList as List } from 'react-window'; // Import FixedSizeList for virtualization

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

  console.log('Data:', data); // Log the data array to verify its content

  const Row = ({ index, style }) => {
    console.log('Rendering Row:', index); // Log each row being rendered
    return (
      <div style={style}> {/* Apply styles for each row */}
        #{data[index].id} — {data[index].name} — {data[index].value} {/* Display row data */}
      </div>
    );
  };

  const VirtualList = () => (
    <List
      height={400} // Set the height of the virtualized list
      itemCount={data.length} // Total number of items in the list
      itemSize={35} // Height of each item in the list
      width={'100%'} // Set the width of the list
    >
      {({ index, style }) => (
        <Row index={index} style={style} /> // Pass props correctly to the Row component
      )}
    </List>
  );

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        {/* Title of the table */}
        <h2>Basic Data Table with Virtualization</h2>
        {/* Render the virtualized list */}
        <VirtualList />
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
