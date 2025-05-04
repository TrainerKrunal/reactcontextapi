import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from './store';

/**
 * ToDoList Component
 * 
 * This component demonstrates the use of Redux for state management.
 * It allows users to add and remove todo items.
 */
const ToDoList = () => {
  const [todoText, setTodoText] = useState(''); // Local state for the input field
  const todos = useSelector((state) => state.todos); // Selector to get todos from the Redux store
  const dispatch = useDispatch(); // Hook to dispatch actions to the Redux store

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
