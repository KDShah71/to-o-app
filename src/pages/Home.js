import React, { Component } from "react";
import TodoList from "../components/TodoList";
import AddForm from "../components/AddForm";
import TodoContext from "../context/TodoContext";

class Home extends Component {
  render() {
    console.log(this.props);

    return (
      <TodoContext.Consumer>
        {context => (
          <div className="container">
            <TodoList deleteTodo={context.deleteTodo} todos={context.todos} />
            <AddForm addTodo={context.addTodo} />
          </div>
        )}
      </TodoContext.Consumer>
    );
  }
}

export default Home;
