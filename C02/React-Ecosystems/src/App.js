import React from 'react';
import { hot } from 'react-hot-loader'; // add import for hot-loader
import './App.css';

const App = () => (
    <div className="App">
        <h1>Hello World!!! hot-loader</h1>
    </div>
);

export default hot(module)(App); //By using hot-loader you can automatically see your changes when you have updated something