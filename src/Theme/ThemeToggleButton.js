// ThemeToggleButton.js

// Import useContext to consume the ThemeContext
import { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Access theme and toggleTheme from ThemeContext

  return (
    <button onClick={toggleTheme}> {/* Button to toggle the theme */}
      Switch to {theme === 'light' ? 'dark' : 'light'} mode {/* Display the current theme mode */}
    </button>
  );
};

export default ThemeToggleButton;
