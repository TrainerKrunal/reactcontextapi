import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './TopNavigation.css'; // Importing CSS for styling
import GraphQLQueryDemo from '../GraphQL/GraphQLQueryDemo';
import GraphQLMutationDemo from '../GraphQL/GraphQLMutationDemo';
import GraphQLSubscriptionDemo from '../GraphQL/GraphQLSubscriptionDemo';

/**
 * TopNavigation Component
 * 
 * This component provides navigation links to various sections of the project.
 */
const TopNavigation = () => {
  return (
    <>
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
          <li><Link to="/graphql-query">GraphQL Query Demo</Link></li>
          <li><Link to="/graphql-mutation">GraphQL Mutation Demo</Link></li>
          <li><Link to="/graphql-subscription">GraphQL Subscription Demo</Link></li>
          <li><Link to="/redux">Redux</Link></li>
          <li><Link to="/displayTodo">Display ToDo</Link></li>
          <li><Link to="/redux-toolkit">Redux Toolkit</Link></li>
          <li><Link to="/async-toolkit">Redux Async</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/graphql-query" element={<GraphQLQueryDemo />} />
        <Route path="/graphql-mutation" element={<GraphQLMutationDemo />} />
        <Route path="/graphql-subscription" element={<GraphQLSubscriptionDemo />} />
      </Routes>
    </>
  );
};

export default TopNavigation;
