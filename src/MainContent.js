import React, { useState, useMemo } from 'react';
import { MyContext } from './MyContext';
import ThemeContext from './Theme/ThemeContext';
import ChildComponent from './Theme/ChildComponent';
import AuthContext from './Auth/AuthContext';
import './Theme/Theme.css';
import { Routes, Route } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import store from './ReduxDeepDrive/store'; // Redux Basics store
import toolkitStore from './ReduxDeepDrive/toolkitStore'; // Redux Toolkit store
import asyncToolkitStore from './ReduxDeepDrive/asyncToolkitStore'; // Importing the async store
import Loadable from 'react-loadable';

// Define a loading component to display while components are being loaded
const Loading = () => <div>Loading...</div>;

// Lazy load components using react-loadable
const Grandparent = Loadable({ loader: () => import('./Grandparent'), loading: Loading });
const BankUser = Loadable({ loader: () => import('./CRUD/BankUser'), loading: Loading });
const ToDoList = Loadable({ loader: () => import('./ReduxDeepDrive/ToDoList'), loading: Loading });
const Counter = Loadable({ loader: () => import('./ReduxDeepDrive/Counter'), loading: Loading });
const AsyncCounter = Loadable({ loader: () => import('./ReduxDeepDrive/AsyncCounter'), loading: Loading });
const AuthenticationDemo = Loadable({ loader: () => import('./HOC/AuthenticationDemo'), loading: Loading });
const LoggerDemo = Loadable({ loader: () => import('./HOC/LoggerDemo'), loading: Loading });
const ReactMemoDemo = Loadable({ loader: () => import('./PerformanceOptimization/reactMemoDemo'), loading: Loading });
const UseMemoDemo = Loadable({ loader: () => import('./PerformanceOptimization/useMemoDemo'), loading: Loading });
const UseCallBackDemo = Loadable({ loader: () => import('./PerformanceOptimization/useCallBackDemo'), loading: Loading });
const FetchDemo = Loadable({ loader: () => import('./CustomHooks/FetchDemo'), loading: Loading });
const AgGridComponent = Loadable({ loader: () => import('./DataGrids/AgGridComponent'), loading: Loading });

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
            <Route path="/auth" element={<AuthenticationDemo />} />
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
            <Route
              path="/redux-basic"
              element={
                <ReduxProvider store={store}>
                  <ToDoList />
                </ReduxProvider>
              }
            /> {/* Route for Redux Basics */}
            <Route
              path="/redux-toolkit"
              element={
                <ReduxProvider store={toolkitStore}>
                  <Counter />
                </ReduxProvider>
              }
            /> {/* Route for Redux Toolkit Basics */}
            {/* Added a route for Async Logic with `createAsyncThunk` */}
            <Route
              path="/redux-async"
              element={
                <ReduxProvider store={asyncToolkitStore}>
                  <AsyncCounter />
                </ReduxProvider>
              }
            />
            <Route path="/react-memo" element={<ReactMemoDemo />} />
            <Route path="/use-memo" element={<UseMemoDemo />} />
            <Route path="/react-callback" element={<UseCallBackDemo />} /> {/* Route for React Callback Demo */}
            <Route path="/hoc-auth" element={<AuthenticationDemo isAuthenticated={true} />} /> {/* Route for Authentication Demo under HOC */}
          </Routes>
        </AuthContext.Provider>
      </ThemeContext.Provider>
    </MyContext.Provider>
  );
};

export default MainContent;
