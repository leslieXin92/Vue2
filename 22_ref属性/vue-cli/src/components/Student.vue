<template>
    <div class="student">
        <h2>name：{{ name }}</h2>
        <h2>age：{{ age }}</h2>
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