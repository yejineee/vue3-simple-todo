import { getTodos, updateTodo } from '@/apis';
export const TODO_STORE_NAME = 'todo';
// mutations
export const MUTATE_TODOS = 'MUTATE_TODOS';
export const MUTATE_TODO = 'MUTATE_TODO';
// actions
export const FETCH_TODOS = 'FETCH_TODOS';
export const UPDATE_TODO = 'UPDATE_TODO';

const NOT_FOUND = -1;
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
    [MUTATE_TODO](state, { idx, todo }) {
      state.todos[idx] = todo;
    },
  },
  actions: {
    async [FETCH_TODOS]({ commit }) {
      const todos = await getTodos();
      commit(MUTATE_TODOS, { todos });
    },
    async [UPDATE_TODO]({ state, commit, getters }, { id, data }) {
      const idx = getters.getTodoIdxById(id);
      if (idx === NOT_FOUND) {
        return;
      }
      const todo = await updateTodo(id, { ...state.todos[idx], ...data });
      commit(MUTATE_TODO, { idx, todo });
    },
  },
  getters: {
    getTodoIdxById: (state) => (id) => {
      return state.todos.findIndex((todo) => todo.id === id);
    },
  },
};
