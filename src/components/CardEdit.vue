<template>
  <form @submit.prevent="onSubmitTitle">
    <input v-model="editedTitle" type="text" />
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useTitle from '@/composables/useTitle';

export default defineComponent({
  name: 'Card',
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  emits: ['submit-title'],
  setup(props) {
    const { editedTitle, updateTitle } = useTitle(props.id, props.title);

    return {
      editedTitle,
      updateTitle,
    };
  },
  data() {
    return {
      isEdit: false,
    };
  },
  methods: {
    onSubmitTitle() {
      this.updateTitle();
      this.$emit('submit-title');
    },
  },
});
</script>

<style scoped lang="scss"></style>
