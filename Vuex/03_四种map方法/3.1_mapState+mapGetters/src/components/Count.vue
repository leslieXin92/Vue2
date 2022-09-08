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
        <button @click="addNow">add now</button>
        <button @click="subNow">sub now</button>
        <button @click="addOdd">add odd</button>
        <button @click="addWait">add wait</button>
    </div>
</template>

<script>
// 引入mapState和mapGetters
import { mapState, mapGetters } from "vuex"

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
        addNow () {
            this.$store.commit('INCREMENT', this.curCount)
        },
        subNow () {
            this.$store.commit('DECREMENT', this.curCount)
        },
        addOdd () {
            this.$store.dispatch('incrementOdd', this.curCount)
        },
        addWait () {
            this.$store.dispatch('incrementWait', this.curCount)
        }
    }
}
</script>

<style>
button {
    margin: 0 5px;
}
</style>