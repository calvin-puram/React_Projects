import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

const Todo = ({ todos, toggleCompleted, deleteTodo }) => {
  return todos.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      handleToggleCompleted={toggleCompleted}
      deleteTodo={deleteTodo}
    />
  ));
};

Todo.propType = {
  todos: PropTypes.array.isRequired,
  toggleCompleted: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};
export default Todo;
