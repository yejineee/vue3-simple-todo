import { ref } from 'vue';
import { useStore } from 'vuex';
import { TODO_STORE_NAME, UPDATE_TODO } from '@/stores/todo';

export default function useTitle(id, origTitle) {
  const store = useStore();
  const editedTitle = ref(origTitle);

  const updateTitle = () => {
    store.dispatch(`${TODO_STORE_NAME}/${UPDATE_TODO}`, {
      id,
      data: { title: editedTitle.value },
    });
  };

  return {
    editedTitle,
    updateTitle,
  };
}
