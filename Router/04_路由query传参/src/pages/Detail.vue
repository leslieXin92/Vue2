<template>
    <ul>
        <li>id：{{ $route.query.id }}</li>
        <li>massage：{{ $route.query.massage }}</li>
    </ul>
</template>

<script>
export default {
    name: 'Detail',
    mounted () {
        console.log(this.$route);
    }
}
</script>
<style scoped>
li {
    list-style: none;
}
</style>