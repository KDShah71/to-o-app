import React, { Component } from "react";
import TodoContext from "../context/TodoContext";

export default class TodoDetails extends Component {
  render() {
    return (
      <TodoContext.Consumer>
        {context => (
          <div>
            {context.todos.map(todo => {
              if (todo.id == this.props.match.params.todoId) {
                return (
                  <React.Fragment>
                    <p key={todo.id}>{todo.content}</p>
                  </React.Fragment>
                );
              }
            })}
          </div>
        )}
      </TodoContext.Consumer>
    );
  }
}
