// AgGridComponent.js

import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { ClientSideRowModelModule, ValidationModule, PaginationModule, TextFilterModule, NumberFilterModule, DateFilterModule } from 'ag-grid-community'; // Import the required modules
import { ModuleRegistry } from 'ag-grid-community'; // Import ModuleRegistry to register modules

// Register the required modules
ModuleRegistry.registerModules([ClientSideRowModelModule, ValidationModule, PaginationModule, TextFilterModule, NumberFilterModule, DateFilterModule]);

const AgGridComponent = () => {
  // Generate 1000 rows of sample data
  const data = [...Array(1000).keys()].map(i => ({
    id: i + 1, // Unique ID for each row
    name: `Item ${i + 1}`, // Name field with a unique label
    value: Math.floor(Math.random() * 1000), // Random value between 0 and 999
  }));

  const columns = [
    { headerName: 'ID', field: 'id', sortable: true, filter: true },
    { headerName: 'Name', field: 'name' },
    { headerName: 'Value', field: 'value' },
  ];

  console.log('Row Data:', data); // Log the row data to verify its content
  console.log('Column Definitions:', columns); // Log the column definitions to verify their configuration

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}> {/* Improved layout */}
      <h2>Ag-Grid Data Table</h2>
      <div className="ag-theme-alpine" style={{ width: '100%', height: 400, overflowX: 'hidden' }}> {/* Adjusted width to 100% and disabled horizontal scrolling */}
        <AgGridReact
          rowData={data} // Data to display in the grid
          columnDefs={columns} // Column definitions
          pagination={true} // Enable pagination
          paginationPageSize={10} // Set the number of rows per page
          domLayout="autoHeight" // Automatically adjust height
          suppressHorizontalScroll={true} // Suppress horizontal scrolling
          defaultColDef={{ sortable: true, filter: true }} // Apply default sorting and filtering to all columns
        />
      </div>
    </div>
  );
};

export default AgGridComponent;
