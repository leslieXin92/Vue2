<template>
    <div class="box">
        <Add @addItem="addItem" />
        <List :list="list" />
        <Options
            :completeCount="completeCount"
            :totalCount="totalCount"
            @checkAll="checkAll"
            @deleteAll="deleteAll"
            :flag="flag"
        />
    </div>
</template>

<script>
import Add from './components/Add'
import List from './components/List'
import Options from './components/Options'

export default {
    name: 'App',
    components: {
        Add,
        Options,
        List
    },
    data () {
        return {
            list: JSON.parse(localStorage.getItem('toDoList')) || [],
        }
    },
    watch: {
        list: {
            deep: true,
            handler (value) {
                localStorage.setItem('toDoList', JSON.stringify(value))
            }
        }
    },
    computed: {
        completeCount () {
            let count = 0
            this.list.map(item => {
                if (item.status) {
                    count++
                }
            })
            return count
        },
        totalCount () {
            return this.list.length
        },
        flag () {
            return (this.completeCount === this.totalCount) && (this.totalCount != 0) ? true : false
        }
    },
    mounted () {
        this.$bus.$on('changeStatus', this.handleChangeStatus)
        this.$bus.$on('deleteItem', this.handleDeleteItem)
        this.$bus.$on('changeIsEdit', this.handleChangeIsEdit)
    },
    methods: {
        addItem (newItem) {
            this.list.unshift(newItem)
        },
        handleChangeStatus (id) {
            this.list.map(item => {
                if (item.id === id) {
                    item.status = !item.status
                }
            })
        },
        handleDeleteItem (id) {
            this.list = this.list.filter(item => item.id != id)
        },
        checkAll (status) {
            this.list.map(item => item.status = status)
        },
        deleteAll () {
            this.list = this.list.filter(item => item.status != true)
        },
        handleChangeIsEdit (type, itemData) {
            this.list.map(item => {
                if (itemData.id === item.id) {
                    item.isEdit = !item.isEdit
                }
            })
            // if (type === 'save') {
            //     this.list.map(item => {
            //         if (itemData.id === item.id) {
            //             item.isEdit = true
            //         }
            //     })
            // }
        }
    },
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    width: 60%;
    /* outline: 1px solid red; */
    background-color: palegreen;
}
</style>
