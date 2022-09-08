## 1. Vuex简介

### 1.1 Vuex是什么

专门在Vue中实现集中式状态(数据)管理的一个Vue插件，对Vue应用中多个组件的共享状态进行集中式的管理(读/写)，也是一种组件间通信的方式，且适用于任意组件间通信。

### 1.2 什么时候用Vuex

1. 多个组件依赖于同一状态。
2. 来自不同组件的行为需要变更同一状态。

### 1.3 图解

全局事件总线实现多组件共享数据：

![](http://cdn.jsdelivr.net/gh/leslieXin92/picGo/img/202203072124816.png)

Vuex实现多组件共享数据：

![](http://cdn.jsdelivr.net/gh/leslieXin92/picGo/img/202203072125987.png)

### 1.4 github地址

https://github.com/vuejs/vuex

------

## 2. Vuex工作原理

![](http://cdn.jsdelivr.net/gh/leslieXin92/picGo/img/202203080051941.png)

------

## 3. 搭建Vuex环境

安装：

```bash
npm i Vuex@3 // Vue2版本
npm i Vuex@4 // Vue3版本
```

src / store / index.js

```javascript
// 引入Vue
import Vue from 'vue'

// 引入Vuex
import Vuex from 'vuex'

// actions 用于相应组件中的动作
const actions = {}

// mutations 用于操作数据
const mutations = {}

// state 用于储存数据
const state = {}

// 使用Vuex
Vue.use(Vuex)

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state
})
```

main.js：

```javascript
import Vue from 'vue'
import App from './App.vue'

// 引入store
import store from './store'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    store
}).$mount('#app')
```

------

## 4. 基本使用

### demo：

src / store / index.js：

```javascript
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
```

Count组件：

```vue
<template>
    <div>
        <h2>Now count is {{ $store.state.sum }}</h2>
        <label for="select">number：</label>
        <select name="select" v-model.number="curCount">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="addNow">add now</button>
        <button @click="subNow">sub now</button>
        <button @click="addOdd">add odd</button>
        <button @click="addWait">add wait</button>
    </div>
</template>

<script>
export default {
    name: 'Count',
    data () {
        return {
            curCount: 1
        }
    },
    methods: {
        addNow () {
            this.$store.commit('INCREMENT', this.curCount)
        },
        subNow () {
            this.$store.commit('DECREMENT', this.curCount)
        },
        addOdd () {
            this.$store.dispatch('incrementOdd', this.curCount)
        },
        addWait () {
            this.$store.dispatch('incrementWait', this.curCount)
        }
    }
}
</script>

<style>
button {
    margin: 0 5px;
}
</style>
```

### summary：

1. 组件中读取Vuex中的数据：

   ```javascript
   $store.state.xxx
   ```

2. 组件中修改Vuex中的数据：

   ```javascript
   $store.dispatch('actions functionName', data) 或
   $store.commit('mutations functionName', data)
   ```

3. tips：若没有异步操作和其他业务逻辑，组件中可以跳过actions，不调用dispatch，直接调用commit。

## 5. getters

### demo：

src / store / index.js：

```javascript
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

// getters 用于处理加工state的数据
const getters = {
    sumTimes (state) {
        return state.sum * 10
    }
}

// 使用Vuex
Vue.use(Vuex)

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
```

Count组件：

```javascript
<template>
    <div>
        <h2>Now count is {{ $store.state.sum }}</h2>
        <h2>10 times count is {{ $store.getters.sumTimes }}</h2>
        <label for="select">number：</label>
        <select name="select" v-model.number="curCount">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="addNow">add now</button>
        <button @click="subNow">sub now</button>
        <button @click="addOdd">add odd</button>
        <button @click="addWait">add wait</button>
    </div>
</template>

<script>
export default {
    name: 'Count',
    data () {
        return {
            curCount: 1
        }
    },
    methods: {
        addNow () {
            this.$store.commit('INCREMENT', this.curCount)
        },
        subNow () {
            this.$store.commit('DECREMENT', this.curCount)
        },
        addOdd () {
            this.$store.dispatch('incrementOdd', this.curCount)
        },
        addWait () {
            this.$store.dispatch('incrementWait', this.curCount)
        }
    }
}
</script>

<style>
button {
    margin: 0 5px;
}
</style>
```

### summary：

1. 当state中数据需要经过加工后再使用时，可以使用getters加工。

2. 组件中读取数据：

   ```javascript
   $store.getters.xxx
   ```

------

## 6. 四种map方法

### 6.1 mapState + mapGetters

src / store / index.js：

```javascript
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
    sum: 0,
    name: 'yahoo',
    age: 23
}

// getters 用于处理加工state的数据
const getters = {
    sumTimes (state) {
        return state.sum * 10
    }
}

// 使用Vuex
Vue.use(Vuex)

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
```

Count组件：

```vue
<template>
    <div>
        <h2>Now count is {{ sum }}</h2>
        <h2>10 times count is {{ sumTimes }}</h2>
        <h2>name：{{ name }}</h2>
        <h2>age：{{ age }}</h2>
        <label for="select">number：</label>
        <select name="select" v-model.number="curCount">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="addNow">add now</button>
        <button @click="subNow">sub now</button>
        <button @click="addOdd">add odd</button>
        <button @click="addWait">add wait</button>
    </div>
</template>

<script>
// 引入mapState和mapGetters
import { mapState, mapGetters } from "vuex"

export default {
    name: 'Count',
    data () {
        return {
            curCount: 1
        }
    },
    computed: {
        // 写法一 对象写法：
        ...mapState({ sum: 'sum', name: 'name', age: 'age' }),
        ...mapGetters({ sumTimes: 'sumTimes' })
        
        // 写法二 数组写法：
        ...mapState(['sum', 'name', 'age']),
        ...mapGetters(['sumTimes'])
    },
    methods: {
        addNow () {
            this.$store.commit('INCREMENT', this.curCount)
        },
        subNow () {
            this.$store.commit('DECREMENT', this.curCount)
        },
        addOdd () {
            this.$store.dispatch('incrementOdd', this.curCount)
        },
        addWait () {
            this.$store.dispatch('incrementWait', this.curCount)
        }
    }
}
</script>

<style>
button {
    margin: 0 5px;
}
</style>
```

### 6.2 mapActions + mapMutations

src / store / index.js：

```javascript
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
    sum: 0,
    name: 'yahoo',
    age: 23
}

// getters 用于处理加工state的数据
const getters = {
    sumTimes (state) {
        return state.sum * 10
    }
}

// 使用Vuex
Vue.use(Vuex)

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
```

Count组件：

```vue
<template>
    <div>
        <h2>Now count is {{ sum }}</h2>
        <h2>10 times count is {{ sumTimes }}</h2>
        <h2>name：{{ name }}</h2>
        <h2>age：{{ age }}</h2>
        <label for="select">number：</label>
        <select name="select" v-model.number="curCount">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="addNow(curCount)">add now</button>
        <button @click="subNow(curCount)">sub now</button>
        <button @click="addOdd(curCount)">add odd</button>
        <button @click="addWait(curCount)">add wait</button>
    </div>
</template>

<script>
// 引入mapState、mapGetters、mapActions、mapMutations
import { mapState, mapGetters, mapActions, mapMutations } from "vuex"

export default {
    name: 'Count',
    data () {
        return {
            curCount: 1
        }
    },
    computed: {
        // 写法一 对象写法：
        ...mapState({ sum: 'sum', name: 'name', age: 'age' }),
        ...mapGetters({ sumTimes: 'sumTimes' })

        // 写法二 数组写法：
        ...mapState(['sum', 'name', 'age']),
        ...mapGetters(['sumTimes'])
    },
    methods: {
        // 方法一 对象写法：
        ...mapActions({ addOdd: 'incrementOdd', addWait: 'incrementWait' }),
        ...mapMutations({ addNow: 'INCREMENT', subNow: 'DECREMENT' })
        
        // 方法二 数组写法：(需要改插值语法中的函数名)
        ...mapActions(['incrementOdd', 'incrementWait']),
        ...mapMutations('INCREMENT', 'DECREMENT')
    }
}
</script>

<style>
button {
    margin: 0 5px;
}
</style>
```

### summary：

1. mapState：映射state中的数据为计算属性。
2. mapGetters：映射getters中的数据为计算属性。
3. mapActions：生成与actions对话的方法，包括 $store.dispatch(xxx)。
4. mapMutations：生成与mutations对话的方法，包括 $store.commit(xxx)。
5. tips：使用mapActions和mapMutations时，在模板中传递参数，不传则为event。

------

## 7. 模块化+命名空间

### demo：

src / store / index.js：

```javascript
// 引入Vue
import Vue from 'vue'

// 引入Vuex
import Vuex from 'vuex'

import countOptions from './count'
import personOptions from './person'

// 使用Vuex
Vue.use(Vuex)

// 创建并暴露store
export default new Vuex.Store({
    modules: {
        countAbout: countOptions,
        personAbout: personOptions
    }
})
```

src / store / count.js：

```javascript
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
```

src / store / person.js：

```javascript
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
```

Count组件：

```vue
<template>
    <div>
        <h2>Now count is：{{ sum }}</h2>
        <h2>10 times count is： {{ sumTimes }}</h2>
        <h2>name：{{ name }}</h2>
        <h2>age：{{ age }}</h2>
        <label for="select">number：</label>
        <select name="select" v-model.number="curCount">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="addNow(curCount)">add now</button>
        <button @click="subNow(curCount)">sub now</button>
        <button @click="addOdd(curCount)">add odd</button>
        <button @click="addWait(curCount)">add wait</button>
        <h2 class="personCount">person count is {{ personList.length }}</h2>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex"

export default {
    name: 'Count',
    data () {
        return {
            curCount: 1
        }
    },
    computed: {
        ...mapState('countAbout', ['sum', 'name', 'age']),
        ...mapState('personAbout', ['personList']),
        ...mapGetters('countAbout', ['sumTimes'])
    },
    methods: {
        ...mapActions('countAbout', { addOdd: 'incrementOdd', addWait: 'incrementWait' }),
        ...mapMutations('countAbout', { addNow: 'INCREMENT', subNow: 'DECREMENT' })
    }
}
</script>

<style scoped>
button {
    margin: 0 5px;
}
.personCount {
    color: red;
}
</style>
```

Person组件：

```vue
<template>
    <div>
        <h2>Count Component sum is：{{ sum }}</h2>
        <h3>first person is：{{ firstPerson }}</h3>
        <input type="text" v-model="name" @keyup.enter="addPerson" @keyup.space="addNumber" />
        <span>{{ ` press Enter add name , press Space add number` }}</span>
        <ul>
            <li v-for="person in personList" :key="person.id">{{ person.name }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Person',
    data () {
        return {
            name: ''
        }
    },
    mounted () {
        console.log(this.$store.getters);
    },
    computed: {
        firstPerson () {
            return this.$store.getters['personAbout/firstPerson']
        },
        sum () {
            return this.$store.state.countAbout.sum
        },
        personList () {
            return this.$store.state.personAbout.personList
        }
    },
    methods: {
        addPerson () {
            const newPerson = { id: new Date().getTime(), name: this.name }
            this.$store.commit('personAbout/ADD_PERSON', newPerson)
            this.name = ''
        },
        addNumber () {
            const newPerson = { id: new Date().getTime(), name: this.name }
            this.$store.dispatch('personAbout/addNumberName', newPerson)
            this.name = ''
        }
    }
}
</script>

<style scoped>
h2 {
    color: red;
}
</style>
```

### summary：

1. 目的：让代码更好维护，让多种数据分类更加明确。

2. 修改 store 下 index.js ：

   ```javascript
   const countAbout = {
       namespaced: true, // 开启命名空间
       action: {},
       mutations: {},
       state: {},
       getters: {}
   }
   
   const personAbout = {
       namespaced: true, // 开启命名空间
       action: {},
       mutations: {},
       state: {},
       getters: {}
   }
   
   const store = new Vuex.store({
       modules: {
           countAbout,
           personAbout
       }
   })
   ```

3. 组件中调用的方式：

   1. 调用 dispatch：

      ```javascript
      // 方式一：直接调用dispatch
      this.$store.dispatch('personAbout/addNumberName', value)
      //方式二：借助mapActions
      ...mapActions('countAbout', { addOdd: 'incrementOdd', addWait: 'incrementWait' }),
      ```

   2. 调用 commit：

      ```javascript
      // 方式一：直接调用commit
      context.commit('ADD_PERSON', value)
      // 方式二：借助mapMutations
      ...mapMutations('countAbout', { addNow: 'INCREMENT', subNow: 'DECREMENT' })
      ```

   3. 调用 state：

      ```javascript
      // 方式一：直接读取state
      this.$store.state.countAbout.sum
      // 方式二：借助mapState
      ...mapState('countAbout', ['sum', 'name', 'age'])
      ```

   4. 调用 getters：

      ```javascript
      // 方式一：直接读取getters
      return this.$store.getters['personAbout/firstPerson']
      // 方式二：借助mapGetters
      ...mapGetters('countAbout', ['sumTimes'])
      ```