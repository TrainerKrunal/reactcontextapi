import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCounter, increment, decrement } from './asyncToolkitStore';

/**
 * AsyncCounter Component
 * 
 * This component demonstrates the use of `createAsyncThunk` for handling async logic in Redux Toolkit.
 * It fetches an initial counter value from a mock API and allows incrementing and decrementing the counter.
 * 
 * Key Concepts:
 * - `createAsyncThunk`: A Redux Toolkit function to handle async logic like API calls.
 * - Thunk: A middleware that allows writing async logic that interacts with the Redux store.
 * - Difference with Async: Thunks allow dispatching actions before and after async operations.
 */
const AsyncCounter = () => {
  const { value, status } = useSelector((state) => state.asyncCounter); // Selector to get the counter state
  const dispatch = useDispatch(); // Hook to dispatch actions to the Redux store

  useEffect(() => {
    dispatch(fetchCounter()); // Fetch the initial counter value when the component mounts
  }, [dispatch]);

  return (
    <div>
      <h1>Async Counter</h1>
      {status === 'loading' ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2>Counter: {value}</h2>
          <button onClick={() => dispatch(increment())}>Increment</button> {/* Dispatch increment action */}
          <button onClick={() => dispatch(decrement())}>Decrement</button> {/* Dispatch decrement action */}
        </>
      )}
    </div>
  );
};

export default AsyncCounter;
