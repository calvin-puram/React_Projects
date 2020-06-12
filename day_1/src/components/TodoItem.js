import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({ todo, handleToggleCompleted, deleteTodo }) => {
  const markCompleted = () => {
    return {
      textDecoration: todo.completed ? "line-through" : "none",
      marginLeft: "5px",
    };
  };

  return (
    <div>
      <p style={todoStyle}>
        <input
          type='checkbox'
          onChange={() => handleToggleCompleted(todo.id)}
        />
        <span style={markCompleted()}>{todo.title}</span>
        <button className='btnStyle' onClick={() => deleteTodo(todo.id)}>
          X
        </button>
      </p>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  handleToggleCompleted: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

const todoStyle = {
  padding: "10px",
  borderBottom: "1px #ccc dotted",
  background: "#c4c4c4",
  fontSize: "18px",
  margin: ".5rem 0",
};

export default TodoItem;
