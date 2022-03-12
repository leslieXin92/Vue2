// 引入Vue
import Vue from 'vue'

// 引入App组件
import App from './App.vue'

// 引入mixin
import { mixin2 } from './mixin'

// 关闭Vue的生产提示
Vue.config.productionTip = false

// 全局使用mixin
Vue.mixin(mixin2)

// 创建Vue的实例对象
new Vue({
    el: '#app',
    // 将App组件放入容器中
    render: h => h(App),
})
