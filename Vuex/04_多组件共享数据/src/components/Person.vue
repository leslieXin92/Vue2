<template>
    <div>
        <h2>Count Component sum is：{{ sum }}</h2>
        <input type="text" v-model="name" @keyup.enter="addPerson" />
        <ul>
            <li v-for="person in personList" :key="person.id">{{ person.name }}</li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Person',
    data () {
        return {
            name: ''
        }
    },
    computed: {
        ...mapState(['personList', 'sum'])
    },
    methods: {
        addPerson () {
            const newPerson = { id: new Date().getTime(), name: this.name }
            this.$store.commit('ADD_PERSON', newPerson)
            this.name = ''
        }
    }
}
</script>

<style scoped>
h2 {
    color: red;
}
</style>