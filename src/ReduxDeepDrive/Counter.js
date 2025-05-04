import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './toolkitStore';

/**
 * Counter Component
 * 
 * This component demonstrates the use of Redux Toolkit for state management.
 * It allows users to increment, decrement, and reset a counter.
 * 
 * Key Concepts:
 * - `useSelector`: A hook to extract data from the Redux store state.
 * - `useDispatch`: A hook to dispatch actions to the Redux store.
 * - `createSlice`: A Redux Toolkit function to create a slice of the store, combining actions and reducers.
 */
const Counter = () => {
  const count = useSelector((state) => state.counter.value); // `useSelector` extracts the `counter` state from the Redux store
  const dispatch = useDispatch(); // `useDispatch` provides a way to dispatch actions to the Redux store

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button> {/* Dispatch increment action */}
      <button onClick={() => dispatch(decrement())}>Decrement</button> {/* Dispatch decrement action */}
      <button onClick={() => dispatch(reset())}>Reset</button> {/* Dispatch reset action */}
    </div>
  );
};

export default Counter;
