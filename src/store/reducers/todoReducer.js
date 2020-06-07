const initState = {};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_TODO":
      console.log("created todo", action.todo);
      return state;
    case "CREATE_TODO_ERROR":
      console.log("create todo error", action.err);
      return state;
    default:
      return state;
  }
};

export default todoReducer;
