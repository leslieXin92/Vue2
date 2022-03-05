<template>
    <div class="school">
        <h2>school：{{ schoolName }}</h2>
        <h2>address：{{ address }}</h2>
        <button @click="sendSchoolName">show school name</button>
    </div>
</template>

<script>
export default {
    name: 'School',
    props: ['showSchoolName'],
    data () {
        return {
            schoolName: 'SUSE',
            address: 'Yibin'
        }
    },
    methods: {
        sendSchoolName () {
            this.showSchoolName(this.schoolName)
        }
    }
}
</script>

<style>
.school {
    background-color: palevioletred;
}
</style>