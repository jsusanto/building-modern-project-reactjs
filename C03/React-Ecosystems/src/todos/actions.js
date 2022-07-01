export const CREATE_TODO = 'CREATE_TODO';
// this is for Payload, export a JSON object
// text => ( )  this is a function
export const createTodo = text => ({
        type: CREATE_TODO,
        payload: { text },
});

// Unique identifier to delete
export const REMOVE_TODO = 'REMOVE_TODO';

export const removeTodo = text => ({
    type: REMOVE_TODO,
    payload: {text },
});