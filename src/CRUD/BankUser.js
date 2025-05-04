import React from 'react'; // Importing React library
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing Router, Routes, and Route for navigation
import axios from 'axios'; // Importing Axios for API calls
import CreateUser from './CreateUser'; // Importing CreateUser component
import ListUser from './ListUser'; // Importing ListUser component

/**
 * BankUser Component
 * 
 * This component sets up routing for CreateUser and ListUser components.
 */
const BankUser = () => {
  const [users, setUsers] = React.useState([]); // State to store the list of users
  const [formData, setFormData] = React.useState({ name: '', email: '' }); // State to store form data for creating or editing a user
  const [editingUserId, setEditingUserId] = React.useState(null); // State to track the ID of the user being edited

  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users'); // Fetching users from the API
        setUsers(response.data); // Updating the users state with the fetched data
      } catch (error) {
        console.error('Error fetching users:', error); // Logging any errors that occur during the fetch
      }
    };

    fetchUsers(); // Calling the fetchUsers function when the component mounts
  }, []); // Empty dependency array ensures this runs only once

  return (
    <Router> {/* Setting up the Router for navigation */}
      <Routes> {/* Defining the routes for the application */}
        <Route
          path="/" // Route for the CreateUser component
          element={
            <CreateUser
              users={users} // Passing the users state as a prop
              setUsers={setUsers} // Passing the setUsers function as a prop
              formData={formData} // Passing the formData state as a prop
              setFormData={setFormData} // Passing the setFormData function as a prop
              editingUserId={editingUserId} // Passing the editingUserId state as a prop
              setEditingUserId={setEditingUserId} // Passing the setEditingUserId function as a prop
            />
          }
        />
        <Route
          path="/list-user" // Route for the ListUser component
          element={
            <ListUser
              users={users} // Passing the users state as a prop
              setUsers={setUsers} // Passing the setUsers function as a prop
              setFormData={setFormData} // Passing the setFormData function as a prop
              setEditingUserId={setEditingUserId} // Passing the setEditingUserId function as a prop
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default BankUser; // Exporting the BankUser component for use in other parts of the application
