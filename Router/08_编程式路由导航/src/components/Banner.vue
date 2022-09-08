<template>
    <div class="banner">
        banner
        <button @click="back"> back </button>
        <button @click="forward"> forward </button>
        <button @click="go"> go </button>
    </div>
</template>

<script>
export default {
    name: 'Banner',
    methods: {
        back () {
            this.$router.back()
        },
        forward () {
            this.$router.forward()
        },
        go () {
            this.$router.go(-2)
        }
    }
}
</script>
<style scoped>
button {
    margin-left: 5px;
}
</style>