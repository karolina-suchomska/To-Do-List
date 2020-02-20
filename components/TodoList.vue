<template>
  <div class="to-do-list">
    <input
      v-model="newTodo"
      type="text"
      class="to-do-input"
      placeholder="What needs to be done"
      @keyup.enter="addTodo"
    >
    <div
      v-for="(todo, index) in todos"
      :key="todo.id"
      class="to-do-item"
    >
      <div>
        <input
          v-model="todo.complete"
          type="checkbox"
        >
        <span
          :class="{ complete: todo.complete }"
        >
          {{ todo.title }}
        </span>
      </div>
      <div
        class="delete"
        @click="deleteTodo(index)"
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
