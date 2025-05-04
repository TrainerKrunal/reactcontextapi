import React, { useState, useMemo } from 'react';
import Grandparent from './Grandparent';
import { MyContext } from './MyContext';
import ThemeContext from './Theme/ThemeContext';
import ChildComponent from './Theme/ChildComponent';
import AuthContext from './Auth/AuthContext';
import './Theme/Theme.css';
import AuthenticationDemo from './HOC/AuthenticationDemo';
import BankUser from './CRUD/BankUser';
import { Routes, Route } from 'react-router-dom';
import ThemeToggleButton from './Theme/ThemeToggleButton';
import AuthComponent from './Auth/AuthComponent';
import FetchDemo from './CustomHooks/FetchDemo';
import AgGridComponent from './DataGrids/AgGridComponent';
import LoggerDemo from './HOC/LoggerDemo';
import ReactMemoDemo from './PerformanceOptimization/reactMemoDemo';

/**
 * MainContent Component
 * 
 * This component provides the main content and context providers for the application.
 */
const MainContent = () => {
  const [theme, setTheme] = useState('light');
  const [message, setMessage] = useState('Hello from App!');
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [view, setView] = useState('list'); // State to manage the current view

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  const login = () => setUser('Krunal');
  const logout = () => setUser(null);

  const authValue = useMemo(() => ({ user, login, logout }), [user]);

  return (
    <MyContext.Provider value={{ message }}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <AuthContext.Provider value={authValue}>
          <Routes>
            <Route
              path="/theme"
              element={
                <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
                  <h1>Context Example</h1>
                  <button onClick={toggleTheme}>Toggle Theme</button>
                  <ChildComponent />
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Update message"
                  />
                  <Grandparent />
                </div>
              }
            />
            <Route path="/auth" element={<AuthComponent />} />
            <Route path="/custom-hooks" element={<FetchDemo />} />
            <Route path="/data-grid" element={<AgGridComponent />} />
            <Route path="/hoc" element={<LoggerDemo message="Hello from HOC!" />} />
            <Route path="/performance-optimization" element={<ReactMemoDemo />} />
            <Route
              path="/create-user"
              element={<BankUser view="create" setView={setView} />}
            />
            <Route
              path="/list-user"
              element={<BankUser view="list" setView={setView} />}
            />
          </Routes>
        </AuthContext.Provider>
      </ThemeContext.Provider>
    </MyContext.Provider>
  );
};

export default MainContent;
