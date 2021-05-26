import { getTodos } from '@/apis';
export const TODO_STORE_NAME = 'todo';
// mutations
export const MUTATE_TODOS = 'MUTATE_TODOS';
// actions
export const FETCH_TODOS = 'FETCH_TODOS';

export default {
  namespaced: true,
  state() {
    return {
      todos: [],
    };
  },
  mutations: {
    [MUTATE_TODOS](state, { todos }) {
      state.todos = todos;
    },
  },
  actions: {
    async [FETCH_TODOS]({ commit }) {
      const todos = await getTodos();
      commit(MUTATE_TODOS, { todos });
    },
  },
};
