import React from "react";
import { Link } from "react-router-dom";

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div className="collection">
      {todos.length > 0 ? (
        todos.map(todo => (
          <p key={todo.id} className="collection-item">
            <span onClick={e => deleteTodo(todo.id)}>{todo.content} </span>
            <Link to={"/todo/" + todo.id}>
              <span className="waves-effect waves-light btn">View</span>
            </Link>
          </p>
        ))
      ) : (
        <p>You have completed all your tasks. Yay!</p>
      )}
    </div>
  );
};

export default TodoList;
