<template>
    <div class="todo-item" v-bind:class="{'is-complete':todo.completed}">
            <p>
            <input type="checkbox"  class="checkbox" v-on:change="markComplete">
            {{todo.title}}
            <button @click="$emit('del-todo', todo.id)" class="del">x</button>
            </p>
    </div>
</template>

<script>
export default {
    name: "TodoItem",
    props: ["todo"],
    methods: {
        markComplete() {
            this.todo.completed = !this.todo.completed; 
            //this wskazuje że opcja 'completed' użyta w 'todo' ma być równa jej różnicy. Co podowduje zmianę z true na false
        }
    }
}
</script>

<style scoped>

    .todo-item {
        padding: 5px 25px;
        border-bottom: 1px rgb(95, 212, 163) dotted;
        text-align: left;
    }

    .is-complete {
        text-decoration: line-through;
    }

    .del {
        background: #ff0000;
        outline: none;
        color: #fff;
        border: none;
        padding: 5px 9px;
        border-radius: 50%;
        cursor: pointer;
        float: right;
    }

    .del:active {
        transform: scale(0.9);
        outline: none;
        background: #ff00008f;
    }

</style>
