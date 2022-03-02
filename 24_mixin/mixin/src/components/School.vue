<template>
    <div class="school">
        <h2>school：{{ name }}</h2>
        <h2>address：{{ address }}</h2>
        <button @click="showName">show name</button>
    </div>
</template>

<script>
import { mixin1 } from '../mixin'

export default {
    name: 'School',
    data () {
        return {
            name: 'SUSE',
            address: 'Yibin'
        }
    },
    mixins: [mixin1]
}
</script>

<style>
.school {
    background-color: palevioletred;
}
</style>