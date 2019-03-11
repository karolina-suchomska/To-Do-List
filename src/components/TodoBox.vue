<template>
    <div class="todobox">
        <div v-bind:key="todo.id" v-for="todo in todos">
                <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo', todo.id)"/>
        </div>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue';

    export default {
        name: 'TodoBox',
        components: {
        TodoItem
        },
        props: ["todos"] 
    }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Merienda');

    .todobox {
        background: white;
        border-radius:  0 0 20px 20px; 
        font-family: 'Merienda', cursive;
        font-size: 20px;       
    }
</style>