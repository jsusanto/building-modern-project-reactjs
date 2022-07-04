import React from "react";
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { markTodoAsCompleted } from "./actions";
import { removeTodo } from "./actions";
import './TodoList.css';

// Define component 
// todos = [] - set default value to empty
const  TodoList = ({ todos = [], OnRemovePressed, onCompletedPressed }) => (
    <div className="list-wrapper">
        <NewTodoForm/>
        {todos.map(todo => <TodoListItem 
                    todo={todo} 
                    OnRemovePressed={OnRemovePressed} 
                    onCompletedPressed={onCompletedPressed}/>)}
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    OnRemovePressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: text => dispatch(markTodoAsCompleted(text))
});

// Our todo connects to Redux
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);