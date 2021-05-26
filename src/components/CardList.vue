<template>
  <div id="card-list">
    <card v-for="todo in todos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useTodos from '@/composables/useTodos';
import Card from '@/components/Card.vue';

export default defineComponent({
  name: 'CardList',
  components: {
    Card,
  },
  setup() {
    const { todos } = useTodos();
    return {
      todos,
    };
  },
});
</script>
