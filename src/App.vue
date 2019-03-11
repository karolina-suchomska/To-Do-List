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
    color: #333;
    margin: 0;
    padding: 0;
    height: 100vh;
    background-image: linear-gradient(to bottom right, rgb(214, 255, 231), rgb(102, 238, 143));
    background-attachment: fixed;
}

#app {
    text-align: center;
    margin: auto;
    padding: 1rem; 
    width: 100%;
    max-width: 640px;
}
</style>
