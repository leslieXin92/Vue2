<template>
    <div class="student">
        <h2>name：{{ name }}</h2>
        <h2>sex：{{ sex }}</h2>
        <h2>age：{{ myAge }}</h2>
        <button @click="addAge">age++</button>
    </div>
</template>

<script>
export default {
    name: 'Student',
    data () {
        return {
            myAge: this.age
        }
    },
    methods: {
        addAge () {
            this.myAge++
        }
    },
    // 方法一：简单声明接收
    props: ['name', 'age', 'sex'],

    // 方法二：接收数据 + 限制数据类型
    props: {
        name: String,
        age: Number,
        sex: String
    },

    // 方法三：接收数据 + 限制数据类型 + 必传限制 + 默认值
    props: {
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
        },
        sex: {
            type: String,
            default: 'unknown'
        }
    }
}
</script>

<style>
.student {
    background-color: aquamarine;
}
</style>