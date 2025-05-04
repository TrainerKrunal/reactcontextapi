import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from './store';

/**
 * ToDoList Component
 * 
 * This component demonstrates the use of Redux for state management.
 * It allows users to add and remove todo items.
 * 
 * Key Concepts:
 * - `useSelector`: A hook to extract data from the Redux store state.
 * - `useDispatch`: A hook to dispatch actions to the Redux store.
 */
const ToDoList = () => {
  const [todoText, setTodoText] = useState(''); // Local state for the input field
  const todos = useSelector((state) => state.todos || []); // `useSelector` extracts the `todos` state from the Redux store
  const dispatch = useDispatch(); // `useDispatch` provides a way to dispatch actions to the Redux store

  // Added a debug log to verify the `todos` state in the component
  console.log('Current todos:', todos);

  const handleAddTodo = () => {
    if (todoText.trim()) {
      dispatch(addTodo({ id: Date.now(), text: todoText })); // Dispatch an action to add a todo
      setTodoText(''); // Clear the input field
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id)); // Dispatch an action to remove a todo by ID
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Enter a todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
