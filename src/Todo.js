import React from "react";
import PropTypes from "prop-types";

const Todo = ({ onClick, completed, text, addChildTodo, childTodo }) => (
  <div>
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? "line-through" : "none"
      }}
    >
      {text}
      <button onClick={addChildTodo}>addChildTodo</button>
    </li>
    <ul>
      {childTodo.map(todo => (
        <li>{todo.text}</li>
      ))}
    </ul>
  </div>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
