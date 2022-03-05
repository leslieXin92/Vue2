<template>
    <div class="student">
        <h1>name：{{ name }}</h1>
        <h1>age：{{ age }}</h1>
        <button @click="sendStudentName">show student name</button>
        <button @click="sendStudentAge">show student age</button>
        <button @click="unbindEvent">unbind event</button>
        <button @click="death">destroy</button>
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
        sendStudentName () {
            this.$emit('showStudentName', this.name)
        },
        sendStudentAge () {
            this.$emit('showStudentAge', this.age)
        },
        unbindEvent () {
            // 解绑一个自定义事件
            this.$off('showStudentName')
            // 解绑一些自定义事件
            this.$off(['showStudentName', 'showStudentAge'])
            // 解绑所有自定义事件
            this.$off()
        },
        death () {
            // 销毁Student组件，销毁后自定义事件全部不奏效。
            this.$destroy()
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