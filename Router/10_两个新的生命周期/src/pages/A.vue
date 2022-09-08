<template>
    <ul>
        <li>
            <h2 :style="{opacity:opacityVal}">{{ name }}</h2>
        </li>
        <li>
            A
            <input type="text">
        </li>
        <li>
            AA
            <input type="text">
        </li>
        <li>
            AAA
            <input type="text">
        </li>
    </ul>
</template>

<script>
export default {
    name: 'A',
    data () {
        return {
            name: 'yahoo',
            opacityVal: 1
        }
    },
    activated () {
        this.timer = setInterval(() => {
            if (this.opacityVal <= 0) {
                this.opacityVal = 1
            }
            this.opacityVal -= 0.01
        }, 16)
    },
    deactivated () {
        clearInterval(this.time)
    }
}
</script>

<style scoped>
li {
    list-style: none;
}
</style>