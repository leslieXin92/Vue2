<template>
    <div ref="box">
        <h1 ref="hello">{{ msg }}</h1>
        <button @click="showDOM" ref="btn">show dom</button>
        <School ref="school" id="school" />
        <Student />
    </div>
</template>

<script>
import School from './components/School'
import Student from './components/Student'

export default {
    name: 'App',
    components: {
        School,
        Student
    },
    data () {
        return {
            msg: 'hello'
        }
    },
    methods: {
        showDOM () {
            console.log(this.$refs.hello) // h1真实dom元素
            console.log(this.$refs.btn) // 按钮真实dom元素
            console.log(this.$refs.school) // school组件的实例对象(Vc)
            console.log(document.querySelector('#school')) // school组件的真实dom元素
            console.log(this.$refs.box) // div真实dom
        }
    },

}
</script>

<style>
</style>