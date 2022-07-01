import React from "react";
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import './TodoList.css';

// Define component 
// todos = [] - set default value to empty
const  TodoList = ({ todos = [ { text: 'Hello' } ] }) => (
    <div className="list-wrapper">
        <NewTodoForm/>
        {todos.map(todo => <TodoListItem todo={todo} />)}
    </div>
);

export default TodoList;