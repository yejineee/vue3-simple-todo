import { getTodos } from '@/apis';
import { onMounted, reactive, ref } from 'vue';

export default function useTodos() {
  const todos = reactive([]);
  const func = async () => {
    todos.value = await getTodos();
  };

  onMounted(func);
  return { todos };
}
