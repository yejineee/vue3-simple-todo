import { getTodos } from '@/apis';
import { onMounted, reactive, watchEffect, ref } from 'vue';

export default function useTodos() {
  const todos = reactive([]);
  const loading = ref(true);
  const func = async () => {
    todos.value = await getTodos();
    loading.value = false;
  };
  // watchEffect(() => console.log(todos.value?.length));
  onMounted(func);
  return { todos, loading };
}
