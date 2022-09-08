<template>
    <div>One component</div>
</template>

<script>
export default {
    name: 'One',
    // 通过路由规则，进入该组件之前执行
    beforeRouteEnter (to, from, next) {
        if (to.meta.isAuth) {
            if (localStorage.getItem('routerDemo') === 'test') {
                next()
            } else {
                alert('no right to skip')
            }
        } else {
            next()
        }
    },
    // 通过路由规则，离开该组件之前执行
    beforeRouteLeave (to, from, next) {
        console.log('beforeRouteLeave')
        next()
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>