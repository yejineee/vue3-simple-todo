<template>
  <div class="card-wrapper">
    <div class="card-summary">
      {{ todo.title }}
    </div>
    <div class="pub-date">2021.04.02</div>
    <button class="card-status done active">Done</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Card',
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
$done: red;
.card-wrapper {
  border: 1px solid red;
  width: 100%;
  height: 3rem;
}
.card-title {
  font-size: 2rem;
}
.card-status {
  &.done {
    border-radius: 4px;
    border: 1px solid $done;
  }
}
</style>
