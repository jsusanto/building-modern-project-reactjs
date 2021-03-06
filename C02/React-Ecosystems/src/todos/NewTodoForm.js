import React, { useState } from 'react';
import './NewTodoForm.css';

/*
* We need to add useState to track the value in the input box
* <input className="new-todo-input" type="text" />
*
* React hook
* const NewTodoForm = () => {
    return ();
* };
*/

const NewTodoForm = () => {

    const [inputValue, setInputValue] = useState('');

    return (
        <div className="new-todo-form">
            <input className="new-todo-input" 
                type="text"
                placeholder="Type your new todo here" 
                value= {inputValue}
                onChange={e => setInputValue(e.target.value)} />
            <button className="new-todo-button">Create Todo</button>
        </div>
    )
};

export default NewTodoForm;