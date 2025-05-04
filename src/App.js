// App.js

import { BrowserRouter as Router } from 'react-router-dom'; // Importing Router for navigation
import TopNavigation from './Navigation/TopNavigation'; // Importing TopNavigation component
import MainContent from './MainContent'; // Importing MainContent component

const App = () => {
  return (
    <Router> {/* Setting up the Router for navigation */}
      <h1>Welcome to the React Context API Project</h1> {/* Basic welcome message */}
      <TopNavigation /> {/* Render the TopNavigation component */}
      <MainContent /> {/* Render the MainContent component */}
    </Router>
  );
};

export default App;
