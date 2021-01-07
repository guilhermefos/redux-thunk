export const addTodo = (text) => ({
  type: 'ADD_TODO',
  payload: {
    text
  }
});

export const AsyncAddTodo = (text) => (dispatch) => {
  setTimeout(() => {
    dispatch(addTodo(text));
  }, 3000);
};

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  payload: {
    id
  }
});

export const removeTodo = (id) => ({
  type: 'REMOVE_TODO',
  payload: {
    id
  }
});
