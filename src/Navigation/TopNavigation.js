import React from 'react';
import { Link } from 'react-router-dom';
import './TopNavigation.css'; // Importing CSS for styling

/**
 * TopNavigation Component
 * 
 * This component provides navigation links to various sections of the project.
 */
const TopNavigation = () => {
  return (
    <nav className="top-navigation"> {/* Navigation bar */}
      <ul>
        <li><Link to="/theme">Theme</Link></li>
        <li><Link to="/auth">Auth</Link></li>
        <li><Link to="/custom-hooks">Custom Hooks</Link></li>
        <li><Link to="/data-grid">Data Grid</Link></li>
        <li><Link to="/hoc">HOC</Link></li>
        <li><Link to="/performance-optimization">Performance Optimization</Link></li>
        <li><Link to="/create-user">CRUD</Link></li>
        <li><Link to="/redux-basic">Redux Basics</Link></li> {/* New link for Redux Basics */}
        <li><Link to="/redux-toolkit">Redux Toolkit Basics</Link></li> {/* New link for Redux Toolkit Basics */}
        <li><Link to="/redux-async">Redux Async Logic</Link></li> {/* New link for Redux Async Logic */}
        <li><Link to="/use-memo">useMemo</Link></li> {/* New link for useMemo */}
        <li><Link to="/react-callback">React Callback</Link></li> {/* New link for useCallback Demo */}
        <li><Link to="/hoc-auth">Authentication Demo</Link></li> {/* Added a navigation link for Authentication Demo under HOC */}
      </ul>
    </nav>
  );
};

export default TopNavigation;
