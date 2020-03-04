import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo, addChildTodo }) => (
  <ul>
    {todos.map(todo => (
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
        addChildTodo={() => addChildTodo(todo.id, "test")}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  addChildTodo: PropTypes.func.isRequired
};

export default TodoList;
