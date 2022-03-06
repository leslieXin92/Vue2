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