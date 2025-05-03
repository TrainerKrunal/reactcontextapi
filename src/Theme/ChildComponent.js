// ChildComponent.js

// Import useContext to consume the ThemeContext
import { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ChildComponent = () => {
  const { theme } = useContext(ThemeContext); // Access the current theme from ThemeContext

  return (
    <div> {/* Display the current theme */}
      Current Theme: {theme}
    </div>
  );
};

export default ChildComponent;
