<template>
    <ul>
        <li v-for="item in itemList" :key="item.id">
            <!-- 路由跳转并携带params参数，to的字符串写法 -->
            <!-- <router-link :to="`/two/b/detail/${item.id}/${item.massage}`">
                {{ item.massage }}
            </router-link> -->

            <!-- 路由跳转并携带params参数，to的对象写法 -->
            <router-link :to="{ 
                name:'toDetail', 
                params: { 
                    id: item.id, 
                    massage: item.massage 
                    }
                }">
                {{ item.massage }}
            </router-link>
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
    }
}
</script>

<style scoped>
li {
    list-style: none;
}
</style>
