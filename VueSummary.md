# VueSummary

## 一、Vue核心

------

### 1.1 Vue简介

#### 一套用于 <u>构建用户界面</u> 的 <u>渐进式</u> JS框架。

构建用户界面：在合适的时间，发起合适的请求，拿到合适的数据，显示在合适的位置。

渐进式：自底向上逐层的应用。逐渐 + 递进。

​		简单应用：只需要引入一个轻量小巧的核心库。

​		复杂应用：可以引入各种Vue插件。

#### 特点：

1. 采用组件化模式，提高代码复用率以及可维护性。
2. 声明式编码，无需直接操控dom，提高开发效率。
3. 使用虚拟dom + diff算法，尽量复用dom节点。

------

### 1.2 初识Vue

#### Hello World：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!--! 引入vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
</head>

<body>
    <!--! 容器 -->
    <div id="root">
        <h1>hello {{name}},{{age+1}}</h1>
    </div>
</body>

<script>
    // 以阻止 vue 在启动时生成生产提示。
    Vue.config.productionTip = false

    // 创建vue实例
    new Vue({
        el: '#root', // el用于指定当前vue实例为哪个容器服务，值通常为css选择器字符串。
        data: { // data中用于存储数据，用于el指定的容器使用。
            name: 'yahoo',
            age: 23
        }
    })
</script>

</html>
```

#### summary：

1. 想让Vue工作，就必须创建一个Vue实例，且要传入一个配置对象。

2. root容器里的代码依然符合html规范，只不过加入了一些特殊的Vue语法。

3. root容器里的代码被称为 " Vue模板 " 。

4. Vue实例和容器时一 一对应的。

5. 真实开发中只有一个Vue实例，配合组件一起使用。

6. 双括号内写JS表达式。

   ​		JS表达式：一个表达式会产生一个值（a，a+b，function(val)，a===b ? true : false ）

   ​		JS语句（ if ( ) { }，for ( ) { } ）

7. 一旦data中的数据发生改变，那么页面中用到该数据的地方也会自动更新。

------

### 1.3 模板语法

#### demo：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!--! 引入vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
</head>

<body>
    <!--! 容器 -->
    <div id="root">
        <!--? 插值语法 -->
        <h1>hello {{name}},{{age+1}}</h1>
        <!--? 指令语法 -->
        <a v-bind:href="web.url">跳转{{web.name}}</a>
        <a :href="web.url.toUpperCase()">跳转{{web.name}}</a>
    </div>
</body>

<script>
    // 以阻止 vue 在启动时生成生产提示。
    Vue.config.productionTip = false

    // 创建vue实例
    new Vue({
        el: '#root', // el用于指定当前vue实例为哪个容器服务，值通常为css选择器字符串。
        data: { // data中用于存储数据，用于el指定的容器使用。
            name: 'yahoo',
            age: 23,
            web: {
                name: '百度',
                url: 'http://www.baidu.com'
            },
        }
    })
</script>

</html>
```

#### summary：

Vue模板语法分为两大类。

1. 插值语法：

   ​		功能：用于解析标签体内容。

   ​		写法：{{ name }} 。

2. 指令语法：

   ​		功能：用于解析标签（标签属性、标签体内容、绑定事件……）。

   ​		例子：v-bind : value = '1'，或简写为 :value = '1'。

------

### 1.4 数据绑定

#### demo：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!--! 引入vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
</head>

<body>
    <!--! 容器 -->
    <div id="root">
        单向数据绑定：
        <input type="text" v-bind:value="value1">
        <input type="text" :value="value1">

        <br />

        双向数据绑定：
        <input type="text" v-model:value="value2">
        <input type="text" v-model="value2">
    </div>
</body>

<script>
    // 以阻止 vue 在启动时生成生产提示。
    Vue.config.productionTip = false

    // 创建vue实例
    new Vue({
        el: '#root', // el用于指定当前vue实例为哪个容器服务，值通常为css选择器字符串。
        data: { // data中用于存储数据，用于el指定的容器使用。
            value1: '123',
            value2: '321'
        }
    })
</script>

</html>
```

#### summary：

Vue有两种数据绑定的方式。

1. 单项绑定（v-bind）：数据只能从data流向页面。v-bind : value = ' value ' 简写为 : value = ' value '。
2. 双向绑定（v-model）：数据在data和页面双向流动。v-model : value = ' value ' 简写为 v-model = ' value '。

------

### 1.5 el和data的两种写法

#### demo：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!--! 引入vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
</head>

<body>
    <!--! 容器 -->
    <div id="root">
        <h1>hello {{name}},{{age+1}}</h1>
    </div>
</body>

<script>
    // 以阻止 vue 在启动时生成生产提示。
    Vue.config.productionTip = false

    // el两种写法：
    // 写法一
    new Vue({
        el: '#root', // el用于指定当前vue实例为哪个容器服务，值通常为css选择器字符串。
        data: { // data中用于存储数据，用于el指定的容器使用。
            name: 'yahoo',
            age: 23
        }
    })
    // 写法二
    const v = new Vue({
        data: {
            name: 'yahoo',
            age: '23'
        }
    })
    v.$mount('#root')

    // data两种写法
    // 写法一
    new Vue({
        el: '#root',
        data: {
            name: 'yahoo',
            age: 23
        }
    })
    // 写法二
    new Vue({
        el: '#root',
        data( ) {
            return {
                name: 'yahoo',
                age: 23
            }
        }
    })
</script>

</html>
```

#### summary：

1.  el有两种写法：

   ​		（1）new Vue时配置el属性。

   ​		（2）先创建Vue实例，再通过vm.$mount ( ' #root ' ) 指定el的值。 

2. data有两种写法：

   ​		（1）对象式

   ​		（2）函数式

3. 重要原则：

   ​		由Vue管理的函数，一定不要写箭头函数，因为用了箭头函数后this就不再是Vue实例了，而是window。

------

### 1.6 MVVM模型

#### demo：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!--! 引入vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
</head>

<body>
    <!--! 容器 -->
    <div id="root">
        <h1>姓名：{{name}}</h1>
        <h1>年龄：{{age}}</h1>
    </div>
</body>

<script>
    // 以阻止 vue 在启动时生成生产提示。
    Vue.config.productionTip = false

    // 创建vue实例
    new Vue({
        el: '#root', // el用于指定当前vue实例为哪个容器服务，值通常为css选择器字符串。
        data: { // data中用于存储数据，用于el指定的容器使用。
            name: 'yahoo',
            age: 23
        }
    })
</script>

</html>
```

------

#### summary：

1. M：模型 ( model )	→	data里的数据。
2. V：视图 ( View )	→	模板代码。
3. VM：视图模型 ( ViewModel )	→	Vue实例。

------

### 1.7 Vue数据代理

#### 1.7.1 Object.defineProperty( )

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>回顾Object.defineProperty方法</h1>
</body>

<script>
    let number = 23
    let person = {
        name: 'yahoo',
        sex: 'boy',
        // age:23
    }
    Object.defineProperty(person, 'age', {
        value: 23,
        enumerable: true, // 控制属性是否可被枚举，默认为false
        writable: true, // 控制属性是否可被修改，默认为false
        configurable: true, //控制属性是否可被删除，默认为false
        get() { //当读取person.age时，getter(get函数)就会被调用，age的值就等于返回的值
            return number
        },
        set(newVal) { // 当修改person.age时，setter(set函数)就会被调用，并收到修改的值
            number = newVal
        }
    })

    console.log(Object.keys(person));
</script>

</html>
```

#### 1.7.2 什么是数据代理

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>数据代理：通过对一个对象代理 对 另一个对象中属性的操作(读/写)</h1>
</body>
<script>
    let obj1 = {
        x: 100
    }
    let obj2 = {
        y: 200
    }
    Object.defineProperty(obj2, 'x', {
        get() {
            return obj1.x
        },
        set(newVal) {
            obj1.x = newVal
        }
    })
</script>

</html>
```

#### 1.7.3 Vue的数据代理

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!--! 引入vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
</head>

<body>
    <!--! 容器 -->
    <div id="root">
        <h1>姓名：{{name}}</h1>
        <h1>姓名：{{_data.name}}</h1>
        <h1>年龄：{{age}}</h1>
        <h1>年龄：{{_data.age}}</h1>
    </div>
</body>

<script>
    // 以阻止 vue 在启动时生成生产提示。
    Vue.config.productionTip = false

    // 创建vue实例
    new Vue({
        el: '#root', // el用于指定当前vue实例为哪个容器服务，值通常为css选择器字符串。
        data: { // data中用于存储数据，用于el指定的容器使用。
            name: 'yahoo',
            age: 23
        }
    })
</script>

</html>
```

![](http://cdn.jsdelivr.net/gh/leslieXin92/picGo/img/202202180155379.png)

#### summary：

1. Vue中的数据代理：通过vm对象来代理data对象中属性的操作（读 / 写）。

2. Vue中数据代理的好处：更加方便的操作data里的数据。

3. 基本原理：

   ​		通过Object.defineProperty( )把data对象中所有属性添加到vm上；

   ​		为每一个添加到vm上的属性，都指定一个getter和setter；

   ​		在getter和setter的内部去操作（读 / 写）data中对应的属性。

------

### 1.8 事件处理

#### 1.8.1 事件的基本使用

##### demo：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!--! 引入vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
</head>

<body>
    <!--! 容器 -->
    <div id="root">
        <h1>my name is {{name}}</h1>
        <button v-on:click="showAge1">show my age</button>
        <button @click="showAge2($event,24)">show my ChineseAge</button>
    </div>
</body>

<script>
    // 以阻止 vue 在启动时生成生产提示。
    Vue.config.productionTip = false

    // 创建vue实例
    new Vue({
        el: '#root', // el用于指定当前vue实例为哪个容器服务，值通常为css选择器字符串。
        data: { // data中用于存储数据，用于el指定的容器使用。
            name: 'yahoo',
            age: 23
        },
        methods: {
            showAge1() {
                alert(`my age is ${this.age}`) // this指当前实例对象
            },
            showAge2(event, ChineseAge) {
                alert(`my ChineseAge is ${ChineseAge}`) // this指当前实例对象
            }
        }
    })
</script>

</html>
```

##### summary：

1. 使用v-on:xxx或者@xxx绑定事件，xxx为事件名。
2. 事件的回调需要配置在methods里，最终出现在vm上。
3. methods中配置的函数，都是被Vue管理的函数，this指向vm或组件实例对象。
4. methods中配置的函数，不要用箭头函数，否则this就会从vm变为window。
5. @click="func" 和 @click="func ($event)" 效果一致，但后者可以传参。

#### 1.8.2 事件修饰符

##### demo：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!--! 引入vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
    <style>
        * {
            margin: 10px;
        }

        .box {
            display: flex;
            justify-content: space-around;
            width: 400px;
            height: auto;
            background-color: paleturquoise;
        }

        .father {
            margin: auto;
            padding: 5px;
            border: 2px solid red;
            background-color: paleturquoise;
        }

        .son {
            background-color: orangered;
        }

        ul {
            list-style: none;
            border: 2px solid red;
            width: 250px;
            height: 200px;
            overflow: scroll;
        }

        li {
            height: 100px;
            background-color: orangered;
        }
    </style>
</head>

<body>
    <!--! 容器 -->
    <div id="root">
        <h1>hello {{name}}</h1>
        <!--? 阻止默认事件 -->
        <div class="box">
            <a href="http://www.baidu.com" @click="showAge1">阻止默认事件</a>
            <a href="http://www.baidu.com" @click.prevent="showAge2">func.prevent</a>
        </div>
        <!--? 阻止事件冒泡 -->
        <div class="box">
            <div @click="showAge3">
                <button @click="showAge3">阻止事件冒泡</button>
            </div>
            <div @click="showAge4">
                <button @click.stop="showAge4">func.stop</button>
                <a href="http://www.baidu.com" @click.prevent.stop="showAge4">可以叠加</a>
            </div>
        </div>
        <!--? 事件只触发一次 -->
        <div class="box">
            <button @click="showAge5" class="Oncebtn">事件只触发一次</button>
            <button @click.once="showAge6">func.once</button>
        </div>
        <!--? 捕获阶段出发回调 -->
        <div class="box">
            <div class="father captureBegin" @click="showAge7(0)">
                father
                <div class="son" @click="showAge7(1)">son</div>
            </div>
            <div class="father" @click.capture="showAge8(0)">
                father
                <div class="son" @click="showAge8(1)">son</div>
            </div>
        </div>
        <!--? 只有event.target是当前操作的元素时才触发事件 -->
        <div class="box">
            <div @click.self="showAge9">
                <button @click="showAge9">只有event.target是当前操作的元素时才触发事件</button>
            </div>
        </div>
        <!--? 时间的默认行为会立即执行，无需等待事件回调执行完毕 -->
        <div class="box">
            <ul @wheel.passive="showAge10">
                <li>html</li>
                <li>css</li>
                <li>javaScript</li>
                <li>Vue</li>
            </ul>
        </div>
    </div>
</body>

<script>
    // 以阻止 vue 在启动时生成生产提示。
    Vue.config.productionTip = false

    // 创建vue实例
    new Vue({
        el: '#root', // el用于指定当前vue实例为哪个容器服务，值通常为css选择器字符串。
        data: { // data中用于存储数据，用于el指定的容器使用。
            name: 'yahoo',
            age: 23
        },
        methods: {
            // 阻止默认事件 
            showAge1(e) {
                e.preventDefault()
                alert(`my age is ${this.age}`)
            },
            showAge2() {
                alert(`my age is ${this.age}`)
            },

            // 阻止事件冒泡
            showAge3(e) {
                e.stopPropagation()
                alert(`my age is ${this.age}`)
            },
            showAge4() {
                alert(`my age is ${this.age}`)
            },

            // 事件只触发一次
            // document.querySelector('.onceBtn').onclick = showAge5()
            showAge5() {
                alert(`my age is ${this.age}`)
                // document.querySelector('.onceBtn').onclick = ''
            },
            showAge6() {
                alert(`my age is ${this.age}`)
            },

            // 捕获阶段触发回调
            // const captureBeginEl = document.querySelector('.captureBegin')
            // captureBeginEl.addEventListener('click',showAge7,false)
            showAge7(num) {
                const msg = num === 0 ? 'my age is' : 'my ChineseAge is'
                alert(`${msg} ${this.age+num}`)
            },
            showAge8(num) {
                const msg = num === 0 ? 'my age is' : 'my ChineseAge is'
                alert(`${msg} ${this.age+num}`)
            },

            // 只有event.target是当前操作的元素时才触发事件
            showAge9() {
                alert(`my age is ${this.age}`)
            },

            // 时间的默认行为会立即执行，无需等待事件回调执行完毕
            // 默认顺序为：点击按钮 => 执行回调 => 执行默认事件
            showAge10() {
                for (let i = 0; i < 10000; i++) {
                    console.log(this.age);
                }
                alert(`my age is ${this.age}`)
            }
        }
    })
</script>

</html>
```

##### summary：

Vue中的事件修饰符：

1. .prevent：阻止默认事件。
2. .stop：阻止事件冒泡。
3. .once：事件只触发一次。
4. .capture：使用事件的捕获模式。
5. .self：只有event.target为当前操作元素时才会触发事件。
6. .passive：事件的默认行为会立即执行，无需等待事件回调执行完毕。

#### 1.8.3 键盘事件

##### demo：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!--! 引入vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
</head>

<body>
    <!--! 容器 -->
    <div id="root">
        <h1>hello {{name}}，{{age}}</h1>
        <input type="text" @keyup="showVal1" placeholder="按下回车提示输入">
        <input type="text" @keyup.enter="showVal2" placeholder="按下回车提示输入">
        <input type="text" @keyup.13="showVal2" placeholder="按下回车提示输入">
        <input type="text" @keyup.huiche="showVal2" placeholder="按下回车提示输入">
        <input type="text" @keyup.ctrl.c="showVal2" placeholder="按下ctrl+c提示输入">
    </div>
</body>

<script>
    // 以阻止 vue 在启动时生成生产提示。
    Vue.config.productionTip = false

    // 定义别名按键
    Vue.config.keyCodes.huiche = 13

    // 创建vue实例
    new Vue({
        el: '#root', // el用于指定当前vue实例为哪个容器服务，值通常为css选择器字符串。
        data: { // data中用于存储数据，用于el指定的容器使用。
            name: 'yahoo',
            age: 23
        },
        methods: {
            showVal1(e) {
                if (e.keyCode != 13) return
                console.log(e.target.value)
            },
            showVal2(e) {
                console.log(e.target.value)
            }
        }
    })
</script>

</html>
```

##### summary：

1. Vue中常用的案件别名：

   ​		回车：enter

   ​		删除：delete（捕获 delete 和 backspace）

   ​		退出：esc

   ​		换行：tab（与@keydown使用）

   ​		上：up

   ​		下：down

   ​		左：left

   ​		右：right

2. Vue未提供别名的按键，可以使用原始的key值（如CapsLock）去绑定，但注意要转换为kebab-case形式（如caps-lock）。

3. 系统修饰键（用法特殊）：ctrl、alt、shift、meta

   ​		a. 配合keyup使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才会被触发。

   ​		b. 配合keydown使用：正常触发事件。

4. 可以使用keyCode去指定具体的按键，但keyCode要被移除，故不推荐。

5. Vue.config.keyCodes.自定义键名 = 键码，可以自定义按键别名。

------

### 1.9 计算属性

#### demo：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!--! 引入vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
</head>

<body>
    <!--! 容器 -->
    <div id="root">
        <input type="text" v-model="name"><br />
        <input type="text" v-model="age"><br />
        <h1>{{helloWord}}</h1><br />
        <h1>{{helloWord}}</h1><br />
        <h1>{{helloWord}}</h1><br />
        <h1>{{helloWord}}</h1><br />
        <h1>{{helloWord}}</h1><br />
    </div>
</body>

<script>
    // 以阻止 vue 在启动时生成生产提示。
    Vue.config.productionTip = false

    // 创建vue实例
    const vm = new Vue({
        el: '#root', // el用于指定当前vue实例为哪个容器服务，值通常为css选择器字符串。
        data: { // data中用于存储数据，用于el指定的容器使用。
            name: 'yahoo',
            age: 23
        },
        computed: {
            // 完整写法：
            helloWord: {
                // 当读取helloWord时 或 helloWord所依赖的数据发生改变时，set就会被调用，且返回值就会被作为helloWord的值。
                get() {
                    console.log('getter');
                    return this.name + '，' + this.age
                },
                set(newVal) {
                    console.log('setter');
                    // console.log(this); // Vue改变了computed的this指向，此处的this指向vm
                    this.name = newVal.split('，')[0]
                    this.age = newVal.split('，')[1]
                }
            },
            // 简写（只可读取不可修改）
            helloWord() {
                console.log('getter');
                return this.name + '，' + this.age
            }
        }
    })
</script>

</html>
```



#### summary：

1. 定义：要用的属性不存在，要通过已有属性计算得来。

2. 原理：底层借助了Object.defineProperty方法提供的getter和setter。

3. get函数什么时候执行：

   ​		a. 初次读取时会执行一次，有缓存。

   ​		b. 当依赖的数据发生改变时会被再次调用。

4. 优点：与methods相比，内部有缓存机制，可以被复用，效率更高，调试方便。

5. tips：

   ​		a. 计算属性最终会出现在vm上，直接读取使用即可。

   ​		b. 如果计算属性要被修改，那必须写set函数去相应修改，且set中要引起计算时依赖的数据发生改变。

------

### 1.10 监听属性

#### 1.10.1 监听属性

##### demo：

```html
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <!--! 引入vue -->
        <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
    </head>

    <body>
        <!--! 容器 -->
        <div id="root">
            <h1>今天天气很{{weather}}</h1>
            <button @click="handleChangeWeather">切换天气</button>
        </div>
    </body>

    <script>
        // 以阻止 vue 在启动时生成生产提示。
        Vue.config.productionTip = false

        // 创建vue实例
        const vm = new Vue({
            el: '#root', // el用于指定当前vue实例为哪个容器服务，值通常为css选择器字符串。
            data: { // data中用于存储数据，用于el指定的容器使用。
                isHot: true
            },
            // computed 
            computed: {
                weather() {
                    return this.isHot ? '炎热1' : '寒冷0'
                }
            },
            // watch
            watch: {
                // 完整写法：
                isHot: {
                    immediate: true, // 初始化时立刻调用handler，默认为false
                    deep: true, // 深度监视，默认为false
                    handler(newVal, oldVal) { // 当isHot发生改变时，调用handler
                        console.log('handler', newVal, oldVal)
                    }
                },
                // 简写：
                isHot(newVal, oldVal) {
                    console.log('handler', newVal, oldVal)
                }
            },
            // methods
            methods: {
                handleChangeWeather() {
                    this.isHot = !this.isHot
                }
            },
        })

        // 不在vm里写watch，可以在外边这么写
        // 完整写法：
        vm.$watch('isHot', {
            immediate: true, // 初始化时立刻调用handler，默认为false
            deep: true, // 深度监视，默认时false
            handler(newVal, oldVal) { // 当isHot发生改变时，调用handler
                console.log('handler', newVal, oldVal)
            }
        })
        // 简写：
        vm.$watch('isHot', function (newVal, oldVal) {
            console.log('handler', newVal, oldVal)
        })
    </script>

    </html>
```



##### summary：

监听属性watch：

1. 当被监听的属性发生变化时，回调函数handler自动被调用，进行相关操作。

2. 监视的属性必须存在才能被监视，可以是data里的属性，也可以是computed里计算出来的属性。

3. 监视的两种写法：

   ​		a. new Vue时传入watch配置。

   ​		b. 通过vm.$watch监视。

#### 1.10.2 深度监视

##### demo:

```html
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <!--! 引入vue -->
        <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
    </head>

    <body>
        <!--! 容器 -->
        <div id="root">
            <h1>今天天气很{{weather}}</h1>
            <button @click="handleChangeWeather">切换天气</button>
            <h1>a的值为：{{numbers.a}}</h1>
            <button @click="addA">点击a++</button>
            <h1>b的值为：{{numbers.b}}</h1>
            <button @click="addB">点击b++</button>
            <h1>e的值为：{{numbers.c.d.e}}</h1>
            <button @click="addE">点击e++</button>
        </div>
    </body>

    <script>
        // 以阻止 vue 在启动时生成生产提示。
        Vue.config.productionTip = false

        // 创建vue实例
        const vm = new Vue({
            el: '#root', // el用于指定当前vue实例为哪个容器服务，值通常为css选择器字符串。
            data: { // data中用于存储数据，用于el指定的容器使用。
                isHot: true,
                numbers: {
                    a: 0,
                    b: 10,
                    c: {
                        d: {
                            e: 100
                        }
                    }
                }
            },
            // computed 
            computed: {
                weather() {
                    return this.isHot ? '炎热1' : '寒冷0'
                }
            },
            // watch
            watch: {
                isHot: {
                    immediate: true, // 初始化时立刻调用handler，默认为false
                    handler(newVal, oldVal) { // 当isHot发生改变时，调用handler
                        console.log('handler', newVal, oldVal);
                    }
                },
                'numbers.a': { // 监视多级结构中某个属性的变化
                    handler() {
                        console.log('a被改变了');
                    }
                },
                numbers: { // 检测多级结构中所有属性的变化
                    deep: true, // 深度监视，默认为false
                    handler() {
                        console.log('number被改变了');
                    }
                }
            },
            // methods
            methods: {
                handleChangeWeather() {
                    this.isHot = !this.isHot
                },
                addA() {
                    this.numbers.a++
                },
                addB() {
                    this.numbers.b++
                },
                addE() {
                    this.numbers.c.d.e++
                }
            }
        })

        // 不在vm里写watch，可以在外边这么写
        vm.$watch('isHot', {
            immediate: true, // 初始化时立刻调用handler，默认为false
            handler(newVal, oldVal) { // 当isHot发生改变时，调用handler
                console.log('handler', newVal, oldVal);
            }
        })
    </script>

    </html>
```

##### summary：

1. 深度监视：

   ​		a. Vue中的watch默认不监测对象内部值得改变，只监视一层。

   ​		b. 配置deep：true可以监测对象内部值得改变，监视多层。

2. tips：

   ​		a. Vue自身可以监测对象内部值得改变，但Vue提供得watch默认不监测。

   ​		b. 使用watch时根据具体的数据结构，决定是否采用深度监视。

### 1.11 watch与computed

#### watch实现computed的demo：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!--! 引入vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
</head>

<body>
    <!--! 容器 -->
    <div id="root">
        <input type="text" v-model="name"><br />
        <input type="text" v-model="age"><br />
        <h1>{{helloWord}}</h1>
    </div>
</body>

<script>
    // 以阻止 vue 在启动时生成生产提示。
    Vue.config.productionTip = false

    // 创建vue实例
    const vm = new Vue({
        el: '#root', // el用于指定当前vue实例为哪个容器服务，值通常为css选择器字符串。
        data: { // data中用于存储数据，用于el指定的容器使用。
            name: 'yahoo',
            age: 23,
            helloWord: 'hello yahoo，23'
        },
        watch: {
            name(newVal) {
                this.helloWord = `hello ${newVal}，${this.age}`
            },
            age(newVal) {
                setTimeout(() => {
                    this.helloWord = `hello ${this.name}，${newVal}`
                }, 1000)
            }
        }
    })
</script>

</html>
```

#### summary：

1. watch与computed之间的区别：

   ​		a. computed能完成的功能，watch都能完成。

   ​		b. watch能完成的功能，computed不一定能完成，比如watch可以进行异步操作。

2. tips：

   ​		a. 所被Vue管理的函数，最好写成普通函数，这样this的指向才会是vm或组件实例对象。

   ​		b. 所不被Vue管理的函数，如定时器的回调、ajax的回调、Promise的回调等等，最好写成箭头函数，这样的this指向才会是vm或组件实例对象。