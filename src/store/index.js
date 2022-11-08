import { createStore } from 'vuex';
import state from './state';
import mutations from './mutations';
import todosModule from './modules/todosModule/todosModule';

const store = createStore({
  state,
  mutations,
  modules: {
    todosModule
  }
});

export default store;
