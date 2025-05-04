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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', formData); // Simulated API call
      setUsers([...users, { ...formData, id: response.data.id }]); // Add new user to the list
      alert('User created successfully!');
      navigate('/list-user'); // Navigate to ListUser component
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://jsonplaceholder.typicode.com/users/${editingUserId}`, formData); // Simulated API call
      setUsers(
        users.map((user) =>
          user.id === editingUserId ? { ...user, ...formData } : user
        )
      );
      alert('User updated successfully!');
      setFormData({ name: '', email: '' }); // Reset the form
      setEditingUserId(null); // Clear the editing user ID
      navigate('/list-user'); // Navigate to ListUser component
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
