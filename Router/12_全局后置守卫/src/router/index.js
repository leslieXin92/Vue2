// 引入VueRouter
import VueRouter from "vue-router";

// 引入路由组件
import One from '../pages/One'
import Two from '../pages/Two'
import A from '../pages/A'
import B from '../pages/B'
import Detail from '../pages/Detail'

// 创建router实例对象，管理一组一组的路由规则
const router = new VueRouter({
    routes: [{
        name: 'toOne',
        path: '/one',
        component: One,
        meta: { title: 'One！！！' }
    }, {
        name: 'toTwo',
        path: '/two',
        component: Two,
        meta: { isAuth: true, title: 'Two！！！' },
        children: [{
            name: 'toA',
            path: 'a',
            component: A,
            meta: { title: 'A！！！' }
        }, {
            name: 'toB',
            path: 'b',
            component: B,
            meta: { title: 'B！！！' },
            children: [{
                name: 'toDetail',
                path: 'detail/:id/:massage',
                component: Detail,
                meta: { title: 'Detail！！！' },
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

// 全局前置路由守卫，初始化和跳转前会执行回调
router.beforeEach((to, from, next) => {
    if (to.meta.isAuth) {
        if (localStorage.getItem('routerDemo') === 'test') {
            next()
        } else {
            alert('no right to skip')
        }
    } else {
        next()
    }
})

// 全局后置路由守卫，初始化和跳转后会执行回调
router.afterEach((to, from) => {
    document.title = to.meta.title
})

export default router