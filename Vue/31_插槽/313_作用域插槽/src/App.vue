<template>
    <div class="box">
        <List>
            <template scope="yahu">
                <ul>
                    <li v-for="(item, index) in yahu.yahoo" :key="index">{{ item }}</li>
                </ul>
            </template>
        </List>

        <List>
            <template scope="yahoo">
                <i v-for="(item, index) in yahoo.yahoo" :key="index">{{ item }}</i>
            </template>
        </List>

        <List>
            <template scope="{ yahoo }">
                <b v-for="(item, index) in yahoo" :key="index">{{ item }}</b>
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