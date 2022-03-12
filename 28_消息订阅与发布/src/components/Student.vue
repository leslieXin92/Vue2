<template>
    <div class="student">
        <h1>name：{{ name }}</h1>
        <h1>age：{{ age }}</h1>
        <button @click="sendName">send name to school</button>
    </div>
</template>

<script>
// 引入pubsub-js
import pubsub from 'pubsub-js'

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
            // 发布hello消息
            pubsub.publish('hello', this.name)
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