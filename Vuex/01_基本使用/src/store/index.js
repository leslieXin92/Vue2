// 引入Vue
import Vue from 'vue'

// 引入Vuex
import Vuex from 'vuex'

// actions 用于相应组件中的动作
const actions = {
    incrementOdd (context, value) {
        if (context.state.sum % 2) {
            context.commit('INCREMENT', value)
        }
    },
    incrementWait (context, value) {
        setTimeout(() => {
            context.commit('INCREMENT', value)
        }, 800)
    }
}

// mutations 用于操作数据
const mutations = {
    INCREMENT (state, value) {
        state.sum += value
    },
    DECREMENT (state, value) {
        state.sum -= value
    }
}

// state 用于储存数据
const state = {
    sum: 0
}

// 使用Vuex
Vue.use(Vuex)

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state
})