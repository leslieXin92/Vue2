<template>
    <div>
        <h2>Now count is：{{ sum }}</h2>
        <h2>10 times count is： {{ sumTimes }}</h2>
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
        <h2 class="personCount">person count is {{ personList.length }}</h2>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex"

export default {
    name: 'Count',
    data () {
        return {
            curCount: 1
        }
    },
    computed: {
        ...mapState('countAbout', ['sum', 'name', 'age']),
        ...mapState('personAbout', ['personList']),
        ...mapGetters('countAbout', ['sumTimes'])
    },
    methods: {
        ...mapActions('countAbout', { addOdd: 'incrementOdd', addWait: 'incrementWait' }),
        ...mapMutations('countAbout', { addNow: 'INCREMENT', subNow: 'DECREMENT' })
    }
}
</script>

<style scoped>
button {
    margin: 0 5px;
}
.personCount {
    color: red;
}
</style>