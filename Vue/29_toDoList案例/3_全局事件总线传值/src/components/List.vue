<template>
    <div class="listBox">
        <ul>
            <Item v-for="item in list" :key="item.id" :item="item" />
        </ul>
    </div>
</template>

<script>
import Item from './Item'

export default {
    name: 'List',
    components: {
        Item
    },
    props: ['list']
}
</script>

<style>
.listBox {
    width: 80%;
    height: auto;
    margin: 0px auto;
}
ul {
    margin: 0 auto;
}
</style>