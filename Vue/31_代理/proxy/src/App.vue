<template>
    <div>
        <button @click="showMsg(1)">click show msg</button>
        <button @click="showMsg(2)">click show msg</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'App',
    methods: {
        showMsg (type) {
            if (type === 1) {
                axios.get('http://localhost:8080/yaHu/students').then(
                    response => {
                        console.log('请求成功', response.data)
                    },
                    error => {
                        console.log('请求失败', error.message)
                    }
                )
            } else if (type === 2) {
                axios.get('http://localhost:8080/huoHua/cars').then(
                    response => {
                        console.log('请求成功', response.data)
                    },
                    error => {
                        console.log('请求失败', error.message)
                    }
                )
            }
        }
    }
}
</script>

<style>
</style>