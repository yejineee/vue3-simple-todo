<template>
  <div id="main">
    <main-title />
    <board />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Board from './components/Board.vue';
import Title from './components/Title.vue';

export default defineComponent({
  name: 'App',
  components: {
    MainTitle: Title,
    Board,
  },
});
</script>

<style>
@import '@/assets/reset.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#main {
  height: 100vh;
  padding: 0 20%;
}
</style>
