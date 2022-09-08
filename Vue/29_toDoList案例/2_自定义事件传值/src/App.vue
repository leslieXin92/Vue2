<template>
    <div class="box">
        <Add @addItemSon="addItemFather" />
        <List :list="list" :handleStatusChanged="handleStatusChanged" :deleteItem="deleteItem" />
        <Options
            :totalCount="totalCount"
            :completeCount="completeCount"
            @handleCheckAllSon="handleCheckAllFather"
            @deleteCheckedItemSon="deleteCheckedItemFather"
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
            flag: false
        }
    },
    computed: {
        totalCount () {
            return this.list.length
        },
        completeCount () {
            let len = 0
            this.list.map(item => {
                if (item.status) {
                    len++
                }
            })
            return len
        },
    },
    watch: {
        completeCount () {
            if ((this.completeCount === this.totalCount) && (this.totalCount != 0)) {
                this.flag = true
            } else {
                this.flag = false
            }
        },
        list: {
            deep: true,
            handler (value) {
                localStorage.setItem('toDoList', JSON.stringify(value))
            }
        }
    },
    methods: {
        addItemFather (newItem) {
            this.list.unshift(newItem)
        },
        handleStatusChanged (id) {
            this.list.map(item => {
                if (item.id === id) {
                    item.status = !item.status
                }
            })
        },
        deleteItem (id) {
            this.list = this.list.filter(item => item.id != id)
        },
        handleCheckAllFather (e) {
            if (e.target.checked) {
                this.list.map(item => item.status = true)
            } else {
                this.list.map(item => item.status = false)

            }
        },
        deleteCheckedItemFather () {
            this.list = this.list.filter(item => item.status != true)
        }
    }
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
