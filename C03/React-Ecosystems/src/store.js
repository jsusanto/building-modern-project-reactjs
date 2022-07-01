import { createStore, combineReducers } from 'redux';
import { todos  } from './todos/reducers';

// Hook up todos with reducers
const reducers = {
    todos
};

// create root reducer
const rootReducer = combineReducers (reducers);

// return createStore
export const configureStore = () => createStore(rootReducer);