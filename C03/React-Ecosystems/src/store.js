import { createStore, combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import { todos  } from './todos/reducers';

// Hook up todos with reducers
const reducers = {
    todos
};

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2 // this is to tell Redux how to reconcile the initial and stored states of the application
};

// create root reducer
const rootReducer = combineReducers (reducers);

// persistConfig used to tell where to save the state
const persistedReducer = persistReducer(persistConfig, rootReducer);

// return createStore
export const configureStore = () => createStore(persistedReducer);