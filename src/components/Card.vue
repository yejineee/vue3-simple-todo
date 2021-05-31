<template>
  <div class="card-wrapper">
    <CardEdit
      v-if="isEdit"
      :id="todo.id"
      :title="todo.title"
      @submit-title="toggleIsEdit"
    ></CardEdit>
    <div v-else class="card-summary" @click="toggleIsEdit">
      {{ todo.title }}
    </div>
    <div class="card-info">
      <div class="pub-date">2021.04.02</div>
      <button :class="statusClass" @click="toggleStatus">
        {{ statusMsg }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, ref } from 'vue';
import CardEdit from '@/components/CardEdit.vue';
import useStatus from '@/composables/useStatus';

export default defineComponent({
  name: 'Card',
  components: {
    CardEdit,
  },
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const isEdit = ref(false);
    const { completed, id } = toRefs(props.todo);
    const { status, statusMsg, toggleStatus } = useStatus(id, completed);

    const toggleIsEdit = () => {
      isEdit.value = !isEdit.value;
    };

    return {
      status,
      toggleStatus,
      statusMsg,
      toggleIsEdit,
      isEdit,
    };
  },
  computed: {
    statusClass() {
      return ['card-status', { done: this.status }];
    },
  },
});
</script>

<style scoped lang="scss">
$done: red;
$in-progress: blue;
@mixin status-btn($color) {
  border-radius: 4px;
  border: 1px solid $color;
  background: $color;
}
@mixin flex-center() {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 5rem;
  border: 1px solid gray;
  border-radius: 4px;
  padding: 0 3rem;

  & + & {
    margin-top: 1rem;
  }
}
.card-summary {
  flex: 2 1 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font: {
    size: 1.4rem;
    weight: 800;
  }
}
.card-info {
  display: flex;
  flex: 1 1 0;
  justify-content: space-between;
  align-items: center;
}
.card-status {
  @include status-btn($in-progress);
  color: white;
  font-weight: 800;
  cursor: pointer;

  &.done {
    @include status-btn($done);
  }
}
</style>
