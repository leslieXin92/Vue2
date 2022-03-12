<template>
    <div class="student">
        <h1>name：{{ name }}</h1>
        <h1>age：{{ age }}</h1>
        <button @click="addAge">age++</button>
    </div>
</template>

<script>
export default {
    name: 'Student',
    data () {
        return {
            name: 'yahoo',
            age: 23
        }
    },
    methods: {
        addAge () {
            this.age++
        }
    },
}
</script>

<style>
.student {
    background-color: aquamarine;
}
</style>