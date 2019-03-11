<template>
    <div class="todoadd">
        <form @submit="addTodo">
            <input type="text" v-model="title" name="title" placeholder="Add Todo..">
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>

<script>
import uuid from 'uuid';

export default {
    name: "TodoAdd",
    data() {
        return {
            title: ''
        }
    },
    methods: {
        addTodo(e) {
            e.preventDefault();
            const newTodo = {
                id: uuid.v4(),
                title: this.title,
                completed: false
            }
            // Send up to parent
            this.$emit('add-todo', newTodo);

            this.title = '';
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Merienda');

    form {
        display: flex;
        background: white;
        padding: 20px 10px;
        border-radius: 20px 20px 0 0;
        border-bottom: 1px rgb(95, 212, 163) dotted;
    }

    input[type="text"] {
        flex: 10;
        border-radius: 10px 0 0 10px;
        outline: none;
        font-family: 'Merienda', cursive;
        font-size: 1rem;
        padding: 0 0.5em;
        border: 1px solid rgb(11, 122, 76);
    }

    input[type="submit"] {
        flex: 2;
        border-radius: 0 10px 10px 0;
        outline: none;
        background: rgb(11, 122, 76);
        color: white;
        font-family: 'Merienda', cursive;
        font-size: 20px;
        padding: 0 0.5em;
        border: 1px solid rgb(11, 122, 76);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        appearance: none;
    }

    input[type="submit"]:active {
        transform: scale(0.9);
        background: rgba(11, 122, 76, 0.726);
    }
</style>
