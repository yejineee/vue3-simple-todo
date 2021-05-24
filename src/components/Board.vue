<template>
  <div id="board">
    <CardList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CardList from '@/components/CardList.vue';
export default defineComponent({
  name: 'Board',
  components: {
    CardList,
  },
});
</script>

<style scoped>
#board {
  border: 1px solid black;
  height: 100%;
}
</style>
