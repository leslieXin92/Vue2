<template>
    <ul>
        <li>id：{{ $route.params.id }}</li>
        <li>massage：{{ $route.params.massage }}</li>
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