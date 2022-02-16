# VueSummary

## Vue

### 一套用于 <u>构建用户界面</u> 的 <u>渐进式</u> JS框架。

构建用户界面：在合适的时间，发起合适的请求，拿到合适的数据，显示在合适的位置。

渐进式：自底向上逐层的应用。逐渐 + 递进

​		      简单应用：只需要引入一个轻量小巧的核心库。

​			  复杂应用：可以引入各种Vue插件。

------

### 特点：

1.采用组件化模式，提高代码复用率以及可维护性。

2.声明式编码，无需直接操控dom，提高开发效率。

3.使用虚拟dom + diff算法，尽量复用dom节点。

------

## 初识Vue

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

1.想让Vue工作，就必须创建一个Vue实例，且要传入一个配置对象。

2.root容器里的代码依然符合html规范，只不过加入了一些特殊的Vue语法。

3.root容器里的代码被称为 " Vue模板 " 。

4.Vue实例和容器时一 一对应的。

5.真实开发中只有一个Vue实例，配合组件一起使用。

6.双括号内写JS表达式。

​		JS表达式：一个表达式会产生一个值（a，a+b，function(val)，a===b ? true : false ）

​		JS语句（ if ( ) { }，for ( ) { } ）

7.一旦data中的数据发生改变，那么页面中用到该数据的地方也会自动更新。

