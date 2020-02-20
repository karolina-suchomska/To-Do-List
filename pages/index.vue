<template>
  <div class="app">
    <Title />
    <TodoList />
  </div>
</template>

<script>
import Title from '@/components/Title.vue'
import TodoList from '@/components/TodoList.vue'

export default {
  components: {
    Title,
    TodoList
  }
}
</script>
