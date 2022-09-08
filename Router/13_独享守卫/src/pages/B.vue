<template>
    <ul>
        <li v-for="item in itemList" :key="item.id">
            <router-link :to="{ 
                name:'toDetail', 
                params: { 
                    id: item.id, 
                    massage: item.massage 
                    }
                }">
                {{ item.massage }}
            </router-link>
            <button @click="viewByPush(item)">push view</button>
            <button @click="viewByReplace(item)">replace view</button>
        </li>
        <router-view></router-view>
    </ul>
</template>

<script>
export default {
    name: 'B',
    data () {
        return {
            itemList: [{
                id: '001',
                massage: 'B',
            }, {
                id: '002',
                massage: 'BB',
            }, {
                id: '003',
                massage: 'BBB',
            }]
        }
    },
    methods: {
        viewByPush (item) {
            this.$router.push({
                name: 'toDetail',
                params: {
                    id: item.id,
                    massage: item.massage
                }
            })
        },
        viewByReplace (item) {
            this.$router.replace({
                name: 'toDetail',
                params: {
                    id: item.id,
                    massage: item.massage
                }
            })
        }
    }
}
</script>

<style scoped>
li {
    list-style: none;
}
button {
    margin-left: 5px;
}
</style>
