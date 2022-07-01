import { createStore, combineReducers } from 'redux';

const reducers = {};

// create root reducer
const rootReducer = combineReducers (reducers);

// return createStore
export const configureStore = () => createStore(rootReducer);