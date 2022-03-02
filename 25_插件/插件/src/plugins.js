import Vue from "vue"

export default {
    install (vue, a, b, c) {
        console.log('install plugins', vue, a, b, c)

        //! 全局过滤器 
        Vue.filter('lenFormat', function (val) {
            return val.slice(0, 4)
        })

        //! 全局自定义指令 
        Vue.directive('focus-bind', {
            // 指令与元素成功绑定时
            bind (element, binding) {
                element.value = binding.value * 10
            },
            // 指令所在元素被插入页面时
            inserted (element, binding) {
                element.focus()
            },
            // 指令所在的模板被重新解析时
            update (element, binding) {
                element.value = binding.value * 10
            }
        })

        //! 全局mixin 
        Vue.mixin({
            data () {
                return {
                    a: 1,
                    b: 2
                }
            }
        })

        //! 在Vue原型上添加一个方法 
        Vue.prototype.hello = () => { alert('hello') }

    },
}