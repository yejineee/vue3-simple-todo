import { computed } from 'vue';
import { useStore } from 'vuex';
import { TODO_STORE_NAME, FETCH_TODOS } from '@/stores/todo';

export default function useTodos() {
  const store = useStore();
  store.dispatch(`${TODO_STORE_NAME}/${FETCH_TODOS}`);
  return { todos: computed(() => store.state[TODO_STORE_NAME].todos) };
}
