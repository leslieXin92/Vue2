// 引入VueRouter
import VueRouter from "vue-router";

// 引入components
import One from '../components/One'
import Two from '../components/Two'

// 创建router实例对象，管理一组一组的路由规则
export default new VueRouter({
    routes: [{
        path: '/one',
        component: One
    }, {
        path: '/two',
        component: Two
    },]
})