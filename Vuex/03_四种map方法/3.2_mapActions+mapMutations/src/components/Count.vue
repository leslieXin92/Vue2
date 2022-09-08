<template>
    <div>
        <h2>Now count is {{ sum }}</h2>
        <h2>10 times count is {{ sumTimes }}</h2>
        <h2>name：{{ name }}</h2>
        <h2>age：{{ age }}</h2>
        <label for="select">number：</label>
        <select name="select" v-model.number="curCount">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="addNow(curCount)">add now</button>
        <button @click="subNow(curCount)">sub now</button>
        <button @click="addOdd(curCount)">add odd</button>
        <button @click="addWait(curCount)">add wait</button>
    </div>
</template>

<script>
// 引入mapState、mapGetters、mapActions、mapMutations
import { mapState, mapGetters, mapActions, mapMutations } from "vuex"

export default {
    name: 'Count',
    data () {
        return {
            curCount: 1
        }
    },
    computed: {
        // 写法一 对象写法：
        // ...mapState({ sum: 'sum', name: 'name', age: 'age' }),
        // ...mapGetters({ sumTimes: 'sumTimes' })

        // 写法二 数组写法：
        ...mapState(['sum', 'name', 'age']),
        ...mapGetters(['sumTimes'])
    },
    methods: {
        // 方法一 对象写法：
        ...mapActions({ addOdd: 'incrementOdd', addWait: 'incrementWait' }),
        ...mapMutations({ addNow: 'INCREMENT', subNow: 'DECREMENT' })

        // 方法二 数组写法：(需要改插值语法中的函数名)
        // ...mapActions(['incrementOdd', 'incrementWait']),
        // ...mapMutations('INCREMENT', 'DECREMENT')
    }
}
</script>

<style>
button {
    margin: 0 5px;
}
</style>