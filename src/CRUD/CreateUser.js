import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

/**
 * CreateUser Component
 * 
 * This component provides a form to create a new user.
 * On successful creation, it navigates to the ListUser component.
 */
const CreateUser = ({ users, setUsers, formData, setFormData, editingUserId, setEditingUserId }) => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Ensure the `users` state is updated correctly after a new user is created
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', formData); // Simulated API call
      setUsers((prevUsers) => [...prevUsers, { ...formData, id: response.data.id }]); // Add new user to the list
      alert('User created successfully!');
      navigate('/list-user'); // Navigate to ListUser component
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  // Simulated the update locally by directly modifying the `users` state
  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log('Updating user with ID:', editingUserId);
    console.log('Form data:', formData);
    try {
      setUsers(
        users.map((user) =>
          user.id === editingUserId ? { ...user, ...formData } : user
        )
      );
      alert('User updated successfully!'); // Show confirmation message
      setFormData({ name: '', email: '' }); // Reset the form
      setEditingUserId(null); // Clear the editing user ID
      navigate('/list-user'); // Navigate back to ListUser component
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div>
      <h1>{editingUserId ? 'Edit User' : 'Create User'}</h1>
      <form onSubmit={editingUserId ? handleUpdate : handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">{editingUserId ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
};

export default CreateUser;
