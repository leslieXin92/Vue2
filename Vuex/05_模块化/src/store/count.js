// 计数相关配置
export default {
    namespaced: true,
    actions: {
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
    },
    mutations: {
        INCREMENT (state, value) {
            state.sum += value
        },
        DECREMENT (state, value) {
            state.sum -= value
        }
    },
    state: {
        sum: 0,
        name: 'yahoo',
        age: 23
    },
    getters: {
        sumTimes (state) {
            return state.sum * 10
        }
    }
}