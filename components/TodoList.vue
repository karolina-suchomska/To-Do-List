<template>
  <div class="to-do-list">
    <input
      v-model="newTodo"
      @keyup.enter="addTodo"
      type="text"
      class="to-do-input"
      placeholder="What needs to be done"
    >
    <div
      v-for="(todo, index) in todos"
      :key="todo.id"
      class="to-do-item"
    >
      <div class="checkbox-container">
        <input
          :id="'checkbox' + index"
          v-model="todo.completed"
          type="checkbox"
          class="checkbox-input"
        >
        <label
          :for="'checkbox' + index"
          :class="todo.completed ? 'complete' : ''"
          class="checkbox-label"
        >
          {{ todo.title }}
        </label>
      </div>
      <div
        @click="deleteTodo(index)"
        class="delete"
      >
        &times;
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newTodo: '',
      idForTodo: 3,
      todos: [
        {
          id: 1,
          title: 'Order a book',
          completed: false
        },
        {
          id: 2,
          title: 'Check your mail',
          completed: false
        }
      ]
    }
  },
  methods: {
    addTodo () {
      if (this.newTodo.trim().length === 0) {
        return 0
      }

      this.todos.push({
        id: this.idForTodo,
        title: this.newTodo,
        completed: false
      })

      this.newTodo = ''
      this.idForTodo++
    },
    deleteTodo (index) {
      this.todos.splice(index, 1)
    }
  }
}
</script>
