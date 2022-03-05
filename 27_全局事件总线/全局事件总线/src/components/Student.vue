<template>
    <div class="student">
        <h1>name：{{ name }}</h1>
        <h1>age：{{ age }}</h1>
        <button @click="sendName">send name to school</button>
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
        sendName () {
            // 触发自定义事件studentToSchool
            this.$bus.$emit('studentToSchool', this.name)
        }
    }

}
</script>

<style>
.student {
    background-color: aquamarine;
}
button {
    margin-right: 10px;
}
</style>