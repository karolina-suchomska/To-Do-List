<template>
    <div>
        <input type="text" class="todo-input" placeholder="What needs to be done" v-model="newTodo">		
	</div>
</template>

<script>
export default {
    name: "todo-list",
    data() {
        return {
            newTodo: '',
            todos: [
                {
                    'id': 1,
                    'title': 'Finish Vue Screencast',
                    'completed': false,
                },
                {
                    'id': 2,
                    'title': 'Take over world',
                    'completed': true,
                },
                {
                    'id': 3,
                    'title': 'Nothing',
                    'completed': false,
                },
            ]
        }
    }
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