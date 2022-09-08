import Vue from 'vue'
import App from './App.vue'

// 引入路由
import VueRouter from 'vue-router'
import router from './router'

Vue.config.productionTip = false

// 应用路由
Vue.use(VueRouter)

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
