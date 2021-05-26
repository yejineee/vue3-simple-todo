import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { TODO_STORE_NAME, UPDATE_TODO } from '@/stores/todo';

const completedMap = {
  true: 'Done',
  false: 'In Progress',
};

export default function useStatus(id, completed) {
  const store = useStore();
  const status = ref(completed.value);
  const statusMsg = computed(() => completedMap[status.value]);

  const toggleStatus = () => {
    status.value = !status.value;
    store.dispatch(`${TODO_STORE_NAME}/${UPDATE_TODO}`, {
      id: id.value,
      data: { completed: status.value },
    });
  };
  return {
    status,
    statusMsg,
    toggleStatus,
  };
}
