// 引入VueRouter
import VueRouter from "vue-router";

// 引入路由组件
import One from '../pages/One'
import Two from '../pages/Two'
import A from '../pages/A'
import B from '../pages/B'

// 创建router实例对象，管理一组一组的路由规则
export default new VueRouter({
    routes: [{
        path: '/one',
        component: One
    }, {
        path: '/two',
        component: Two,
        children: [{
            path: 'a',
            component: A
        }, {
            path: 'b',
            component: B
        }]
    },]
})