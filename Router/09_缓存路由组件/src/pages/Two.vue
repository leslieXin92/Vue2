<template>
    <div class="box">
        <div class="nav">
            <router-link class="a" active-class="active" to="/two/a">to A</router-link>
            <router-link class="b" active-class="active" to="/two/b">to B</router-link>
        </div>
        <div class="content">
            <keep-alive include="A">
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Two'
}
</script>

<style scoped>
.box {
    width: 100%;
    height: 100%;
}
.nav {
    height: 30%;
    display: flex;
    justify-content: space-around;
    background-color: aqua;
}
.a,
.b {
    width: 40%;
    height: 30%;
    margin: 10px 0;
    font-size: 24px;
    color: blueviolet;
    text-align: center;
    line-height: 20px;
    cursor: pointer;
}
.content {
    width: 100%;
    height: 70%;
    background-color: green;
}
</style>