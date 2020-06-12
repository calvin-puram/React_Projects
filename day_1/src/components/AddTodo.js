import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    title: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='title'
          placeholder='enter daily task'
          value={this.state.title}
          onChange={this.handleChange}
        />

        <input type='submit' value='Add Task' />
      </form>
    );
  }
}

export default AddTodo;
