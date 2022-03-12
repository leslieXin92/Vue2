<template>
    <div class="student">
        <h1>name：{{ name | lenFormat }}</h1>
        <h1>age：{{ age }}</h1>
        <input type="text" v-focus-bind:value="age" />
        <button @click="hello()">hello</button>
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
    }
}
</script>

<style>
.student {
    background-color: aquamarine;
}
</style>