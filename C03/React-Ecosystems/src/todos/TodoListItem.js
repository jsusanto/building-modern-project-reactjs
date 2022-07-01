import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({ todo, OnRemovePressed }) => (
    <div className="todo-item-container">
        <h3>{ todo.text }</h3>
        <div className="buttons-container">
            <button className="completed-button">Mark As Completed</button>
            <button
                onClick={() => OnRemovePressed(todo.text)} 
                className="remove-button">Remove</button>
        </div>
    </div>
);

export default TodoListItem;