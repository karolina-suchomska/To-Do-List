<template>
  <div class="todolist">
    <input type="text" class="todoinput" placeholder="What needs to be done" v-model="newTodo" @keyup.enter="addTodo">
    <div v-for="(todo, index) in todos" :key="todo.id" class="todoitem">
      <div>
        <input type="checkbox" v-model="todo.complete">
        <span :class="{ complete: todo.complete }">
        {{ todo.title }} 
        </span>
        </div>
      <div class="delete" @click="deleteTodo(index)">
        &times;
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'todo-list',
  data () {
    return {
      newTodo: '',
      idForTodo: 3,
      todos: [
        {
          'id': 1,
          'title': 'Order a book',
          'completed': false,
        },
        {
          'id': 2,
          'title': 'Check your mail',
          'completed': false,
        },
      ]
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim().length == 0) {
        return
      }

      this.todos.push({
        id: this.idForTodo,
        title: this.newTodo,
        completed: false,
      })

      this.newTodo = ''
      this.idForTodo++
    },
    deleteTodo(index) {
      this.todos.splice(index, 1)
    },
  }
}
</script>

<style lang="scss">
 @import url('https://fonts.googleapis.com/css?family=Lato');

  .todolist {
    background: rgb(255, 255, 255);
    padding: 16px 16px 10px 16px;
    font-family: 'Lato', sans-serif;
    font-size: calc(8px + 1.3vw);   
    border-radius: 10px;
  }

  .todoinput {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 5px; 
    font-family: 'Lato', sans-serif; 
    font-size: calc(8px + 1.3vw);
    border: 1px solid rgba(59, 110, 168, 0.664);
    line-height: 2;
    outline: none;
  }

  .todoinput:focus {
    -moz-box-shadow:    inset 0 0 2px rgba(59, 110, 168, 0.664);
    -webkit-box-shadow: inset 0 0 2px rgba(59, 110, 168, 0.664);
    box-shadow: inset 0 0 2px rgba(59, 110, 168, 0.664);
  }

  input[type="checkbox"] {
    cursor: pointer;
    margin: 8px;
  }
  

  .todoitem {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(59, 110, 168, 0.664);
    padding: 10px 10px;
    word-wrap: break-word;
    text-align: left;
    line-height: 1.5;
  }

  .complete {
    text-decoration: line-through;
  }

  .delete {
    outline: none;
    padding: 0 8px;
    display: table-cell;
    vertical-align: baseline;
  }

  .delete:hover {
    color: rgb(143, 11, 11);
    border-radius: 50px;
    display: table-cell;
    vertical-align: middle;
    cursor: pointer;
  }
</style>
