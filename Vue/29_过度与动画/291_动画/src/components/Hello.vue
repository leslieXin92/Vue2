<template>
    <div>
        <button @click="handleShow">show/hide</button>
        <transition name="hello" appear>
            <h2 v-show="isShow">hello</h2>
        </transition>
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

.hello-enter-active {
    animation: yahu 1s ease-in;
}

.hello-leave-active {
    animation: yahu 1s ease-out reverse;
}

@keyframes yahu {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
}
</style>