const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          childTodo: []
        }
      ];
    case "ADD_CHILD_TODO":
      return state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            childTodo: [
              ...todo.childTodo,
              {
                text: action.text,
                completed: false
              }
            ]
          };
        } else {
          return todo;
        }
      });
    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default todos;
