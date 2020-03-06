import React from "react";
import PropTypes from "prop-types";

const Todo = ({
  onClick,
  completed,
  text,
  addChildTodo,
  childTodo,
  createdAt
}) => {
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
      <div
        style={{
          fontSize: 12,
          color: "#aeaeae"
        }}
      >
        createdAt: {new Date(createdAt).toString()}
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
