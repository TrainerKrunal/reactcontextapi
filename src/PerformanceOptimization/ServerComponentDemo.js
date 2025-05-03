import React from 'react';

/**
 * This file introduces the concept of Server Components and Client Components in React.
 * 
 * Server Components:
 * - Server Components are rendered on the server and sent to the client as HTML.
 * - They do not include JavaScript, so they are lightweight and fast.
 * - They are ideal for rendering static or data-heavy content that does not require interactivity.
 * - Server Components can fetch data directly from the server, reducing the need for API calls on the client.
 * - They are introduced in React 18 and are part of React's new architecture for optimizing performance.
 * 
 * Client Components:
 * - Client Components are rendered on the client and include JavaScript for interactivity.
 * - They are ideal for interactive elements like forms, buttons, and animations.
 * - Client Components can use React hooks like useState and useEffect, which are not available in Server Components.
 * 
 * When to Use:
 * - Use Server Components for static or data-heavy content that does not require interactivity.
 * - Use Client Components for interactive elements that require user interaction or dynamic updates.
 * - A combination of both can be used to optimize performance and user experience.
 * 
 * Example:
 * Below is a simple example of a Server Component and a Client Component.
 */

/**
 * Detailed Example:
 * 
 * Let's consider a scenario where we need to display a list of products fetched from a database.
 * - The Server Component will fetch the data from the database and render it as static HTML.
 * - The Client Component will allow users to interact with the list, such as filtering or sorting.
 * 
 * Advantages of Server Components:
 * 1. Reduced JavaScript bundle size: Since Server Components are rendered on the server, they do not include JavaScript, making the client-side bundle smaller.
 * 2. Improved performance: Server Components can fetch data directly from the server, reducing the need for API calls and improving load times.
 * 3. SEO benefits: Server-rendered content is more accessible to search engine crawlers.
 * 
 * Below is an extended example combining Server and Client Components:
 */

// Server Component (simulated as a functional component for demonstration)
const ServerComponent = ({ data }) => {
  return (
    <div>
      <h2>Server Component</h2>
      <p>Data fetched from the server: {data}</p>
    </div>
  );
};

// Client Component
const ClientComponent = () => {
  const [count, setCount] = React.useState(0); // State for interactivity

  return (
    <div>
      <h2>Client Component</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

// Server Component to fetch and render product data
const ProductListServer = ({ products }) => {
  return (
    <div>
      <h2>Product List (Server Rendered)</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

// Client Component to filter the product list
const ProductFilterClient = ({ products }) => {
  const [filter, setFilter] = React.useState(''); // State for filter input

  // Filtered product list based on user input
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Product Filter (Client Rendered)</h2>
      <input
        type="text"
        placeholder="Filter products..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

// Demo Component combining both Server and Client Components
const ServerComponentDemo = () => {
  const serverData = "This is data rendered on the server."; // Simulated server data

  // Simulated server data
  const productData = [
    { id: 1, name: 'Product A' },
    { id: 2, name: 'Product B' },
    { id: 3, name: 'Product C' },
  ];

  return (
    <div>
      <h1>Server and Client Components Demo</h1>
      <ServerComponent data={serverData} /> {/* Render Server Component */}
      <ClientComponent /> {/* Render Client Component */}
      <ProductListServer products={productData} /> {/* Render Server Component for Product List */}
      <ProductFilterClient products={productData} /> {/* Render Client Component for Product Filter */}
    </div>
  );
};

export default ServerComponentDemo;
