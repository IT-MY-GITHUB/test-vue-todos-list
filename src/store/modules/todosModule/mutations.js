import * as types from './mutation_types';

export default {
  [types.SET_TODOS_FROM_API](state, payload) {
    state.todos = payload;
  },
  [types.ADD_NEW_TODO](state, payload) {
    state.todos.push(payload);
  },
  [types.CHANGE_TODO_STATUS](state, id) {
    const currentTodo = state.todos.find(todo => todo.id === id);

    currentTodo.completed = !currentTodo.completed;
  },
  [types.DELETE_COMPLETED_TODOS](state) {
    state.todos = state.todos.filter(todo => !todo.completed);
  }
};
