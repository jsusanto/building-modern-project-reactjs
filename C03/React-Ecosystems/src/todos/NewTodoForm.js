import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTodo } from './actions';
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

const NewTodoForm = ({ todos, onCreatePressed }) => {

    const [inputValue, setInputValue] = useState('');

    return (
        <div className="new-todo-form">
            <input className="new-todo-input" 
                type="text"
                placeholder="Type your new todo here" 
                value= {inputValue}
                onChange={e => setInputValue(e.target.value)} />
            <button
                onClick={() => {
                    const isDuplicateText = 
                        todos.some(todo => todo.text === inputValue);
                    
                    if(!isDuplicateText){
                        onCreatePressed(inputValue);
                        setInputValue('');    
                    }
                }}
                className="new-todo-button">
                Create Todo
            </button>
        </div>
    )
};

/*
* mapStateToProps: the state argument that gets passed to mapStateToProps is an object
*                  that represents the entire Redux state.
*                  The job of mapStateToProps is to take the state object and return another object.
*                  In our case it's todo.
*
* mapDispatchToProps 
*/
const mapStateToProps = state => ({
    todos: state.todos,
});

// dispatch is a function that allows to trigger actions that our Redux store will respond to.
// In our case we want to trigger action when someone clicks the button.
const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);