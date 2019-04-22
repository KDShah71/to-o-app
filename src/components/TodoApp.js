import React, { Component } from "react";
import "./TodoApp.css";
import "materialize-css/dist/css/materialize.min.css";
import Navbar from "./Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import TodoDetails from "../pages/TodoDetails";
import TodoContext from "../context/TodoContext";

class TodoApp extends Component {
  state = {
    todos: [
      { id: 1, content: "Learn react js" },
      { id: 2, content: "Watch movie" }
    ]
  };

  addTodo = todo => {
    const todos = [...this.state.todos, todo]; //spread operator ...
    this.setState({ todos });
  };

  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => todo.id !== id); //es6 filter method
    this.setState({ todos });
  };
  render() {
    return (
      <BrowserRouter>
        <TodoContext.Provider
          value={{
            todos: this.state.todos,
            addTodo: this.addTodo,
            deleteTodo: this.deleteTodo
          }}
        >
          <div className="App">
            <Navbar />
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/todo/:todoId" component={TodoDetails} />
          </div>
        </TodoContext.Provider>
      </BrowserRouter>
    );
  }
}
export default TodoApp;
