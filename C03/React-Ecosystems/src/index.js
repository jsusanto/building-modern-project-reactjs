import React from 'react';
import {createRoot} from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore  } from './store.js';
import App from './App.js';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <Provider store={configureStore()}>
        <App />
    </Provider>,
    document.getElementById('root')
);