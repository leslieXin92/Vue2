# 一、Vue核心

## 1.1 Vue简介

### 一套用于 <u>构建用户界面</u> 的 <u>渐进式</u> JS框架。

构建用户界面：在合适的时间，发起合适的请求，拿到合适的数据，显示在合适的位置。

渐进式：自底向上逐层的应用。逐渐 + 递进。

​		简单应用：只需要引入一个轻量小巧的核心库。

​		复杂应用：可以引入各种Vue插件。

### 特点：

1. 采用组件化模式，提高代码复用率以及可维护性。
2. 声明式编码，无需直接操控dom，提高开发效率。
3. 使用虚拟dom + diff算法，尽量复用dom节点。

------

## 1.2 初识Vue

### Hello World：

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

### summary：

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

## 1.3 模板语法

### demo：

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

### summary：

Vue模板语法分为两大类。

1. 插值语法：

   ​		功能：用于解析标签体内容。

   ​		写法：{{ name }} 。

2. 指令语法：

   ​		功能：用于解析标签（标签属性、标签体内容、绑定事件……）。

   ​		例子：v-bind : value = '1'，或简写为 :value = '1'。

------

## 1.4 数据绑定

### demo：

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

### summary：

Vue有两种数据绑定的方式。

1. 单项绑定（v-bind）：数据只能从data流向页面。v-bind : value = ' value ' 简写为 : value = ' value '。
2. 双向绑定（v-model）：数据在data和页面双向流动。v-model : value = ' value ' 简写为 v-model = ' value '。

------

## 1.5 el和data的两种写法

### demo：

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

### summary：

1.  el有两种写法：

   ​		（1）new Vue时配置el属性。

   ​		（2）先创建Vue实例，再通过vm.$mount ( ' #root ' ) 指定el的值。 

2. data有两种写法：

   ​		（1）对象式

   ​		（2）函数式

3. 重要原则：

   ​		由Vue管理的函数，一定不要写箭头函数，因为用了箭头函数后this就不再是Vue实例了，而是window。

------

## 1.6 MVVM模型

### demo：

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

### summary：

1. M：模型 ( model )	→	data里的数据。
2. V：视图 ( View )	→	模板代码。
3. VM：视图模型 ( ViewModel )	→	Vue实例。

------

## 1.7 Vue数据代理

### 1.7.1 Object.defineProperty( )

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

### 1.7.2 什么是数据代理

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

### 1.7.3 Vue的数据代理

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

### summary：

1. Vue中的数据代理：通过vm对象来代理data对象中属性的操作（读 / 写）。

2. Vue中数据代理的好处：更加方便的操作data里的数据。

3. 基本原理：

   ​		通过Object.defineProperty( )把data对象中所有属性添加到vm上；

   ​		为每一个添加到vm上的属性，都指定一个getter和setter；

   ​		在getter和setter的内部去操作（读 / 写）data中对应的属性。
   
   ![](http://cdn.jsdelivr.net/gh/leslieXin92/picGo/img/202202180155379.png)

------

## 1.8 事件处理

### 1.8.1 事件的基本使用

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

#### summary：

1. 使用v-on:xxx或者@xxx绑定事件，xxx为事件名。
2. 事件的回调需要配置在methods里，最终出现在vm上。
3. methods中配置的函数，都是被Vue管理的函数，this指向vm或组件实例对象。
4. methods中配置的函数，不要用箭头函数，否则this就会从vm变为window。
5. @click="func" 和 @click="func ($event)" 效果一致，但后者可以传参。

### 1.8.2 事件修饰符

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

#### summary：

Vue中的事件修饰符：

1. .prevent：阻止默认事件。
2. .stop：阻止事件冒泡。
3. .once：事件只触发一次。
4. .capture：使用事件的捕获模式。
5. .self：只有event.target为当前操作元素时才会触发事件。
6. .passive：事件的默认行为会立即执行，无需等待事件回调执行完毕。

### 1.8.3 键盘事件

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

#### summary：

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

## 1.9 计算属性

### demo：

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

### summary：

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

## 1.10 监听属性

### 1.10.1 监听属性

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

#### summary：

监听属性watch：

1. 当被监听的属性发生变化时，回调函数handler自动被调用，进行相关操作。

2. 监视的属性必须存在才能被监视，可以是data里的属性，也可以是computed里计算出来的属性。

3. 监视的两种写法：

   ​		a. new Vue时传入watch配置。

   ​		b. 通过vm.$watch监视。

### 1.10.2 深度监视

#### demo:

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

#### summary：

1. 深度监视：

   ​		a. Vue中的watch默认不监测对象内部值得改变，只监视一层。

   ​		b. 配置deep：true可以监测对象内部值得改变，监视多层。

2. tips：

   ​		a. Vue自身可以监测对象内部值得改变，但Vue提供得watch默认不监测。

   ​		b. 使用watch时根据具体的数据结构，决定是否采用深度监视。

------

## 1.11 watch与computed

### watch实现computed的demo：

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

### summary：

1. watch与computed之间的区别：

   ​		a. computed能完成的功能，watch都能完成。

   ​		b. watch能完成的功能，computed不一定能完成，比如watch可以进行异步操作。

2. tips：

   ​		a. 所被Vue管理的函数，最好写成普通函数，这样this的指向才会是vm或组件实例对象。

   ​		b. 所不被Vue管理的函数，如定时器的回调、ajax的回调、Promise的回调等等，最好写成箭头函数，这样的this指向才会是vm或组件实例对象。

------

## 1.12 绑定样式

### demo:

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
        .box {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 50px;
            width: 200px;
            height: 200px;
            box-shadow: 0px 0px 20px black;
            cursor: pointer;
            background: s;
        }

        .background {
            background-color: palegreen;
        }

        .fontSize {
            font-size: 30px;
        }

        .color {
            color: tomato;
        }

        .borderRadius {
            border-radius: 50%;
        }
    </style>
</head>

<body>
    <!--! 容器 -->
    <div id="root">
        <!--? 绑定class样式 -->
        <!-- 字符串写法：适用于样式的类目不确定 -->
        <div class="box" :class="oneClass" @click="handleChangeClass">{{name}}</div>
        <!-- 数组写法：适用于样式的个数不确定，名字也不确定 -->
        <div class="box" :class="classArr">{{name}}</div>
        <!-- 对象写法：适用于要绑定的样式个数确定，名字也确定 -->
        <div class="box" :class="classObj">{{name}}</div>
        <!--? 绑定style样式 -->
        <!-- 对象写法 -->
        <div class="box" :style="styleObj">{{name}}</div>
        <!-- 数组写法 -->
        <div class="box" :style="styleArr">{{name}}</div>
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
            oneClass: '',
            classArr: ['background', 'fontSize', 'color', 'borderRadius'],
            classObj: {
                'background': true,
                'fontSize': true,
                'color': false,
                'borderRadius': false
            },
            styleObj: {
                fontSize: '50px',
                color: 'navy'
            },
            styleArr: [{
                fontSize: '50px',
                color: 'navy'
            }, {
                backgroundColor: 'seagreen',
                borderRadius: '30px'
            }]
        },
        methods: {
            handleChangeClass() {
                const classList = ['background', 'fontSize', 'color', 'borderRadius']
                const index = Math.floor(Math.random() * 3) + 1
                this.oneClass = classList[index]
            }
        }
    })
</script>

</html>
```

### summary：

1. class样式

   ​		写法 ：: class = " xxx "，xxx可以为字符串、对象、数组。

   ​				字符串写法适用于：类名不确定，需动态获取。

   ​				对象写法适用于：要绑定多个样式，个数不确定，名字也不确定。

   ​				数组写法适用于：要绑定多个样式，个数确定，但不确定用不用。

2. style样式

   ​		: style = " { fontSize : xxx } "，其中xxx为动态值。

   ​		: style = " [ a, b ] "，其中a、b为样式对象。

------

## 1.13 条件渲染

### demo：

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
            margin: 20px;
        }

        .box {
            display: flex;
        }
    </style>
</head>

<body>
    <!--! 容器 -->
    <div id="root">
        <!--? 使用v-show做条件渲染 -->
        <!-- dom节点一直存在，转换频率高使用v-show -->
        <h1 v-show="true">hello {{name}},{{age+1}}</h1>
        <!--? 使用v-if做条件渲染 -->
        <!-- dom节点不存在，转换频率低使用v-if -->
        <h1 v-if="true">hello {{name}},{{age+1}}</h1>

        <div class="box">
            <button @click="n++">点击n++，n={{n}}</button>
            <div v-show="n===1">Angular</div>
            <div v-show="n===2">React</div>
            <div v-show="n===3">Vue</div>
        </div>

        <div class="box">
            <button @click="m++">点击m++，m={{m}}</button>
            <div v-if="m===1">Angular</div>
            <div v-else-if="m===2">React</div>
            <div v-else>Vue</div>
        </div>

        <!--? v-if与template的配合使用 -->
        <template v-if="m===n">
            <h2>hello {{name}}，{{age}}</h2>
        </template>

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
            n: 0,
            m: 0
        }
    })
</script>

</html>
```

### summary：

1. v-if：

   ​		写法：v-if = " 表达式 "

   ​				  v-else-if = " 表达式 "

   ​				  v-else

   ​		适用于：切换频率较低的场景。

   ​		特点：不展示的dom元素直接被移除。

   ​		tips：v-if 可以和 v-else-if 、v-else 一起使用，但要求结构不能被“打断”。

2. v-show：

   ​		写法：v-show = " 表达式 "

   ​		适用于：切换频率较高的场景。

   ​		特点：不展示的dom元素不会被移除，仅仅是样式被隐藏。

3. tips：使用 v-if 时，dom可能无法被获取，但使用 v-show 一定可以获取到。

------

## 1.14 列表渲染

### 1.14.1 基本列表

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
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        ul {
            display: flex;
            flex-direction: column;
            list-style: none;
            margin-top: 20px;
            width: 200px;
            background-color: brown;
        }

        li {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 10px;
            height: 50px;
            color: aqua;
            background-color: navy;
        }
    </style>
</head>

<body>
    <!--! 容器 -->
    <div id="root">
        <!--? 遍历数组 -->
        <ul>
            <li v-for="p in person" :key="p.id">
                hello {{p.name}}，{{p.age}}
            </li>
        </ul>

        <ul>
            <li v-for="(p,index) in person" :key="index">
                hello {{p.name}}，{{p.age}}
            </li>
        </ul>
        <hr>

        <!--? 遍历对象 -->
        <ul>
            <li v-for="(val,k) in yahoo" :key="k">
                k：{{k}}<br />
                val：{{val}}
            </li>
        </ul>
        <hr>

        <!--? 遍历字符串 -->
        <ul>
            <li v-for="(char,index) in yahoo.name" :key="index">
                char：{{char}}<br />
                index：{{index}}
            </li>
        </ul>
        <hr>

        <!--? 遍历指定次数 -->
        <ul>
            <li v-for="number,index of 5" :key="index">
                number：{{number}}<br />
                index：{{index}}
            </li>
        </ul>

    </div>
</body>

<script>
    // 以阻止 vue 在启动时生成生产提示。
    Vue.config.productionTip = false

    // 创建vue实例
    new Vue({
        el: '#root', // el用于指定当前vue实例为哪个容器服务，值通常为css选择器字符串。
        data: { // data中用于存储数据，用于el指定的容器使用。
            person: [{
                id: 001,
                name: '张三',
                age: 3,
            }, {
                id: 002,
                name: '李四',
                age: 4,
            }, {
                id: 003,
                name: '王老五',
                age: 5,
            }],
            yahoo: {
                name: 'yahoo',
                age: 23
            },
        }
    })
</script>

</html>
```

#### summary：

1. v-for 用于展示列表数据。
2. 语法：v-for = " ( item, index ) in xxx "  :key = " yyy "。
3. 可以遍历数组、对象、字符串、指定次数。

### 1.14.2 key的作用及原理

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
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        ul {
            display: flex;
            flex-direction: column;
            list-style: none;
            margin-top: 20px;
            width: 200px;
            background-color: brown;
        }

        li {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 10px;
            height: 50px;
            color: aqua;
            background-color: navy;
        }
    </style>
</head>

<body>
    <!--! 容器 -->
    <div id="root">
        <button @click.once="add">添加一个赵六</button>
        <ul>
            <li v-for="(p,index) in person" :key="index">
                <p>hello {{p.name}}，{{p.age}}</p>
                <input type="text">
            </li>
        </ul>
        <ul>
            <li v-for="(p,index) in person" :key="p.id">
                <p>hello {{p.name}}，{{p.age}}</p>
                <input type="text">
            </li>
        </ul>
    </div>
</body>

<script>
    // 以阻止 vue 在启动时生成生产提示。
    Vue.config.productionTip = false

    // 创建vue实例
    new Vue({
        el: '#root', // el用于指定当前vue实例为哪个容器服务，值通常为css选择器字符串。
        data: { // data中用于存储数据，用于el指定的容器使用。
            person: [{
                id: 001,
                name: '张三',
                age: 3
            }, {
                id: 002,
                name: '李四',
                age: 4
            }, {
                id: 003,
                name: '王老五',
                age: 5
            }]
        },
        methods: {
            add() {
                const newPerson = {
                    id: 004,
                    name: '赵六',
                    age: 6
                }
                this.person.unshift(newPerson)
            }
        }
    })
</script>

</html>
```

#### 当key为index时：

tips：若不写key，Vue默认index为key。

![](http://cdn.jsdelivr.net/gh/leslieXin92/picGo/img/202202202334112.png)

#### 当key为id时：

![](http://cdn.jsdelivr.net/gh/leslieXin92/picGo/img/202202202335791.png)

#### summary：

1. 虚拟dom中key的作用：

   ​		key是虚拟dom对象的标识，当状态中的数据发生变化时，Vue会根据【新数据】去生成【新虚拟dom】，随后Vue进行【新虚拟dom】和【旧虚拟dom】的diff差异比较。

2. 对比原则：

   ​		(1). 旧虚拟dom中找到了与新虚拟dom相同的key：

   ​				a. 若虚拟dom中内容没变，则直接使用之前的真实dom；

   ​				b. 若虚拟dom中内容变了，则生成新的真实dom，随后替换掉页面中之前的真实dom。

   ​		(2). 旧虚拟dom中未找到与新虚拟dom相同的key：

   ​				创建新的真实dom，随后渲染到页面上。

3. 用index作为key可能会引发的问题：

   ​		a. 若对数据进行逆序添加、逆序删除等破坏顺序的操作，会产生没有必要的真实dom更新，虽界面效果没有问题，但效率低。

   ​		b. 如果结构中还包含了输入类的dom，会产生错误dom更新，界面会出现问题。

4. 开发中如何选择key：

   ​		a. 最好使用每条数据的唯一标识作为key，比如id、手机号、身份证号、学号等唯一值。

   ​		b. 如果不存在对数据的逆序添加、逆序删除等破坏顺序的操作，仅用于渲染列表和展示，可以使用index来作为key。

### 1.14.3 列表过滤

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
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        input {
            margin: 20px;
            margin-bottom: 0;
            outline: 2px solid brown;
        }

        ul {
            display: flex;
            flex-direction: column;
            list-style: none;
            margin-top: 20px;
            width: 200px;
            background-color: brown;
        }

        li {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 10px;
            height: 50px;
            color: aqua;
            background-color: navy;
        }
    </style>
</head>

<body>
    <!--! 容器1 -->
    <div id="root1">
        <input type="text" v-model="keyWord" placeholder="输入人名开始搜索">
        <ul>
            <li v-for="(p,index) in filterPerson" :key="p.id">
                {{p.name}}-{{p.age}}-{{p.sex}}
            </li>
        </ul>
    </div>
    <!--! 容器2 -->
    <div id="root2">
        <input type="text" v-model="keyWord" placeholder="输入人名开始搜索">
        <ul>
            <li v-for="(p,index) in filterPerson" :key="p.id">
                {{p.name}}-{{p.age}}-{{p.sex}}
            </li>
        </ul>
    </div>
</body>

<script>
    // 以阻止 vue 在启动时生成生产提示。
    Vue.config.productionTip = false

    // watch实现模糊搜索
    new Vue({
        el: '#root1', // el用于指定当前vue实例为哪个容器服务，值通常为css选择器字符串。
        data: { // data中用于存储数据，用于el指定的容器使用。
            keyWord: '',
            person: [{
                id: 001,
                name: '马冬梅',
                age: 40,
                sex: '女'
            }, {
                id: 002,
                name: '周冬雨',
                age: 30,
                sex: '女'
            }, {
                id: 003,
                name: '周杰伦',
                age: 43,
                sex: '男'
            }, {
                id: 004,
                name: '温兆伦',
                age: 58,
                sex: '男'
            }],
            filterPerson: []
        },
        watch: {
            keyWord: {
                immediate: true,
                handler(newVal) {
                    this.filterPerson = this.person.filter(p => p.name.indexOf(newVal) != -1)
                }
            }
        }
    })

    // computed实现模糊搜索
    new Vue({
        el: '#root2', // el用于指定当前vue实例为哪个容器服务，值通常为css选择器字符串。
        data: { // data中用于存储数据，用于el指定的容器使用。
            keyWord: '',
            person: [{
                id: 001,
                name: '马冬梅',
                age: 40,
                sex: '女'
            }, {
                id: 002,
                name: '周冬雨',
                age: 30,
                sex: '女'
            }, {
                id: 003,
                name: '周杰伦',
                age: 43,
                sex: '男'
            }, {
                id: 004,
                name: '温兆伦',
                age: 58,
                sex: '男'
            }],
        },
        computed: {
            filterPerson() {
                return this.person.filter(p => p.name.indexOf(this.keyWord) != -1)
            }
        }
    })
</script>

</html>
```

### 1.14.4 列表排序

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
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        input {
            margin: 20px;
            margin-bottom: 0;
            outline: 2px solid brown;
        }

        ul {
            display: flex;
            flex-direction: column;
            list-style: none;
            margin-top: 20px;
            width: 200px;
            background-color: brown;
        }

        li {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 10px;
            height: 50px;
            color: aqua;
            background-color: navy;
        }
    </style>
</head>

<body>
    <!--! 容器 -->
    <div id="root">
        <input type="text" v-model="keyWord" placeholder="输入人名开始搜索">
        <button @click="sortType=0">原顺序</button>
        <button @click="sortType=1">年龄降序</button>
        <button @click="sortType=2">年龄升序</button>
        <ul>
            <li v-for="(p,index) in filterPerson" :key="p.id">
                {{p.name}}-{{p.age}}-{{p.sex}}
            </li>
        </ul>
    </div>
</body>

<script>
    // 以阻止 vue 在启动时生成生产提示。
    Vue.config.productionTip = false

    new Vue({
        el: '#root', // el用于指定当前vue实例为哪个容器服务，值通常为css选择器字符串。
        data: { // data中用于存储数据，用于el指定的容器使用。
            keyWord: '',
            sortType: 0, // 0原顺序，1降序，2升序
            person: [{
                id: 001,
                name: '马冬梅',
                age: 40,
                sex: '女'
            }, {
                id: 002,
                name: '周冬雨',
                age: 30,
                sex: '女'
            }, {
                id: 003,
                name: '周杰伦',
                age: 43,
                sex: '男'
            }, {
                id: 004,
                name: '温兆伦',
                age: 58,
                sex: '男'
            }],
        },
        computed: {
            filterPerson() {
                const temp = this.person.filter(p => p.name.indexOf(this.keyWord) != -1)
                if (this.sortType != 0) {
                    temp.sort((a, b) => {
                        return this.sortType === 1 ? b.age - a.age : a.age - b.age
                    })
                }
                return temp
            }
        }
    })
</script>

</html>
```

### 1.14.5 Vue的数据监测

#### 模拟Vue数据监视：

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
    <script>
        let data = {
            name: 'yahoo',
            age: 23
        }

        // 创建一个监视的实例对象，用于监视data中属性的变化
        const dataObs = new Observer(data)

        // 准备一个实例对象
        let vm = {}
        vm._data = data = dataObs

        function Observer(obj) {
            // 汇总对象中所有属性的key，形成一个数组
            const keys = Object.keys(obj)
            // 遍历
            keys.forEach(k => {
                Object.defineProperty(this, k, {
                    get() {
                        console.log(`${k}被读取了`);
                        return obj[k]
                    },
                    set(newVal) {
                        console.log(`${k}被修改成了${newVal}`);
                        obj[k] = newVal
                    }
                })
            })
        }
    </script>
</body>

</html>
```

shortcoming：只能监视一层，无法监视多级结构。

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
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .box {
            width: 300px;
            height: auto;
            margin: 20px;
            background-color: aquamarine;
        }

        ul {
            list-style: none;
        }

        li {
            margin: 10px 0;
            height: 30px;
            line-height: 30px;
            text-align: center;
            background-color: tomato;
        }
    </style>
</head>

<body>
    <!--! 容器 -->
    <div id="root">
        <h2>name：{{people.name}}</h2>
        <!--? age -->
        <div class="box">
            <button @click="addAge">addAge</button>
            <h2>age：{{people.age}}</h2>
        </div>
        <!--? sex -->
        <div class="box">
            <button @click="addSex">addSex</button>
            <h2 v-if="people.sex">sex：{{people.sex}}</h2>
        </div>
        <!--? hobbies -->
        <div class="box">
            <button @click="addHobby">addHobby</button>
            <button @click="editFirstHobby">editFirstHobby</button>
            <h2>hobbies：</h2>
            <ul>
                <li v-for="(hobby,index) in people.hobbies" :key="index">
                    hobby{{index+1}}：{{hobby}}
                </li>
            </ul>
        </div>
        <!--? friends -->
        <div class="box">
            <button @click="addFriendInFront">addFriendInFront</button>
            <button @click="editFirstFriend">editFirstFriend</button>
            <h2>friends</h2>
            <ul>
                <li v-for="(friend,index) in people.friends" :key="index">
                    friend{{index+1}}：{{friend.name}} -- {{friend.age}}
                </li>
            </ul>
        </div>
    </div>
</body>

<script>
    // 以阻止 vue 在启动时生成生产提示。
    Vue.config.productionTip = false

    // 创建vue实例
    const vm = new Vue({
        el: '#root',
        data: {
            people: {
                name: 'yahoo',
                age: 23,
                hobbies: ['抽烟', '喝酒', '烫头'],
                friends: [{
                    name: 'BonZi',
                    age: 23
                }, {
                    name: 'Rose',
                    age: 24
                }]
            }
        },
        methods: {
            addAge() {
                this.people.age++
            },
            addSex() {
                // 方法一：
                this.$set(this.people, 'sex', 'boy')
                // 方法二：
                Vue.set(this.people, 'sex', 'boy')
            },
            addHobby() {
                this.people.hobbies.push('skate')
            },
            editFirstHobby() {
                // 方法一：
                this.people.hobbies.splice(0, 1, '滑板')
                // 方法二：
                this.$set(this.people.hobbies, 0, '滑板')
                // 方法三：
                Vue.set(this.people.hobbies, 0, '滑板')
            },
            addFriendInFront() {
                const cabbage = {
                    name: 'cabbage',
                    age: 22
                }
                this.people.friends.unshift(cabbage)
            },
            editFirstFriend() {
                this.people.friends[0].name = 'lover'
            }
        },
    })
</script>

</html>
```

#### summary：

1. Vue会监视data中所有层次的数据。

2. 如何监测对象中的数据：通过setter实现监视，且要在new Vue时就传入要监测的数据。

   ​		a. 对象中后追加的属性，Vue默认不做响应式处理。

   ​		b. 如需给后添加的属性做响应式，则使用：

   ​				Vue.set ( target , propertyName / index , value ) 或

   ​				vm.$set ( target , propertyName / index , value ) 

3. 如何监测数组中的数据：通过包裹数组更新元素的方法实现，本质做了两件事情：

   ​		a. 调用原生对应的方法对数组进行更新。

   ​		b. 重新解析模板，更新页面。

4. 在Vue修改数组中的某个元素一定要用如下方法：

   ​		a. 使用这些Api：push( )、pop( )、shift( )、unshift( )、splice( )、sort( )、reverse( )。

   ​		b. 使用Vue.set( ) 或 vm.$set( )。

5. tips：Vue.set( ) 和 vm.$set( ) 不能给vm或vm的根数据对象添加属性！！！

------

## 1.15 收集表单数据

### demo：

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
        <form @submit.prevent="submit">
            <label for="user"> username： </label>
            <input type="text" id="user" v-model.lazy="info.username">
            <br /><br />

            <label for="psw"> password： </label>
            <input type="password" id="psw" v-model="info.psw">
            <br /><br />

            <label for="age"> age： </label>
            <input type="number" name="age" id="age" v-model.number="info.age">
            <br /><br />

            <label> sex： </label>
            boy <input type="radio" name="sex" v-model="info.sex" value="1">
            girl <input type="radio" name="sex" v-model="info.sex" value="0">
            <br /><br />

            <label> hobbies： </label>
            抽烟 <input type="checkbox" name="hobbies" v-model="info.hobbies" value="0">
            喝酒 <input type="checkbox" name="hobbies" v-model="info.hobbies" value="1">
            烫头 <input type="checkbox" name="hobbies" v-model="info.hobbies" value="2">
            <br /><br />

            <label> select what u learn： </label>
            <select v-model="info.learnSubject">
                <option value=""> select u subject </option>
                <option value="0"> JavaScript </option>
                <option value="1"> TypeScript </option>
                <option value="2"> Vue </option>
                <option value="3"> React </option>
                <option value="4"> node </option>
            </select>
            <br /><br />

            <label> remark： </label>
            <textarea v-model.trim="info.remark"></textarea>
            <br /><br />

            <input type="checkbox" v-model="info.will">
            <label>
                will u
                <a href="https://www.darryring.com/">
                    marry
                </a>
                him？
            </label>
            <br /><br />

            <button> submit </button>
        </form>
    </div>
</body>

<script>
    // 以阻止 vue 在启动时生成生产提示。
    Vue.config.productionTip = false

    // 创建vue实例
    new Vue({
        el: '#root', // el用于指定当前vue实例为哪个容器服务，值通常为css选择器字符串。
        data: { // data中用于存储数据，用于el指定的容器使用。
            info: {
                username: '',
                psw: '',
                age: null,
                sex: null,
                hobbies: [],
                learnSubject: '',
                remark: '',
                will: null
            }
        },
        methods: {
            submit() {
                alert(JSON.stringify(this.info));
            }
        },
    })
</script>

</html>
```

### summary：

1. 若 <input type='text'>，则 v-model 收集的是 value 值，用户输入的就是 value 值。

2. 若<input type='radio'>，则 v-model 收集的是 value 值，且要给标签配置 value 值。

3. 若<input type='chaeckbox'>：

   ​		(1). 没有配置 input 的 value 值，那么收集的就是 checked 状态。

   ​		(2). 配置了 input 的 value 值：

   ​				a. v-model 的初始值是数组，那么收集的就是 value 组成的数组。

   ​				b. v-model 的初始值是非数组，那么收集的就是 checked 状态。

4. v-model 三个修饰符：

   ​		(1). lazy：失去焦点再收集数据。

   ​		(2).number：输入字符串转换为数字。

   ​		(3). trim：删除首位空格。

------

## 1.16 过滤器

### demo：

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
    <!--! 引入day.js -->
    <script src="https://cdn.bootcdn.net/ajax/libs/dayjs/1.10.7/dayjs.min.js"></script>
</head>

<body>
    <!--! 容器 -->
    <div id="root">
        <h2>{{time}}</h2>

        <!--? computed实现 -->
        <h2>{{formatTime}}</h2>

        <!--? methods实现 -->
        <h2>{{getFormatTime()}}</h2>

        <!--? 过滤器实现 -->
        <h2>{{time | timeFilter}}</h2>
        <!-- 过滤器传参 -->
        <h2>{{time | timeFilter('YYYY年MM月DD日')}}</h2>
        <!-- 过滤器串联 -->
        <h2>{{time | timeFilter('YYYY年MM月DD日') | timeFormat}}</h2>
        <!-- 配合v-bind -->
        <input type="text" :xxx="name | timeFormat">
    </div>
</body>

<script>
    // 以阻止 vue 在启动时生成生产提示。
    Vue.config.productionTip = false

    // 注册全局过滤器，必须在new Vue实例之前注册！！！
    Vue.filter('timeFormat', function (val) {
        return val.slice(0, 4)
    })

    // 创建vue实例
    new Vue({
        el: '#root',
        data: {
            name: 'yahoo',
            time: new Date()
        },
        computed: {
            formatTime() {
                return dayjs(this.time).format('YYYY-MM-DD HH:mm:ss')
            }
        },
        methods: {
            getFormatTime() {
                return dayjs(this.time).format('YYYY-MM-DD HH:mm:ss')
            }
        },
        // 局部过滤器
        filters: {
            timeFilter(val, format = 'YYYY-MM-DD HH:mm:ss') {
                return dayjs(val).format(format)
            }
        }
    })
</script>

</html>
```

### summary：

1. 定义：

   ​		对要显示的数据进行特定的格式转换后再显示，适用于一些简单逻辑的处理。

2. 语法：

   ​		(1). 注册过滤器：Vue.filter( name, callback ) 或 new Vue( filters: { } )。

   ​		(2). 使用过滤器：{{ xxx | filterName }} 或 v-bind:attribute = ' xxx | filterName '

3. tips：

   ​		(1). 过滤器也可以接受额外参数，多个过滤器可以串联。

   ​		(2). 并没有改变原本的数据，是产生新的对应的数据。

------

## 1.17 内部指令

### 1.17.1 v-text指令

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
        <h2>{{name}}</h2>
        <div v-text="age"></div>
        <h2>{{msg}}</h2>
        <div v-text="msg">massage</div>
    </div>
</body>

<script>
    // 以阻止 vue 在启动时生成生产提示。
    Vue.config.productionTip = false

    // 创建vue实例
    new Vue({
        el: '#root',
        data: {
            name: 'yahoo',
            age: 23,
            msg: '<a> hello </a>'
        }
    })
</script>

</html>
```

#### summary：

1. 作用：向其所在的节点中渲染文本内容。
2. 与插值语法的区别：v-text 会替换掉节点的内容，插值语法不会。

### 1.17.2 v-html指令

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
        <div v-text="msg"></div>
        <h2>{{msg}}</h2>
        <div v-html="msg">massage</div>
    </div>
</body>

<script>
    // 以阻止 vue 在启动时生成生产提示。
    Vue.config.productionTip = false

    // 创建vue实例
    new Vue({
        el: '#root',
        data: {
            name: 'yahoo',
            age: 23,
            msg: '<a href="http://www.baidu.com"> hello </a>'
        }
    })
</script>

</html>
```

#### summary：

1. 作用：向指定节点中渲染包含 html 结构的内容。

2. 与插值语法区别：

   ​		(1) v-html 会替换掉节点中所有的内容，插值语法不会。

   ​		(2) v-html 可以识别 html 结构。

3. 严重注意：v-html有安全性问题！！！

   ​		(1) 在网站上动态渲染任意 html 是非常危险的，容易导致XSS攻击。

   ​		(2) 一定要在可信的内容上使用 v-html，永远不要用在用户提交的内容上。

### 1.17.3 v-clock指令

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
    <style>
        [v-clock] {
            display: none;
        }
    </style>
</head>

<body>
    <!--! 容器 -->
    <div id="root">
        <h1 v-clock>hello {{name}},{{age+1}}</h1>
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

1. 本质是一个特殊属性，没有值，Vue实例创建完毕并接管容器后，会删掉v-clock属性。
2. 使用css配合v-clock可以解决网速慢时页面展示出" {{name}} "的问题。

### 1.17.4 v-once指令

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
        <h1 v-once>init：{{age}}</h1>
        <h1>current：{{age}}</h1>
        <button @click="age++">age++</button>
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

1. v-once所在节点在初次动态渲染后，就被视为静态内容了。
2. 以后数据的改变不会引起v-once所在结构的更新，可以用于优化性能。

### 1.17.5 v-pre指令

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
        <h1 v-pre>yahoo</h1>
        <h1 v-pre>current：{{age}}</h1>
        <button v-pre @click="age++">age++</button>
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

1. 跳过其所在的节点的编译过程。
2. 可利用他跳过没有使用指令语法、没有使用插值语法的节点，加快编译速度。

------

## 1.18 自定义指令

### demo：

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
    <!--! 容器1 -->
    <div id="root1">
        <h1>hello {{name}}</h1>
        <div>
            <h1>age：{{age}}</h1>
            <h1 v-big="age">age*10：</h1>
        </div>
        <div>
            <button @click="age++">age++</button>
            <input type="text" v-focus-bind:value="age">
        </div>
    </div>
    <!--! 容器2 -->
    <div id="root2">
        <button @click="ChineseAge++">ChineseAge++</button>
        <input type="text" v-focus-bind:value="ChineseAge">
    </div>
</body>

<script>
    // 以阻止 vue 在启动时生成生产提示。
    Vue.config.productionTip = false

    // 注册全局自定义指令
    Vue.directive('focus-bind', {
        // 指令与元素成功绑定时
        bind(element, binding) {
            // console.log('bind', element, binding)
            element.value = binding.value * 10
        },
        // 指令所在元素被插入页面时
        inserted(element, binding) {
            console.log('inserted')
            element.focus()
        },
        // 指令所在的模板被重新解析时
        update(element, binding) {
            console.log('update')
            element.value = binding.value * 10
        }
    })

    // 实例一
    new Vue({
        el: '#root1',
        data: {
            name: 'yahoo',
            age: 23
        },
        directives: {
            // 1.指令与元素成功绑定时调用big函数   
            // 2.指令所在的模板被重新解析时调用big函数
            big(element, binding) {
                element.innerText = binding.value * 10
            },
        }
    })

    // 实例二
    new Vue({
        el: '#root2',
        data: {
            ChineseAge: 24
        },
    })
</script>

</html>
```

### summary：

1. 定义语法：

   ​		(1) 局部指令：directives: { name: obj } 或 directives( ){ }。

   ​		(2) 全局指令：Vue.directive( name, obj / function )。

2. 配置对象中常用的三个回调：

   ​		(1) bind：指令与元素成功绑定时调用。

   ​		(2) inserted：指令所在元素被插入页面时调用。

   ​		(3) update：指令所在模板结构被重新解析时调用。

3. tips：

   ​		(1) 指令定义时不加 " v- "，但使用时要加。

   ​		(2) 指令名如果是多个单词，要使用kakab-case方式，不要用camelCase命名。

------

## 1.19 生命周期

### demo：

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
        <h1 :style="{opacity}">hello {{name}},{{age+1}}</h1>
        <button @click="addAge">age++</button>
        <button @click="stop">stopOpacity</button>
    </div>
</body>

<script>
    // 以阻止 vue 在启动时生成生产提示。
    Vue.config.productionTip = false

    // 创建vue实例
    new Vue({
        el: '#root',
        data: {
            name: 'yahoo',
            age: 23,
            opacity: 1
        },
        beforeCreate() {
            console.log('beforeCreate');
        },
        created() {
            console.log('created');
        },
        beforeMount() {
            console.log('beforeMount');
        },
        mounted() {
            console.log('mounted');
            this.timer = setInterval(() => {
                console.log('timer');
                this.opacity -= 0.01
                if (this.opacity <= 0) this.opacity = 1
            }, 16)
        },
        beforeUpdate() {
            console.log('beforeUpdated');
        },
        updated() {
            console.log('updated');
        },
        beforeDestroy() {
            console.log('beforeDestroy');
            clearInterval(this.timer)
        },
        destroyed() {
            console.log('destroyed');
        },
        methods: {
            addAge() {
                this.age++
            },
            stop() {
                this.$destroy()
            }
        },
    })
</script>

</html>
```

### summary：

常用的生命周期钩子：

1. mounted：发生ajax请求、启动定时器、绑定自定义事件、订阅消息等初始化操作。
2. beforeDestroy：清除定时器、解绑自定义事件、取消订阅消息等收尾工作。

关于销毁Vue实例：

1. 销毁后Vue Devtools中看不到任何信息。
2. 销毁后自定义事件会失效，但原生dom事件依然有效。
3. 一般不会在beforeDestroy操作数据，因为即使操作数据，也不会触发更新流程了。

![](http://cdn.jsdelivr.net/gh/leslieXin92/picGo/img/202202272338533.png)



# 二、Vue组件化编程

## 2.1 对组件的理解

### 1. 传统方式编写应用：

![](http://cdn.jsdelivr.net/gh/leslieXin92/picGo/img/202202280056387.png)

### 2. 组件化方式编写应用：

![](http://cdn.jsdelivr.net/gh/leslieXin92/picGo/img/202202280056627.png)

![](http://cdn.jsdelivr.net/gh/leslieXin92/picGo/img/202202280056598.png)

------

## 2.2 非单文件组件

### demo：

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
    <!--! 容器1 -->
    <div id="root1">
        <hellooo></hellooo>
        <hr>
        <school></school>
        <hr>
        <student></student>
    </div>
    <!--! 容器2 -->
    <div id="root2">
        <hellooo></hellooo>
    </div>
</body>

<script>
    // 以阻止 vue 在启动时生成生产提示。
    Vue.config.productionTip = false

    // 第一步：创建school组件
    const school = Vue.extend({
        template: ` 
            <div>
                <h2>shoolName：{{schoolName}}</h2>
                <h2>address：{{schoolAddress}}</h2>
            </div>
        `,
        data() {
            return {
                schoolName: 'SUSE',
                schoolAddress: 'Yibin'
            }
        }
    })

    // 第一步：创建student组件
    const student = Vue.extend({
        template: `
            <div>
                <h2>studentName：{{studentName}}</h2>
                <h2>age：{{studentAge}}</h2>
                <button @click="add">Age++</button>
            </div>
        `,
        data() {
            return {
                studentName: 'yahoo',
                studentAge: 23
            }
        },
        methods: {
            add() {
                this.studentAge++
            }
        },
    })

    // 第一步：创建hello组件
    const hello = Vue.extend({
        template: `
            <h1>{{msg}}</h1>
        `,
        data() {
            return {
                msg: 'hello'
            }
        }
    })

    // 第二步：注册hello组件（全局注册）
    Vue.component('hellooo', hello)

    // 创建vm实例
    new Vue({
        el: '#root1',
        components: { // 第二步：注册组件（局部注册）
            school,
            student
        },
        data: {},
    })
    
    new Vue({
        el: '#root2',
        data: {},
    })
</script>

</html>
```

### summary：

1. Vue中使用组件的三大步骤：

   ​		(1) 定义组件

   ​		(2) 注册组件

   ​		(3) 使用组件

2. 如何定义组件：

   ​		使用Vue.extend(options)创建，其中options和new Vue(options)时传入的那个options几乎一样，但也有点不同。区别如下：

   ​		(1) 不能写el，因为最终所有组件都要经过vm管理，由vm中的el决定服务于哪个容器。

   ​		(2) data必须写成函数，因为避免组件被复用时，数据存在引用关系。

   ​		tips：使用template配置组件结构。

3. 如何注册组件：

   ​		(1) 局部注册：靠new Vue的时候传入components选项。

   ​		(2) 全局注册：靠Vue.component('组件名', 组件)

4. 编写组件标签：

   ​		<school> </school>

------

## 2.3 几个注意事项

### demo：

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
    <!--! 容器1 -->
    <div id="root">
        <!-- 写法一： -->
        <my-school></my-school>
        <my-school />
        <!-- 写法二： -->
        <MySchool></MySchool>
        <MySchool />
    </div>
</body>

<script>
    // 以阻止 vue 在启动时生成生产提示。
    Vue.config.productionTip = false

    const school = Vue.extend({
        name: 'collage',
        template: ` 
            <div>
                <h2>shoolName：{{schoolName}}</h2>
                <h2>address：{{schoolAddress}}</h2>
            </div>
        `,
        data() {
            return {
                schoolName: 'SUSE',
                schoolAddress: 'Yibin'
            }
        }
    })

    // 创建vm实例
    new Vue({
        el: '#root',
        components: {
            'my-school': school, // 写法一
            MySchool: school // 写法二
        },
        data: {},
    })
</script>

</html>
```

### summary：

1. 关于组件名：

   ​		(1) 一个单词组成：

   ​				a. 写法一：首字母小写，school。

   ​				b. 写法二：首字母大写，School。

   ​		(2) 多个单词组成：

   ​				写法一：kebab-case命名，my-school。

   ​				写法二：CamelCase命名，MySchool，但需在脚手架环境。

   ​		(3) tips：

   ​				a. 组件名尽可能回避 html 中已有的元素名称，如 h2、H2。

   ​				b. 可以使用name配置项指定组件在Vue Devtools中呈现的名字。

2. 关于组件标签：

   ​		(1) 写法一：<school> </school>

   ​		(2) 写法二：<school/>，在非脚手架环境中，多个<school/>会导致后续组件不能被渲染。

3. 创建组建的简写方式：

   ​		const school = Vue.extend(options) 可简写为 const school = options

------

## 2.4 组建的嵌套

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
        <app> </app>
    </div>
</body>

<script>
    // 以阻止 vue 在启动时生成生产提示。
    Vue.config.productionTip = false

    // 定义student组件
    const student = Vue.extend({
        template: `
            <div>
                <h2>studentName：{{studentName}}</h2>
                <h2>age：{{studentAge}}</h2>
                <button @click="add">Age++</button>
            </div>
        `,
        data() {
            return {
                studentName: 'yahoo',
                studentAge: 23
            }
        },
        methods: {
            add() {
                this.studentAge++
            }
        },
    })

    // 定义school组件
    const school = {
        components: {
            student
        },
        template: ` 
            <div>
                <h2>shoolName：{{schoolName}}</h2>
                <h2>address：{{schoolAddress}}</h2>
                <student></student>
            </div>
        `,
        data() {
            return {
                schoolName: 'SUSE',
                schoolAddress: 'Yibin'
            }
        }
    }

    // 定义hello组件
    const hello = {
        template: `
            <h1>{{msg}}</h1>
        `,
        data() {
            return {
                msg: 'hello'
            }
        }
    }

    // 定义app组件
    const app = {
        components: {
            hello,
            school
        },
        template: `
            <div>
                <hello></hello>
                <school></school>
            </div>
        `
    }

    // 创建vm实例
    new Vue({
        el: '#root',
        components: {
            app
        },
    })
</script>

</html>
```

------

## 2.5 VueComponent

### demo：

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
        <hello> </hello>
        <people> </people>
    </div>
</body>

<script>
    // 以阻止 vue 在启动时生成生产提示。
    Vue.config.productionTip = false

    // 定义people组件
    const people = {
        template: ` 
            <div>
                <h2>name：{{name}}</h2>
                <h2>age：{{age}}</h2>
            </div>
        `,
        data() {
            return {
                name: 'yahoo',
                age: 23
            }
        }
    }

    // 定义hello组件
    const hello = {
        template: `
            <h2>{{msg}}</h2>
        `,
        data() {
            return {
                msg: 'hello'
            }
        }
    }

    // 创建vm实例
    new Vue({
        el: '#root',
        components: {
            people,
            hello
        },
    })

    console.log('people', people)
    console.log('hello', hello)
</script>

</html>
```

### summary：

1. people组件本质是一个名为VueComponent的构造函数，且不是程序员定义的，是Vue.extend生成的。

2. 我们只需要写<people />或<people> </people>，Vue解析时会帮我们创建people组件的实例对象。

3. 每次调用Vue.extend时，返回的都是一个全新的VueComponent！！！

4. 关于this指向：

   ​		(1) 组件配置中，methods、watch、computed中函数的this都是VueComponent实例对象。

   ​		(2) new Vue(options)配置中，methods、watch、computed中函数的this都是Vue实例对象。

5. VueComponent的实例对象也叫组件实例对象，简称VC，Vue的实例对象简称Vm。

------

## 2.6 一个重要的内置关系

### demo：

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
        <people> </people>
    </div>
</body>

<script>
    // 以阻止 vue 在启动时生成生产提示。
    Vue.config.productionTip = false

    // 追加Vue身上的x属性
    Vue.prototype.x = 'xxx'

    // 创建people组件
    const people = {
        template: `
            <div>
                <h2>name：{{name}}</h2>
                <h2>age：{{age}}</h2>
                <button @click="showX"> showX </button>
            </div>
        `,
        data() {
            return {
                name: 'yahoo',
                age: 23
            }
        },
        methods: {
            showX() {
                alert(this.x)
            }
        },
    }

    // 创建vue实例
    new Vue({
        el: '#root',
        components: {
            people
        },
        data: {}
    })

    // 创建一个构造函数
    function Demo() {
        this.a = 1
        this.b = 2
    }
    // 创建demo的实例对象
    const newDemo = new Demo()

    console.log('Demo.prototype', Demo.prototype) // 显式原型属性
    console.log('newDemo.__proto__', newDemo.__proto__) // 隐式原型属性
    Demo.prototype.x = 100
    console.log(newDemo.__proto__.x, newDemo.x)
</script>

</html>
```

### summary：

1. VueComponent.prototype.__proto__ === Vue.prototype

2. 为什么要有这个关系？为了让组件实例对象Vc可以访问到Vue原型上的属性、方法。

3. Vue与VueComponent的关系：

   ![](http://cdn.jsdelivr.net/gh/leslieXin92/picGo/img/202203010138985.png)

------

## 2.7 单文件组件

### 1. index.html：

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
    <div id="root">
        <App> </App>
    </div>
</body>

</html>
```

### 2. main.js：

```javascript
import App from './App'

new Vue({
    el: '#root',
    components: {
        App
    }
})
```

### 3. App.vue：

```vue
<template>
    <div>
        <School />
        <Student />
    </div>
</template>

<script>
import School from './School'
import Student from './Student'

export default {
    name: 'App',
    components: {
        School,
        Student
    }

}
</script>

<style>
</style>
```

### 4. School.vue：

```vue
<template>
    <div>
        <h2>school：{{ schoolName }}</h2>
        <h2>address：{{ address }}</h2>
    </div>
</template>

<script>
export default {
    name: 'School',
    data () {
        return {
            schoolName: 'SUSE',
            address: 'Yibin'
        }
    }
}
</script>

<style>
</style>
```

### 5. Student.vue：

```vue
<template>
    <div class="box">
        <h1>name：{{ name }}</h1>
        <h1>age：{{ age }}</h1>
        <button @click="addAge">age++</button>
    </div>
</template>

<script>
export default {
    name: 'Student',
    data () {
        return {
            name: 'yahoo',
            age: 23
        }
    },
    methods: {
        addAge () {
            this.age++
        }
    },
}
</script>

<style>
.box {
    background-color: aquamarine;
}
</style>
```



# 三、Vue-cli

## 3.1 创建脚手架文件

第一步（仅第一次）：全局安装@Vue/CLI。

```bash
npm install -g @vue/cli
```

第二步：进入创建项目的目录，使用命令创建项目。

```bash
vue create <your project name>
```

第三步：启动项目。

```bash
npm run serve
```

tips：

1. 若出现下载缓慢，请配置npm淘宝镜像。

   ```bash
   npm config set registry https://registry.npm.taobao.org
   ```

2. Vue-cli 隐藏了所有webpack相关的配置，若想查看具体的webpack配置，执行下行命令。

   ```bash
   vue inspect > output.js
   ```

3. 查看Vue-cli版本。

   ```bash
   vue -V
   ```

------

## 3.2 Vue-cli项目目录

![](http://cdn.jsdelivr.net/gh/leslieXin92/picGo/img/202203012245366.png)

------

## 3.3 render函数

在非脚手架环境中，创建Vue实例的代码为：

```javascript
new Vue({
    el: '#app',
    components: {
        App
    },
    template: `
		<App> </App>
	`
})
```

在脚手架环境中，main.js函数里创建Vue实例的代码：

```javascript
new Vue({
    el: '#app',
    // 将App组件放入容器中
    render: h => h(App),
})
```

若在脚手架环境中，使用非脚手架环境的创建方法，会报错。

```markdown
	[Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
(found in <Root>)
```

### 报错原因：

main.js中使用< import Vue from 'vue' >引入的Vue，是阉割版本的Vue，具体版本为node_modules / vue / package.json 中 "module"对应的版本文件。阉割了模板解析器，无法解析template模板。

### 为什么使用阉割版本的Vue：

在开发环境中，需要解析template模板，但最终由webpack打包后，已将vue文件转换成html、css、js文件，不需要再使用template解析器。为了使打包后的项目文件更小。

### 解决方法：

1. 引入完整版vue。完整版在 node_modules / vue / dist / vue.js。

2. 使用render函数。

   ```javascript
   render(createElement){
       console.log(typeof createElement) // function
       return createElement('h1','hello')
   }
   
   // 可简写为：
   render:createElement => createElement('h1','hello')
   
   // 脚手架环境中：
   render:h => h(App)
   ```

### summary：

1. vue.js与vue.runtime.xxx.js的区别：

   ​		(1) vue.js是完整版的Vue，包含核心功能+模板解析器。

   ​		(2) vue.runtime.xxx.js是运行时的Vue，只包含核心功能，没有模板解析器。

2. 因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数接收到的createElement函数去指定具体内容。

------

## 3.4 修改默认配置

Vue-cli 隐藏了所有webpack相关的配置，若想查看具体的webpack配置，执行下行命令。

```bash
vue inspect > output.js
```

若想自定义个性化配置，参考https://cli.vuejs.org/zh/config/ 。



# 四、Vue进阶

## 4.1 ref属性

### demo：

```vue
<template>
    <div ref="box">
        <h1 ref="hello">{{ msg }}</h1>
        <button @click="showDOM" ref="btn">show dom</button>
        <School ref="school" id="school" />
        <Student />
    </div>
</template>

<script>
import School from './components/School'
import Student from './components/Student'

export default {
    name: 'App',
    components: {
        School,
        Student
    },
    data () {
        return {
            msg: 'hello'
        }
    },
    methods: {
        showDOM () {
            console.log(this.$refs.hello) // h1真实dom元素
            console.log(this.$refs.btn) // 按钮真实dom元素
            console.log(this.$refs.school) // school组件的实例对象(Vc)
            console.log(document.querySelector('#school')) // school组件的真实dom元素
            console.log(this.$refs.box) // div真实dom
        }
    },

}
</script>

<style>
</style>
```

### summary：

1. 被用来给元素或子组件注册引用信息( id的替代者 )。

2. 应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象(Vc)。

3. 使用方式：

   ​		打标识：<h1 ref="xxx"> hello </h1>

   ​		获取：this.$refs.xxx

------

## 4.2 props属性

### demo：

父组件：

```vue
<template>
    <div>
        <Student name="yahoo" sex="boy" :age="23" />
        <Student name="cabbage" sex="girl" :age="22" />
        <Student name="leslie" />
    </div>
</template>

<script>
import Student from './components/Student'

export default {
    name: 'App',
    components: {
        Student
    },
    data () {
        return {
            msg: 'hello'
        }
    },
}
</script>

<style>
</style>
```

子组件：

```vue
<template>
    <div class="student">
        <h2>name：{{ name }}</h2>
        <h2>sex：{{ sex }}</h2>
        <h2>age：{{ myAge }}</h2>
        <button @click="addAge">age++</button>
    </div>
</template>

<script>
export default {
    name: 'Student',
    data () {
        return {
            myAge: this.age
        }
    },
    methods: {
        addAge () {
            this.myAge++
        }
    },
    // 方法一：简单声明接收
    props: ['name', 'age', 'sex'],

    // 方法二：接收数据 + 限制数据类型
    props: {
        name: String,
        age: Number,
        sex: String
    },

    // 方法三：接收数据 + 限制数据类型 + 必传限制 + 默认值
    props: {
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
        },
        sex: {
            type: String,
            default: 'unknown'
        }
    }
}
</script>

<style>
.student {
    background-color: aquamarine;
}
</style>
```

### summary：

1. 功能：让组件接收外部传进来的数据。

2. 写法：

   ​	(1) 父组件传递数据：<Student name="yahoo" :age="23">

   ​	(2) 子组件接收数据：

   ```javascript
   // 方法一：简单声明接收
   props: ['name', 'age'],
   
   // 方法二：接收数据 + 限制数据类型
   props: {
       name: String,
       age: Number
   },
   
   // 方法三：接收数据 + 限制数据类型 + 必传限制 + 设置默认值
   props: {
       name: {
           type: String,
           required: true
       },
       age: {
           type: Number,
           default: 'unknown'
       }
   }
   ```

3. tips：

   ​		props是只读的，Vue底层会监视你对props的修改，如果进行了修改，就会发出警告。若业务需求确实需要修改，可复制props的内容到data里，然后对data中数据进行修改。

------

## 4.3 mixin

### demo：

src / mixin.js ：

```javascript
export const mixin1 = {
    methods: {
        showName () {
            alert(this.name)
        }
    }
}

export const mixin2 = {
    data () {
        return {
            msg: 'hello'
        }
    },
    mounted () {
        console.log(this.msg);
    }
}
```

src / main.js：

```javascript
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
```

School组件：

```vue
<template>
    <div class="school">
        <h2>school：{{ name }}</h2>
        <h2>address：{{ address }}</h2>
        <button @click="showName">show name</button>
    </div>
</template>

<script>
import { mixin1 } from '../mixin'

export default {
    name: 'School',
    data () {
        return {
            name: 'SUSE',
            address: 'Yibin'
        }
    },
    mixins: [mixin1]
}
</script>

<style>
.school {
    background-color: palevioletred;
}
</style>
```

Student组件：

```vue
<template>
    <div class="student">
        <h1>name：{{ name }}</h1>
        <h1>age：{{ age }}</h1>
        <button @click="addAge">age++</button>
        <button @click="showName">show name</button>
    </div>
</template>

<script>
import { mixin1 } from '../mixin'

export default {
    name: 'Student',
    data () {
        return {
            name: 'yahoo',
            age: 23
        }
    },
    methods: {
        addAge () {
            this.age++
        }
    },
    mixins: [mixin1]
}
</script>

<style>
.student {
    background-color: aquamarine;
}
</style>
```

### summary：

1. 功能：可以把多个组件公用的配置提取成一个mixin对象。

2. 使用方式：

   ​		(1) 第一步：定义mixin。

   ​		(2) 第二步：使用mixin。

   ​						a. 全局使用：Vue.mixin( xxx )。

   ​						b. 局部使用：mixins: [ ' xxx ' ]。

------

## 4.4 plugins

### demo：

src / plugins.js：

```javascript
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
```

src / main.js：

```javascript
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

```

​	student组件：

```vue
<template>
    <div class="student">
        <h1>name：{{ name | lenFormat }}</h1>
        <h1>age：{{ age }}</h1>
        <input type="text" v-focus-bind:value="age" />
        <button @click="hello()">hello</button>
    </div>
</template>

<script>
export default {
    name: 'Student',
    data () {
        return {
            name: 'yahoo',
            age: 23
        }
    }
}
</script>

<style>
.student {
    background-color: aquamarine;
}
</style>
```

### summary：

1. 功能：用于增强Vue。
2. 本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者自己传递的参数。

------

## 4.5 scoped样式

1. 作用：让样式局部生效，防止类名相同导致样式冲突。
2. 写法：<style scoped> </style>

------

## 4.6 自定义事件

### demo：

App组件：

```vue
<template>
    <div>
        <!-- 使用props子传父 -->
        <School :showSchoolName="showSchoolName" />
        <!-- 使用自定义事件子传父 -->
        <Student v-on:showStudentName="showStudentName" v-on:showStudentAge="showStudentAge" />
        <Student @showStudentName="showStudentName" @showStudentAge="showStudentAge" />
        <!-- 使用ref子传父 -->
        <Student ref="student" @click.native="show" />
    </div>
</template>

<script>
import School from './components/School'
import Student from './components/Student'

export default {
    name: 'App',
    components: {
        School,
        Student
    },
    mounted () {
        setTimeout(() => {
            this.$refs.student.$on('showStudentName', this.showStudentName)
            this.$refs.student.$on('showStudentAge', this.showStudentAge)
        }, 3000)
    },
    methods: {
        showSchoolName (name) {
            alert(name)
        },
        showStudentName (name) {
            alert(name)
        },
        showStudentAge (age) {
            alert(age)
        },
        show () {
            alert(1)
        }
    }
}
</script>

<style>
</style>
```

School组件：

```vue
<template>
    <div class="school">
        <h2>school：{{ schoolName }}</h2>
        <h2>address：{{ address }}</h2>
        <button @click="sendSchoolName">show school name</button>
    </div>
</template>

<script>
export default {
    name: 'School',
    props: ['showSchoolName'],
    data () {
        return {
            schoolName: 'SUSE',
            address: 'Yibin'
        }
    },
    methods: {
        sendSchoolName () {
            this.showSchoolName(this.schoolName)
        }
    }
}
</script>

<style>
.school {
    background-color: palevioletred;
}
</style>
```

Student组件：

```vue
<template>
    <div class="student">
        <h1>name：{{ name }}</h1>
        <h1>age：{{ age }}</h1>
        <button @click="sendStudentName">show student name</button>
        <button @click="sendStudentAge">show student age</button>
        <button @click="unbindEvent">unbind event</button>
        <button @click="death">destroy</button>
    </div>
</template>

<script>
export default {
    name: 'Student',
    data () {
        return {
            name: 'yahoo',
            age: 23
        }
    },
    methods: {
        sendStudentName () {
            this.$emit('showStudentName', this.name)
        },
        sendStudentAge () {
            this.$emit('showStudentAge', this.age)
        },
        unbindEvent () {
            // 解绑一个自定义事件
            this.$off('showStudentName')
            // 解绑一些自定义事件
            this.$off(['showStudentName', 'showStudentAge'])
            // 解绑所有自定义事件
            this.$off()
        },
        death () {
            // 销毁Student组件，销毁后自定义事件全部不奏效。
            this.$destroy()
        }
    }

}
</script>

<style>
.student {
    background-color: aquamarine;
}
button {
    margin-right: 10px;
}
</style>
```

### summary：

1. 子组件 给 父组件 传值。

2. 使用场景：子给父传值，在父中给子绑定自定义事件，事件回调在父中定义。

3. 绑定自定义事件：

   ```vue
   (1) 方法一：在父组件中
   <Demo v-on:yahu="test" /> 或 <Demo @yahu="test" />
   
   (2) 方法二：在父组件中
   <Demo ref="demo"> 
   	……
   mounted( ) {
   	this.$refs.xxx.$on('yahu',this.test) 
   }
   (3)若想让自定义只触发一次，可以使用once修饰符或$once方法。
   ```

4. 触发自定义事件：this.$emit ( 'yahu', data )。

5. 解绑自定义事件：this.$off ( 'yahu' )。

6. 组件上也可以绑定原生dom事件，需要用native修饰符。

7. tips：

   ```javascript
   通过 this.$refs.xxx.$on('yahu'，callback) 绑定自定义事件时，回调要么匹配在methods中，要么用箭头函数，否则this指向会出问题。
   ```

------

## 4.7 全局事物总线

### demo：

main.js：

```javascript
// 引入Vue
import Vue from 'vue'

// 引入App组件
import App from './App.vue'

// 关闭Vue的生产提示
Vue.config.productionTip = false

// 创建Vue的实例对象
new Vue({
    el: '#app',
    // 将App组件放入容器中
    render: h => h(App),
    beforeCreate () {
        // 安装全局事件总线
        Vue.prototype.$bus = this
    }
})

```

School组件：

```vue
<template>
    <div class="school">
        <h2>school：{{ schoolName }}</h2>
        <h2>address：{{ address }}</h2>
    </div>
</template>

<script>
export default {
    name: 'School',
    data () {
        return {
            schoolName: 'SUSE',
            address: 'Yibin'
        }
    },
    mounted () {
        // 注册自定义事件studentToSchool
        this.$bus.$on('studentToSchool', this.showStudentName)
    },
    beforeDestroy () {
        // 销毁自定义事件studentToSchool
        this.$bus.$off('studentToSchool')
    },
    methods: {
        showStudentName (name) {
            alert(name)
        }
    }
}
</script>

<style>
.school {
    background-color: palevioletred;
}
</style>
```

Student组件：

```vue
<template>
    <div class="student">
        <h1>name：{{ name }}</h1>
        <h1>age：{{ age }}</h1>
        <button @click="sendName">send name to school</button>
    </div>
</template>

<script>
export default {
    name: 'Student',
    data () {
        return {
            name: 'yahoo',
            age: 23
        }
    },
    methods: {
        sendName () {
            // 触发自定义事件studentToSchool
            this.$bus.$emit('studentToSchool', this.name)
        }
    }

}
</script>

<style>
.student {
    background-color: aquamarine;
}
button {
    margin-right: 10px;
}
</style>
```

### summary：

1. 一种组件间通信的方式，适用于任意组件间通信。

2. 安装全局事件总线。详情见demo中的main.js。

3. 使用事件总线：

   ​		(1) 接收数据：A组件接收数据，就在A组件中绑定自定义事件，自定义事件的callback也写在A组件。

   ```javascript
   mounted(){
   	this.$bus.$on('xxx',this.yahu)
   }
   methods:{
       yahu(data){
           ......
       }
   }
   ```

   ​		(2) 提供数据：

   ```javascript
   this.$bus.$on('xxx', data)
   ```

4. 最好在A组件的beforeDestroy钩子中，解绑自定义事件。

   ```javascript
   beforeDestroy () {
       this.$bus.$off('xxx')
   },
   ```

------

## 4.8 消息订阅与发布

### demo：

School组件：

```vue
<template>
    <div class="school">
        <h2>school：{{ schoolName }}</h2>
        <h2>address：{{ address }}</h2>
    </div>
</template>

<script>
// 引入pubsub-js
import pubsub from 'pubsub-js'

export default {
    name: 'School',
    data () {
        return {
            schoolName: 'SUSE',
            address: 'Yibin'
        }
    },
    mounted () {
        // 订阅hello消息
        this.pubId = pubsub.subscribe('hello', this.showStudentName)
    },
    beforeDestroy () {
        // 取消订阅hello消息
        pubsub.unsubscribe(this.pubId)
    },
    methods: {
        showStudentName (msgName, data) {
            alert(`${msgName} ${data}`)
        }
    }
}
</script>

<style>
.school {
    background-color: palevioletred;
}
</style>
```

Student组件：

```vue
<template>
    <div class="student">
        <h1>name：{{ name }}</h1>
        <h1>age：{{ age }}</h1>
        <button @click="sendName">send name to school</button>
    </div>
</template>

<script>
// 引入pubsub-js
import pubsub from 'pubsub-js'

export default {
    name: 'Student',
    data () {
        return {
            name: 'yahoo',
            age: 23
        }
    },
    methods: {
        sendName () {
            // 发布hello消息
            pubsub.publish('hello', this.name)
        }
    }

}
</script>

<style>
.student {
    background-color: aquamarine;
}
button {
    margin-right: 10px;
}
</style>
```

### summary：

1. 组件间通信的方式，适用于任意组件间通信。

2. 不止只有Vue才有，React、Angular都有，它是一种设计模式。

3. 使用步骤：

   ​		(1) 安装pubsub：

   ```bash
   npm i pubsub-js
   ```

   ​		(2) 引入：

   ```javascript
   import pubsub from 'pubsub-js'
   ```

   ​		(3) 接收数据：A组件想要接收数据，就在A组件中订阅消息，订阅的callback写在A组件。

   ```javascript
   mounted(){
       this.pubId = pubsub.subscribe('hello', this.yahu)
   },
   methods:{
       yahu(data){
           ......
       }
   }
   ```

   ​		(4) 提供数据：

   ```javascript
   pubsub.publish('hello',data)
   ```

4. 最好在beforeDestroy钩子中取消订阅：

   ```javascript
   beforeDestroy () {
       pubsub.unsubscribe(this.pubId)
   },
   ```

------

## 4.9 nextTick

1. 语法：

   ```javascript
   this.$nextTick(callback)
   ```

2. 作用：在下一次DOM更新结束后执行callback。

3. 应用场景：当改变数据后，要基于更新后的DOM进行操作时，要在nextTick的回调中执行操作。

------

## 4.10 动画与过渡

### 4.10.1 动画

```vue
<template>
    <div>
        <button @click="handleShow">show/hide</button>
        
        <transition name="hello" appear>
            <h2 v-show="isShow">hello</h2>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'hello',
    data () {
        return {
            isShow: true
        }
    },
    methods: {
        handleShow () {
            this.isShow = !this.isShow
        }
    }
}
</script>

<style>
h2 {
    background-color: paleturquoise;
}

.hello-enter-active {
    animation: yahu 1s ease-in;
}

.hello-leave-active {
    animation: yahu 1s ease-out reverse;
}

@keyframes yahu {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
}
</style>
```

### 4.10.2 过渡

```vue
<template>
    <div>
        <button @click="handleShow">show/hide</button>

        <transition name="hello" appear>
            <h2 v-show="isShow">hello</h2>
        </transition>

        <transition-group name="hello" appear>
            <h2 v-show="isShow" key="1">hello</h2>
            <h2 v-show="isShow" key="2">hello</h2>
        </transition-group>
    </div>
</template>

<script>
export default {
    name: 'hello',
    data () {
        return {
            isShow: true
        }
    },
    methods: {
        handleShow () {
            this.isShow = !this.isShow
        }
    }
}
</script>

<style>
h2 {
    background-color: paleturquoise;
}

/* 进入的起点、离开的重点 */
.hello-enter,
.hello-leave-to {
    transform: translateX(-100%);
}

/* 进入过程、离开过程 */
.hello-enter-active,
.hello-leave-active {
    transition: 0.5s linear;
}

/* 进入的重点、离开的起点 */
.hello-enter-to,
.hello-leave {
    transform: translateX(0);
}
</style>
```

### summary：

1. 作用：在插入、更新或移除DOM元素时，在合适的时候给元素添加样式类名。

2. 图示：![](http://cdn.jsdelivr.net/gh/leslieXin92/picGo/img/202203060455661.png)

3. 类名：

   ​		(1) 元素进入的样式类名：

   ​				a. v-enter：进入的起点。

   ​				b. v-enter-active：进入过程中。

   ​				c. v-enter-to：进入的终点。

   ​		(2) 元素离开的样式类名：

   ​				a. v-leave：离开的起点。

   ​				b. v-leave-active：离开过程中。

   ​				c. v-leave-to：离开的终点。

4. 使用<transition>标签包裹要过渡的元素，并配置name属性。

   ```html
   <transition name="hello" appear>
       <h2 v-show="isShow"> hello </h2>
   </transition>
   ```

5. 若有多个元素要过渡，则需要使用<transition-group>标签包裹，且每个元素都要设置key值。

   ```html
   <transition-group name="hello" appear>
       <h2 v-show="isShow" key="1"> hello </h2>
       <h2 v-show="isShow" key="2"> hello </h2>
   </transition-group>
   ```


------

## 4.11 Vue-cli配置代理

### demo：

vue.config.js：

```javascript
module.exports = {
    // 开启代理服务器：方式一
    devServer: {
        proxy: 'http://localhost:5000'
    },

    // 开启代理服务器：方式二
    devServer: {
        proxy: {
            '/yaHu': { // 请求前缀
                target: 'http://localhost:5000',
                pathRewrite:{'^/yaHu':''}, // 资源服务器接收代理服务器的api中过滤掉前缀
                ws: true, // 用于支持websocket
                changeOrigin: true //用于控制请求头host字段，true改为资源服务器，false改为请求服务器
            },
            '/huoHua': {
                target: 'http://localhost:5001',
                pathRewrite:{'^/huoHua':''},
                ws: true,
                changeOrigin: true
            }
        }
    }
}
```

App组件：

```vue
<template>
    <div>
        <button @click="showMsg(1)">click show msg</button>
        <button @click="showMsg(2)">click show msg</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'App',
    methods: {
        showMsg (type) {
            if (type === 1) {
                axios.get('http://localhost:8080/yaHu/students').then(
                    response => {
                        console.log('请求成功', response.data)
                    },
                    error => {
                        console.log('请求失败', error.message)
                    }
                )
            } else if (type === 2) {
                axios.get('http://localhost:8080/huoHua/cars').then(
                    response => {
                        console.log('请求成功', response.data)
                    },
                    error => {
                        console.log('请求失败', error.message)
                    }
                )
            }
        }
    }
}
</script>

<style>
</style>
```

### summary：

1. 方式一：

   ​		优点：配置简单，请求资源时直接发给前端8080即可。

   ​		缺点：不能配置多个代理，不能灵活控制请求是否走代理。

   ​		工作方式：当请求了前端不存在的资源时，才会请求服务器，优先匹配前端资源。

2. 方式二：

   ​		优点：可以配置多个代理，并且可以灵活控制请求是否走代理。

   ​		缺点：配置略微繁琐，请求时必须加前缀。

------

## 4.12 插槽

### 4.12.1 默认插槽

App组件：

```vue
<template>
    <div class="box">
        <List :list="yahoo">
            <img src="../src/assets/logo.png" />
        </List>

        <List :list="cabbage">
            <ul>
                <li v-for="(item, index) in cabbage" :key="index">{{ item }}</li>
            </ul>
        </List>

        <List :list="leslie">
            <img src="../src/assets/logo.png" />
        </List>
    </div>
</template>

<script>
import List from './components/List'

export default {
    name: 'App',
    components: { List },
    data () {
        return {
            yahoo: { name: 'yahoo', age: 23, sex: 'boy' },
            cabbage: { name: 'cabbage', age: 22, sex: 'girl' },
            leslie: { name: 'leslie', age: 65, sex: 'boy' },
        }
    },
}
</script>

<style>
.box {
    display: flex;
    justify-content: space-around;
    margin-top: 150px;
}
img {
    width: 100%;
}
li {
    margin-top: 30px;
}
</style>
```

List组件：

```vue
<template>
    <div class="list">
        <h2>{{ list.name }}</h2>
        <slot>若没有传值则显示这段文字。</slot>
    </div>
</template>

<script>
export default {
    name: 'List',
    props: ['list']
}
</script>

<style>
.list {
    width: 200px;
    height: 300px;
    background-color: paleturquoise;
}
h2 {
    text-align: center;
}
</style>
```

最终样式：

![](http://cdn.jsdelivr.net/gh/leslieXin92/picGo/img/202203070050086.png)

### 4.12.2 具名插槽

App组件：

```vue
<template>
    <div class="box">
        <List :list="yahoo">
            <img slot="content" src="../src/assets/logo.png" />
            <a slot="link" href="https://cn.vuejs.org/">进入Vue官网</a>
        </List>

        <List :list="cabbage">
            <ul slot="content">
                <li v-for="(item, index) in cabbage" :key="index">{{ item }}</li>
            </ul>
            <a slot="link" href="https://www.baidu.com">进入百度</a>
            <a slot="link" href="https://www.google.com.hk/">进入谷歌</a>
        </List>

        <List :list="leslie">
            <img slot="content" src="../src/assets/React.png" />
            <template slot="link">
                <a href="https://zh-hans.reactjs.org/">进入React官网</a>
            </template>
        </List>
    </div>
</template>

<script>
import List from './components/List'

export default {
    name: 'App',
    components: { List },
    data () {
        return {
            yahoo: { name: 'yahoo', age: 23, sex: 'boy' },
            cabbage: { name: 'cabbage', age: 22, sex: 'girl' },
            leslie: { name: 'leslie', age: 65, sex: 'boy' },
        }
    },
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 150px;
}
img {
    width: 100%;
}
li {
    width: 150px;
    height: 40px;
    margin: 15px;
    list-style: none;
    text-align: center;
    line-height: 40px;
}
a {
    margin: 5px 0;
}
</style>
```

List组件：

```vue
<template>
    <div class="list">
        <h2>{{ list.name }}</h2>
        <slot name="content">若没有传值则显示这段文字。</slot>
        <slot name="link">若没有传值则显示这段文字。</slot>
    </div>
</template>

<script>
export default {
    name: 'List',
    props: ['list']
}
</script>

<style>
.list {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    height: 300px;
    background-color: paleturquoise;
}
h2 {
    margin: 10px 0;
    text-align: center;
}
</style>
```

最终样式：

![](http://cdn.jsdelivr.net/gh/leslieXin92/picGo/img/202203070119121.png)

### 4.12.3 作用域插槽

App组件：

```vue
<template>
    <div class="box">
        <List>
            <template scope="yahu">
                <ul>
                    <li v-for="(item, index) in yahu.yahoo" :key="index">
                        {{ item }}
    				</li>
                </ul>
            </template>
        </List>

        <List>
            <template scope="yahoo">
                <i v-for="(item, index) in yahoo.yahoo" :key="index">
                    {{ item }}
                </i>
            </template>
        </List>

        <List>
            <template scope="{ yahoo }">
                <b v-for="(item, index) in yahoo" :key="index">
                    {{ item }}
                </b>
            </template>
        </List>
    </div>
</template>

<script>
import List from './components/List'

export default {
    name: 'App',
    components: { List },
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 150px;
}
img {
    width: 100%;
}
li {
    width: 150px;
    height: 40px;
    margin: 15px;
    list-style: none;
    text-align: center;
    line-height: 40px;
}
</style>
```

List组件：

```vue
<template>
    <div class="list">
        <h2>{{ yahoo.name }}</h2>
        <slot :yahoo="yahoo">若没有传值则显示这段文字。</slot>
    </div>
</template>

<script>
export default {
    name: 'List',
    props: ['list'],
    data () {
        return {
            yahoo: { name: 'yahoo', age: 23, sex: 'boy' },
        }
    },
}
</script>

<style>
.list {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    height: 300px;
    background-color: paleturquoise;
}
h2 {
    margin: 10px 0;
    text-align: center;
}
</style>
```

最终样式：

![](http://cdn.jsdelivr.net/gh/leslieXin92/picGo/img/202203070137712.png)

### summary：

1. 作用：让父组件可以向子组件指定的位置插入HTML结构，也是一种组件间通讯的方式，适用于父传子。

2. 分类：默认插槽、具名插槽、作用域插槽。

3. 使用方式：

   1. 默认插槽：

      ​		父组件：

      ```html
      <Son>
      	<div> HTML结构 </div>
      </Son>
      ```

      ​		子组件：

      ```html
      <template>
      	<div>
              <slot> 插槽默认内容 </slot>
          </div>
      </template>
      ```

   2. 具名插槽：

      ​		父组件：

      ```html
      <Son>
          <template slot="yahoo">
              <div> HTML结构 </div>
          </template>
          
          <template v-slot:cabbage>
              <div> HTML结构 </div>
          </template>
      </Son>
      ```

      ​		子组件：

      ```html
      <template>
          <div>
              <slot name="yahoo"> 插槽默认内容 </slot>
              <slot name="cabbage"> 插槽默认内容 </slot>
          </div>
      </template>
      ```

   3. 作用域插槽：

      ​		应用场景：数据在组件的自身，但根据数据生成的结构需要组件的使用者来决定。

      ​		code：

      ​				父组件：

      ```html
      <Son>
          <template scope="yahu">
              <ul>
                  <li v-for="(item, index) in yahu.yahoo" :key="index">
                      {{ item }}
                  </li>
              </ul>
          </template>
      </Son>
      
      <Son>
          <template scope="yahoo">
              <i v-for="(item, index) in yahoo.yahoo" :key="index">
                  {{ item }}
              </i>
          </template>
      </Son>
      
      <Son>
          <template scope="{ yahoo }">
              <b v-for="(item, index) in yahoo" :key="index">
                  {{ item }}
              </b>
          </template>
      </Son>
      ```

      ​				子组件：

      ```vue
      <template>
          <div>
              <slot :yahoo="yahoo"> 若没有传值则显示这段文字。 </slot>
          </div>
      </template>
      
      <script>
      export default {
          data () {
              return {
                  yahoo: { name: 'yahoo', age: 23, sex: 'boy' },
              }
          },
      }
      </script>
      ```

      