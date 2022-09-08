// 人员相关配置
export default {
    namespaced: true,
    actions: {
        addNumberName (context, value) {
            if (!isNaN(value.name)) {
                context.commit('ADD_PERSON', value)
            }
        }
    },
    mutations: {
        ADD_PERSON (state, value) {
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [
            { name: 'leslie', age: 23 }
        ]
    },
    getters: {
        firstPerson (state) {
            return state.personList[0].name
        }
    }
}