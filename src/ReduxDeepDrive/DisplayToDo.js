import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "./store"; // Importing action creators from the Store file

const DisplayToDo = () => {
    const todos = useSelector((state) => state.todos); // Using useSelector to get the todos from the Redux store
    const dispatch = useDispatch(); // Using useDispatch to get the dispatch function from the Redux store

    const handleRemoveTodo = (id) => {
        dispatch(removeTodo(id)); // Dispatching the removeTodo action with the id of the todo to be removed
    };

    return (
        <div>
            <h1>ToDo List</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text} {/* Displaying the todo text */}
                        <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button> {/* Correctly call the function */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DisplayToDo; // Exporting the DisplayToDo component
