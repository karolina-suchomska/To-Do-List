<template>
  <div id="app">
    <Title />
    <TodoAdd v-on:add-todo="addTodo" />
    <TodoBox v-bind:todos="todos" v-on:del-todo="deleteTodo"/>
  </div>
</template>

<script>
import Title from '@/components/Title.vue';
import TodoBox from '@/components/TodoBox.vue';
import TodoAdd from '@/components/TodoAdd.vue';
import axios from 'axios'

export default {
  name: 'app',
  components: {
    Title,
    TodoAdd,
    TodoBox,
  },
   data() {
        return {
          todos: []
        }
      },
      methods: {
        deleteTodo(id) {
          axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => this.todos = this.todos.filter(todo => todo.id !== id))
            .catch(err => console.log(err));
        },
        addTodo(newTodo) {
          const { title, completed } = newTodo;

          axios.post('http://jsonplaceholder.typicode.com/todos', {
            title,
            completed
          })
          .then(res =>  this.todos = [...this.todos,res.data])
          .catch(err => console.log(err));
        }
      },
      created() {
        axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(res => this.todos = res.data)
        .catch(err => console.log(err));
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
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin: auto;
    padding: 1rem; 
    width: 100%;
    max-width: 640px;
}
</style>
