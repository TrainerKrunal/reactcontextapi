// App.js

import { useState, useMemo } from 'react'; // Importing useState and useMemo hooks from React
import Grandparent from './Grandparent'; // Importing Grandparent component
import { MyContext } from './MyContext'; // Importing MyContext for message context
import ThemeContext from './Theme/ThemeContext'; // Importing ThemeContext for theme management
import ThemeToggleButton from './Theme/ThemeToggleButton'; // Importing ThemeToggleButton component
import ChildComponent from './Theme/ChildComponent'; // Importing ChildComponent to display current theme
import AuthContext from './Auth/AuthContext'; // Importing AuthContext for authentication
import AuthComponent from './Auth/AuthComponent'; // Importing AuthComponent for login/logout functionality
import './Theme/Theme.css'; // Importing CSS file for styling
import BasicTableComponent from './DataGrids/BasicTableComponent'; // Importing BasicTableComponent
import AgGridComponent from './DataGrids/AgGridComponent'; // Importing AgGridComponent
import ReactMemoDemo from './PerformanceOptimization/reactMemoDemo'; // Importing ReactMemoDemo component

const App = () => {
  // State to manage the theme (light or dark)
  const [theme, setTheme] = useState('light');

  // State to manage the message
  const [message, setMessage] = useState('Hello from App!');

  // State to manage authentication
  const [user, setUser] = useState(null);

  // Function to toggle the theme between light and dark
  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  // Function to log in a user
  const login = () => setUser('Krunal');

  // Function to log out a user
  const logout = () => setUser(null);

  // Memoize the auth context value to avoid unnecessary re-renders
 
  // useMemo ensures that the authValue object is only recreated when the 'user' state changes, improving performance by preventing unnecessary re-renders.
  // It is particularly useful for optimizing expensive computations or stabilizing references to objects/arrays passed as props.
  // In this case, it prevents unnecessary re-renders of components consuming the AuthContext.
 const authValue = useMemo(() => ({ user, login, logout }), [user]);
 
  return (
    // Provide the message context to the entire component tree
    <MyContext.Provider value={{ message }}>
      {/* Provide the theme context to the entire component tree */}
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {/* Provide the memoized auth context to the entire component tree */}
        <AuthContext.Provider value={authValue}>
          <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
            {/* Title of the application */}
            <h1>Context Example</h1>
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
            {/* Grandparent component to demonstrate prop drilling */}
            <Grandparent />
            {/* Authentication component to handle login/logout */}
            <AuthComponent />
            {/* Render the AgGridComponent for testing */}
            <AgGridComponent />
            {/* Commenting out BasicTableComponent for now */}
            {/* <BasicTableComponent /> */}
            {/* Render the ReactMemoDemo component for testing */}
            <ReactMemoDemo />
          </div>
        </AuthContext.Provider>
      </ThemeContext.Provider>
    </MyContext.Provider>
  );
};

export default App;
