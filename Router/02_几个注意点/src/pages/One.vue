<template>
    <div>One component</div>
</template>

<script>
export default {
    name: 'One',
    mounted () {
        console.log('One component is mounted')
    },
    beforeDestroy () {
        console.log('One component is destroyed')
    }
}
</script>

<style>
</style>