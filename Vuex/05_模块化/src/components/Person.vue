<template>
    <div>
        <h2>Count Component sum is：{{ sum }}</h2>
        <h3>first person is：{{ firstPerson }}</h3>
        <input type="text" v-model="name" @keyup.enter="addPerson" @keyup.space="addNumber" />
        <span>{{ ` press Enter add name , press Space add number` }}</span>
        <ul>
            <li v-for="person in personList" :key="person.id">{{ person.name }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Person',
    data () {
        return {
            name: ''
        }
    },
    mounted () {
        console.log(this.$store.getters);
    },
    computed: {
        firstPerson () {
            return this.$store.getters['personAbout/firstPerson']
        },
        sum () {
            return this.$store.state.countAbout.sum
        },
        personList () {
            return this.$store.state.personAbout.personList
        }
    },
    methods: {
        addPerson () {
            const newPerson = { id: new Date().getTime(), name: this.name }
            this.$store.commit('personAbout/ADD_PERSON', newPerson)
            this.name = ''
        },
        addNumber () {
            const newPerson = { id: new Date().getTime(), name: this.name }
            this.$store.dispatch('personAbout/addNumberName', newPerson)
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