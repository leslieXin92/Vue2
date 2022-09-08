<template>
    <!-- 组件的结构 -->
    <div class="box">
        <h1>name：{{ name }}</h1>
        <h1>age：{{ age }}</h1>
        <button @click="addAge">age++</button>
    </div>
</template>

<script>
// 组件交互相关的代码(数据、方法) 
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
/* 组件的样式 */
.box {
    background-color: aquamarine;
}
</style>