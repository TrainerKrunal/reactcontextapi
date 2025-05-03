import React from 'react';
import useForm from './useForm'; // Importing the custom useForm hook

/**
 * FormDemo Component
 * 
 * This component demonstrates the usage of the custom `useForm` hook.
 * It allows the user to manage form state interactively and reset the form.
 */

const FormDemo = () => {
  const initialValues = { name: '', email: '' }; // Initial values for the form fields
  const { values, handleChange, resetForm } = useForm(initialValues); // Using the custom useForm hook

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    alert(`Form Submitted!\nName: ${values.name}\nEmail: ${values.email}`); // Display form values
  };

  return (
    <div>
      <h1>useForm Demo</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange} // Update form state on input change
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange} // Update form state on input change
            placeholder="Enter your email"
          />
        </div>
        <button type="submit">Submit</button> {/* Submit button */}
        <button type="button" onClick={resetForm}>Reset</button> {/* Reset button */}
      </form>
    </div>
  );
};

export default FormDemo;
