<template>
    <ul>
        <li>id：{{ id }}</li>
        <li>massage：{{ massage }}</li>
    </ul>
</template>

<script>
export default {
    name: 'Detail',
    props: ['id', 'massage']
}
</script>
<style scoped>
li {
    list-style: none;
}
</style>