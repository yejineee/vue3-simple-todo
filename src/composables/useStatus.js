import { computed } from 'vue';
import { useStore } from 'vuex';
// import { TODO_STORE_NAME, UPDATE_TODO } from '@/stores/todo';

const statusMap = {
  DONE: 'Done',
  IN_PROGRESS: 'In Progress',
};

export default function useStatus(completed) {
  useStore();

  return {
    status: computed(() =>
      completed ? statusMap.DONE : statusMap.IN_PROGRESS
    ),
  };
}
