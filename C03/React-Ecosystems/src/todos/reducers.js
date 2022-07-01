import { CREATE_TODO, REMOVE_TODO } from "./actions";

// Add all reducers code
/*
 * Everytime any action is fired, reducers will get called.
 * When this happens there are 2 arguments passed current state, action that was triggered which is object type and payload.
 * What reducers will do is to take the current state and the action that was triggered,
 * and decide what changes should occur in the state.
 * Then it returns the updated state and redux will take that updated state.
*/

// Reducers function
export const todos = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_TODO: {
            const { text } = payload;
            const newTodo = {
                text,
                isCompleted: false,
            };
            return state.concat(newTodo);
        }

        case REMOVE_TODO:{
            const { text } = payload;
            return state.filter(todo => todo.text !== text);
        }
        default: 
            return state;
    }
};