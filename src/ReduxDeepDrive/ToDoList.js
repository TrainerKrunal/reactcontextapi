import { useState } from "react";
import { useDispatch } from "react-redux"; // Importing hooks from react-redux
import { addTodo } from "./store"; // Importing action creators from the Store file

/**
 * ToDoList Component: A simple todo list application that allows users to add and remove todos
 */

const ToDoList = () => {
    const [todoText, setTodoText] = useState(""); // State to manage the input text for the todo
    const dispatch = useDispatch(); // Using useDispatch to get the dispatch function from the Redux store

    const handleAddTodo = () => {
        if (todoText.trim()) {
            dispatch(addTodo({ id: Date.now(), text: todoText })); // Dispatching the addTodo action with the new todo object
            setTodoText(""); // Resetting the input text after adding the todo
        }
    };

    return (
        <div>
            <h1>ToDo List</h1>
            <input
                type="text"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)} // Updating the input text state on change
                placeholder="Enter todo text"
            />
            <button onClick={handleAddTodo}>Add Todo</button> {/* Button to add the todo */}
        </div>
    );
};

export default ToDoList; // Exporting the ToDoList component
