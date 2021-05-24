<template>
  <div id="card-list">
    <div v-if="loading">loading</div>
    <div v-else>
      <card v-for="todo in todos.value" :todo="todo" :key="todo.id"> </card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watchEffect } from 'vue';
import useTodos from '@/composables/useTodos.js';
import Card from '@/components/Card.vue';
export default defineComponent({
  name: 'CardList',
  components: {
    Card,
  },
  setup() {
    const { todos, loading } = useTodos();
    watchEffect(() => console.log(todos.value?.length));
    watchEffect(() => console.log(loading.value));

    return {
      todos,
      loading,
    };
  },
});
</script>

<style scoped>
#card-list {
  border: 1px solid green;
}
</style>
