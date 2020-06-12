import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";

import Todo from "./components/Todo";
import Header from "./components/layouts/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/layouts/About";

class App extends Component {
  state = {
    todos: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    this.setState({ todos: res.data });
    this.setState({ loading: false });
  }

  toggleCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  addTodo = async (title) => {
    const res = await axios.post(`https://jsonplaceholder.typicode.com/todos`, {
      title,
      completed: false,
    });
    this.setState({
      todos: [res.data, ...this.state.todos],
    });
  };

  deleteTodo = async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };
  render() {
    const { todos, loading } = this.state;

    if (loading) {
      return (
        <div className='img'>
          <img src='img/spinner.gif' alt='loader' />
        </div>
      );
    } else {
      return (
        <BrowserRouter>
          <Header />
          <Switch>
            <Route
              exact
              path='/'
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <div className='container'>
                    <Todo
                      todos={todos}
                      toggleCompleted={this.toggleCompleted}
                      deleteTodo={this.deleteTodo}
                    />
                  </div>
                </React.Fragment>
              )}
            />
            <Route path='/about' component={About} />
          </Switch>
        </BrowserRouter>
      );
    }
  }
}

export default App;
