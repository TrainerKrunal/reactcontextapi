import React from 'react'; // Importing React library
import axios from 'axios'; // Importing Axios for API calls
import CreateUser from './CreateUser'; // Importing CreateUser component
import ListUser from './ListUser'; // Importing ListUser component

/**
 * BankUser Component
 * 
 * This component renders CreateUser or ListUser components based on the view prop.
 */
const BankUser = ({ view, setView }) => {
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

  // Removed the debug log for users

  return (
    <div>
      {view === 'create' && (
        <CreateUser
          users={users}
          setUsers={setUsers}
          formData={formData}
          setFormData={setFormData}
          editingUserId={editingUserId}
          setEditingUserId={setEditingUserId}
          setView={setView}
        />
      )}
      {view === 'list' && (
        <ListUser
          users={users}
          setUsers={setUsers}
          setFormData={setFormData}
          setEditingUserId={setEditingUserId}
          setView={setView}
        />
      )}
    </div>
  );
};

export default BankUser; // Exporting the BankUser component for use in other parts of the application
