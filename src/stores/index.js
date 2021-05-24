import { createStore } from 'vuex';
import todoStore, { TODO_STORE_NAME } from './todo';

const store = createStore({
  modules: {
    [TODO_STORE_NAME]: todoStore,
  },
});

export default store;
