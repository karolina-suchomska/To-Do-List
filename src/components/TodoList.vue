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
  @import url('https://fonts.googleapis.com/css?family=Merienda');

  .todolist {
    background: white;
    border-radius: 20px;
    font-family: 'Merienda', cursive;
    font-size: 20px;   
    padding: 16px 16px 0 16px;
  }

  .todoinput {
    display: flex;
    justify-content: space-between;
    font-family: 'Merienda', cursive; 
    font-size: 15px; 
    line-height: 2;
    padding: 5px; 
    border: 1px solid rgb(11, 122, 76);
    outline: none;
    width: 100%;
  }

  .todoinput:focus {
    -moz-box-shadow:    inset 0 0 10px #000000;
    -webkit-box-shadow: inset 0 0 10px #000000;
    box-shadow: inset 0 0 10px #00000091;
  }

  .todoitem {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(102, 238, 143, 0.644);
    padding: 10px 10px;
  }

  .complete {
    text-decoration: line-through;
  }

  .delete {
    outline: none;
    padding: 0 8px;
  }

  .delete:hover {
    background: rgba(255, 0, 0, 0.24);
    border-radius: 50px;
    cursor: pointer;
  }
</style>
