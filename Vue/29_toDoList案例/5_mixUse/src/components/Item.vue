<template>
    <div class="itemBox">
        <li>
            <input type="checkbox" :checked="item.status" @change="handleStatusChanged(item.id)" />
            <template v-if="!item.isEdit">
                <div class="content">{{ item.content }}</div>
                <button @click="editItem(item)">edit</button>
            </template>
            <template v-else>
                <input
                    type="text"
                    v-model="item.content"
                    class="content"
                    @keyup.enter="saveItem(item)"
                />
                <button @click="saveItem(item)">save</button>
            </template>

            <button @click="deleteItem(item.id)">delete</button>
        </li>
    </div>
</template>

<script>
export default {
    name: 'Item',
    props: ['item'],
    methods: {
        handleStatusChanged (id) {
            this.$bus.$emit('changeStatus', id)
        },
        deleteItem (id) {
            this.$bus.$emit('deleteItem', id)
        },
        editItem (item) {
            this.$bus.$emit('changeIsEdit', 'edit', item)
        },
        saveItem (item) {
            this.$bus.$emit('changeIsEdit', 'save', item)
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
    margin: 0 2%;
}
li:hover button {
    display: block;
}
</style>