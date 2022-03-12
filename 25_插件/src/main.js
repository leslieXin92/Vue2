// 引入Vue
import Vue from 'vue'

// 引入App组件
import App from './App.vue'

// 引入插件
import plugins from './plugins'

// 关闭Vue的生产提示
Vue.config.productionTip = false

// 应用插件
Vue.use(plugins, 1, 2, 3)

// 创建Vue的实例对象
new Vue({
    el: '#app',
    // 将App组件放入容器中
    render: h => h(App),
})
