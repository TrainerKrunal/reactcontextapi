import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

/**
 * ListUser Component
 * 
 * This component displays a list of users with options to edit and delete.
 */
const ListUser = ({ users = [], setUsers, setFormData, setEditingUserId }) => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`); // Simulated API call
      setUsers(users.filter((user) => user.id !== id));
      alert('User deleted successfully!');
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEdit = (id) => {
    const userToEdit = users.find((user) => user.id === id); // Find the user to edit
    setFormData({ name: userToEdit.name, email: userToEdit.email }); // Populate the form with user data
    setEditingUserId(id); // Set the ID of the user being edited
    navigate('/create-user'); // Navigate to the CreateUser component for editing
  };

  return (
    <div>
      <h1>List of Users</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleEdit(user.id)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListUser;
