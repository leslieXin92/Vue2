<template>
    <div class="school">
        <h2>school：{{ schoolName }}</h2>
        <h2>address：{{ address }}</h2>
    </div>
</template>

<script>
// 引入pubsub-js
import pubsub from 'pubsub-js'

export default {
    name: 'School',
    data () {
        return {
            schoolName: 'SUSE',
            address: 'Yibin'
        }
    },
    mounted () {
        // 订阅hello消息
        this.pubId = pubsub.subscribe('hello', this.showStudentName)
    },
    beforeDestroy () {
        // 取消订阅hello消息
        pubsub.unsubscribe(this.pubId)
    },
    methods: {
        showStudentName (msgName, data) {
            alert(`${msgName} ${data}`)
        }
    }
}
</script>

<style>
.school {
    background-color: palevioletred;
}
</style>