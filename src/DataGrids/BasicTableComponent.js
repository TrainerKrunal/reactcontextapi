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
  const [page, setPage] = useState(0); // State to track the current page
  const pageSize = 10; // Number of rows per page
  const [sortKey, setSortKey] = useState('id'); // State to track the sorting key

  // Function to sort data by a specific key
  const sortBy = key => {
    setSortKey(key);
  };

  // Paginate and sort the data
  const paginatedData = [...data]
    .sort((a, b) => (a[sortKey] > b[sortKey] ? 1 : -1))
    .slice(page * pageSize, (page + 1) * pageSize);

  useEffect(() => {
    const start = performance.now(); // Start timing
    return () => {
      const end = performance.now(); // End timing
      setRenderTime((end - start).toFixed(2)); // Calculate and set render time
    };
  }, []); // Run only once after the component mounts

  const Row = ({ index, style }) => {
    console.log('Rendering Row:', index); // Log each row being rendered
    return (
      <div style={style}> {/* Apply styles for each row */}
        #{paginatedData[index].id} — {paginatedData[index].name} — {paginatedData[index].value} {/* Display row data */}
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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div>
        {/* Title of the table */}
        <h2>Basic Data Table with Sorting and Pagination</h2>
        {/* Sorting buttons */}
        <div>
          <button onClick={() => sortBy('id')}>Sort by ID</button>
          <button onClick={() => sortBy('name')}>Sort by Name</button>
          <button onClick={() => sortBy('value')}>Sort by Value</button>
        </div>
        {/* Render the paginated data */}
        {paginatedData.map((row, index) => (
          <div key={row.id}>
            #{row.id} — {row.name} — {row.value}
          </div>
        ))}
        {/* Pagination controls */}
        <div>
          <button onClick={() => setPage(prev => Math.max(prev - 1, 0))} disabled={page === 0}>
            Previous
          </button>
          <span> Page {page + 1} </span>
          <button
            onClick={() => setPage(prev => (prev + 1) * pageSize < data.length ? prev + 1 : prev)}
            disabled={(page + 1) * pageSize >= data.length}
          >
            Next
          </button>
        </div>
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
