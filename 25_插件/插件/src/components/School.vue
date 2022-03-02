<template>
    <div class="school">
        <h2>school：{{ name }}</h2>
        <h2>address：{{ address }}</h2>
    </div>
</template>

<script>
export default {
    name: 'School',
    data () {
        return {
            name: 'SUSE',
            address: 'Yibin'
        }
    }
}
</script>

<style>
.school {
    background-color: palevioletred;
}
</style>