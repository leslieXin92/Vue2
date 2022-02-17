# VueSummary

## 一、Vue核心

------

### 1.1 Vue简介

#### 一套用于 <u>构建用户界面</u> 的 <u>渐进式</u> JS框架。

构建用户界面：在合适的时间，发起合适的请求，拿到合适的数据，显示在合适的位置。

渐进式：自底向上逐层的应用。逐渐 + 递进

​		      简单应用：只需要引入一个轻量小巧的核心库。

​			  复杂应用：可以引入各种Vue插件。

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

   ​	（1）new Vue时配置el属性。

   ​	（2）先创建Vue实例，再通过vm.$mount ( ' #root ' ) 指定el的值。 

2. data有两种写法：

   ​	（1）对象式

   ​	（2）函数式

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

1. M：模型 (model)  →  data里的数据。
2. V：视图 (View)  →  模板代码。
3. VM：视图模型 (ViewModel)  →  Vue实例。

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

#### summary：

1. Vue中的数据代理：通过vm对象来代理data对象中属性的操作（读 / 写）。

2. Vue中数据代理的好处：更加方便的操作data里的数据。

3. 基本原理：

   ​		通过Object.defineProperty( )把data对象中所有属性添加到vm上；

   ​		为每一个添加到vm上的属性，都指定一个getter和setter；

   ​		在getter和setter的内部去操作（读 / 写）data中对应的属性。