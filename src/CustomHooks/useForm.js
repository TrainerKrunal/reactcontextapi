import { useState } from 'react';

/**
 * Custom Hook: useForm
 * 
 * This custom hook is used to manage form state and handle input changes.
 * It simplifies the process of managing form data in React components.
 * 
 * @param {object} initialValues - An object containing the initial values for the form fields.
 * @returns {object} - An object containing the form values, a change handler, and a reset function.
 */

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues); // State to store form values

  // Handler for input changes
  const handleChange = (event) => {
    const { name, value } = event.target; // Destructure name and value from the input
    setValues({
      ...values, // Spread the existing values
      [name]: value, // Update the specific field
    });
  };

  // Function to reset the form to its initial values
  const resetForm = () => {
    setValues(initialValues);
  };

  return { values, handleChange, resetForm }; // Return the form values, change handler, and reset function
};

export default useForm;
