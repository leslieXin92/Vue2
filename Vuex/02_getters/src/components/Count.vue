<template>
    <div>
        <h2>Now count is {{ $store.state.sum }}</h2>
        <h2>10 times count is {{ $store.getters.sumTimes }}</h2>
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
export default {
    name: 'Count',
    data () {
        return {
            curCount: 1
        }
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