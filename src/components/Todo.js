import React from "react";
import PropTypes from "prop-types";

const Todo = ({ onClick, completed, text, addChildTodo, childTodo }) => {
  var input;
  return (
    <li>
      <div
        style={{
          display: "flex"
        }}
      >
        <div
          onClick={onClick}
          style={{
            textDecoration: completed ? "line-through" : "none"
          }}
        >
          {text}
        </div>
        <div>
          <input type="text" ref={node => (input = node)} />
          <button
            onClick={() => {
              if (!input.value.trim()) return;
              addChildTodo(input.value);
              input.value = "";
            }}
          >
            addChildTodo
          </button>
        </div>
      </div>
      <ul>
        {childTodo.map(todo => (
          <li>{todo.text}</li>
        ))}
      </ul>
    </li>
  );
};

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
