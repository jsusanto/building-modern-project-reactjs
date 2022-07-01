import React from 'react';
import { hot } from 'react-hot-loader'; // add import for hot-loader
import TodoList from './todos/TodoList';
import './App.css';

const App = () => (
    <div className="App">
       <TodoList/>
    </div>
);

export default hot(module)(App); //By using hot-loader you can automatically see your changes when you have updated something