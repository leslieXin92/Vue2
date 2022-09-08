<template>
    <div class="itemBox">
        <li>
            <input type="checkbox" :checked="item.status" @change="handleStatusChanged(item.id)" />
            <div class="content">{{ item.content }}</div>
            <button @click="deleteItem(item.id)">delete</button>
        </li>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
    name: 'Item',
    props: ['item', 'handleStatusChanged'],
    methods: {
        deleteItem (id) {
            pubsub.publish('itemId', id)
        }
    }
}
</script>

<style scoped>
li {
    display: flex;
    align-items: center;
    margin: 10px;
    height: 50px;
    list-style: none;
    background-color: palevioletred;
}
li:hover {
    background-color: rebeccapurple;
}
input {
    margin: 0 5%;
    height: 25px;
    width: 25px;
}
.content {
    width: 60%;
}
button {
    display: none;
    width: 15%;
    height: 35px;
    margin-left: 5%;
}
li:hover button {
    display: block;
}
</style>