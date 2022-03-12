<template>
    <div class="student">
        <h1>name：{{ name }}</h1>
        <h1>age：{{ age }}</h1>
        <button @click="addAge">age++</button>
        <button @click="showName">show name</button>
    </div>
</template>

<script>
import { mixin1 } from '../mixin'

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
    mixins: [mixin1]
}
</script>

<style>
.student {
    background-color: aquamarine;
}
</style>