<template>
  <div id="app">
    <Title/>
    <TodoList/>
  </div>
</template>

<script>
import Title from '@/components/Title.vue';
import TodoList from '@/components/TodoList.vue';

export default {
  name: 'app',
  components: {
    Title,
    TodoList
  }
}
</script>

<style>
*,*::before,*::after {
    box-sizing: border-box;
}

body {
    display: flex;
    color: rgb(14, 14, 14);
    margin: 0;
    padding: 0;
    height: 100vh;
    background-image: linear-gradient(to bottom right, rgb(214, 255, 231), rgba(59, 110, 168, 0.664));
    background-attachment: fixed;
}

#app {
    text-align: left;
    margin: auto;
    padding: 1rem; 
    width: 100%;
    max-width: 640px;
}
</style>
