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
            <img src="../src/assets/React.png" />
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
</style>