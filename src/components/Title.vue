<template>
  <h1 id="title">
    {{ title }}
  </h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Title',
  data() {
    return {
      title: 'To Do',
    };
  },
});
</script>

<style scoped>
#title {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid gray;

  font-size: 4rem;
  font-weight: bold;
}
</style>
