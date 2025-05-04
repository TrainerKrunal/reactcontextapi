/**
 * Redux Basics Store
 * 
 * This file demonstrates the traditional Redux setup with actions, reducers, and a store.
 * 
 * Key Concepts:
 * - Actions: Plain JavaScript objects that describe what you want to do (e.g., ADD_TODO, REMOVE_TODO).
 * - Reducer: A function that takes the current state and an action, and returns the new state.
 * - Store: The single source of truth that holds the state of the application.
 */

import { createStore } from 'redux';

/**
 * Actions: These are plain JavaScript objects that describe what you want to do.
 * Example: Adding or removing a todo item.
 */
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';

// Action creators
export const addTodo = (todo) => {
  console.log('Dispatching ADD_TODO with payload:', todo); // Debug log for action payload
  return { type: ADD_TODO, payload: todo }; // Action to add a todo
};

export const removeTodo = (id) => {
  console.log('Dispatching REMOVE_TODO with payload:', id); // Debug log for action payload
  return { type: REMOVE_TODO, payload: id }; // Action to remove a todo by ID
};

/**
 * Reducer: A function that takes the current state and an action, and returns the new state.
 * It is a pure function with no side effects.
 */
const initialState = {
  todos: [], // Initial state with an empty list of todos
};

// Added a default value for `state.todos` to ensure it is always an array
const todoReducer = (state = initialState, action) => {
  console.log('Reducer called with state:', state, 'and action:', action); // Debug log for reducer
  switch (action.type) {
    case ADD_TODO:
      console.log('Adding todo:', action.payload); // Debug log for added todo
      return {
        ...state,
        todos: [...state.todos, action.payload], // Add a new todo to the list
      };
    case REMOVE_TODO:
      console.log('Removing todo with ID:', action.payload); // Debug log for removed todo
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload), // Remove a todo by ID
      };
    default:
      return state; // Return the current state if no action matches
  }
};

/**
 * Store: The single source of truth that holds the state of the application.
 * It is created using the reducer.
 */
const store = createStore(todoReducer);

export default store;
