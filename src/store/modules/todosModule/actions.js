import QueryService from '../../../Services/QueryService';
import { v4 as uuidv4 } from 'uuid';

export default {
  async SET_TODOS_FROM_API({ commit }, payload) {
    try {
      const result = await QueryService.getAllData(payload);
      commit('SET_TODOS_FROM_API', result.data);
    } catch (error) {
      throw new Error(error);
    }
  },

  ADD_NEW_TODO({ commit }, { title, completed }) {
    commit('ADD_NEW_TODO', { id: uuidv4(), title: title, completed: completed });
  },

  DELETE_COMPLETED_TODOS({ commit }) {
    commit('DELETE_COMPLETED_TODOS');
  }
};
