// App.js

import { useState } from 'react';

import Grandparent from './Grandparent';
import { MyContext } from './MyContext';
import ThemeContext from './Theme/ThemeContext';
import ThemeToggleButton from './Theme/ThemeToggleButton';
import ChildComponent from './Theme/ChildComponent';
import './Theme/Theme.css';

const App = () => {
  // State to manage the theme (light or dark)
  const [theme, setTheme] = useState('light');

  // State to manage the message
  const [message, setMessage] = useState('Hello from App!');

  // Function to toggle the theme between light and dark
  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    // Provide the message context to the entire component tree
    <MyContext.Provider value={{ message }}>
      {/* Provide the theme context to the entire component tree */}
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
          <h1>Theme Context Example</h1>
          {/* Button to toggle the theme */}
          <ThemeToggleButton />
          {/* Display the current theme */}
          <ChildComponent />
          {/* Input box to update the message */}
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Update message"
          />
          {/* Grandparent component */}
          <Grandparent />
        </div>
      </ThemeContext.Provider>
    </MyContext.Provider>
  );
};

export default App;
