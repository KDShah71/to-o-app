import React, {createContext} from 'react';

const TodoContext = createContext({
    todos: [],
    addTodo: () => {},
    deleteTodo: (id) =>{}
});

export default TodoContext;