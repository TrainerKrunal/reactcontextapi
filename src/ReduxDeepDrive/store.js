import { createStore } from 'redux';

/**
 * Actions: These are plain JavaScript objects that describe what you want to do.
 * Example: Adding or removing a todo item.
 */
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';

// Action creators
export const addTodo = (todo) => ({ type: ADD_TODO, payload: todo });
export const removeTodo = (id) => ({ type: REMOVE_TODO, payload: id });

/**
 * Reducer: A function that takes the current state and an action, and returns the new state.
 * It is a pure function with no side effects.
 */
const initialState = {
  todos: [], // Initial state with an empty list of todos
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload], // Add a new todo to the list
      };
    case REMOVE_TODO:
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
