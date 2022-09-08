<template>
    <div>
        <button @click="handleShow">show/hide</button>

        <transition name="hello" appear>
            <h2 v-show="isShow">hello</h2>
        </transition>

        <hr />

        <transition-group name="hello" appear>
            <h2 v-show="isShow" key="1">hello</h2>
            <h2 v-show="isShow" key="2">hello</h2>
        </transition-group>
    </div>
</template>

<script>
export default {
    name: 'hello',
    data () {
        return {
            isShow: true
        }
    },
    methods: {
        handleShow () {
            this.isShow = !this.isShow
        }
    }
}
</script>

<style>
h2 {
    background-color: paleturquoise;
}

/* 进入的起点、离开的重点 */
.hello-enter,
.hello-leave-to {
    transform: translateX(-100%);
}

/* 进入过程、离开过程 */
.hello-enter-active,
.hello-leave-active {
    transition: 0.5s linear;
}

/* 进入的重点、离开的起点 */
.hello-enter-to,
.hello-leave {
    transform: translateX(0);
}
</style>