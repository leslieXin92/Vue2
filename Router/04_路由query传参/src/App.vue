<template>
    <div class="box">
        <Banner />
        <div class="main">
            <div class="nav">
                <router-link class="one" active-class="active" to="/one">to One</router-link>
                <router-link class="two" active-class="active" to="/two">to Two</router-link>
            </div>
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import Banner from './components/Banner'

export default {
    name: 'App',
    components: { Banner }
}
</script>

<style scoped>
.box {
    margin: 00px auto;
    width: 50%;
    height: 200px;
    background-color: springgreen;
}
.banner {
    height: 60px;
    font-size: 28px;
    text-align: center;
    line-height: 60px;
    background-color: brown;
}
.main {
    display: flex;
    height: 140px;
}
.nav {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 30%;
    height: 140px;
}
.one,
.two {
    width: 80%;
    height: 50px;
    outline: 5px solid red;
    font-size: 24px;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
}
.active {
    background-color: brown;
}
.content {
    width: 70%;
    font-size: 28px;
    text-align: center;
    background-color: peru;
}
</style>
