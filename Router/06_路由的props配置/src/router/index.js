// 引入VueRouter
import VueRouter from "vue-router";

// 引入路由组件
import One from '../pages/One'
import Two from '../pages/Two'
import A from '../pages/A'
import B from '../pages/B'
import Detail from '../pages/Detail'

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
            component: B,
            children: [{
                name: 'toDetail',
                path: 'detail/:id/:massage',
                component: Detail,

                // 写法一：对象写法，对象中所有的key-value最终都会通过props传给Detail组件，死数据。
                // props: { id: '001', massage: 'B' }

                // 写法二：布尔值写法，布尔值为true，则把路由所有的params参数通过props传递给Detail组件，query参数不行。
                // props: true

                // 写法三：函数写法，函数返回的对象中每一组key-value都会通过props传递给Detail组件。
                props ($route) {
                    return {
                        id: $route.params.id,
                        massage: $route.params.massage
                    }
                }
            }]
        }]
    }]
})