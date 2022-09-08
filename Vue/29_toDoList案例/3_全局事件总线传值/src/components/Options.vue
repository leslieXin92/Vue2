<template>
    <div class="optionsBox">
        <input type="checkbox" :checked="flag" @click="handleCheckAll" />
        <div>已完成 {{ completeCount }} / 全部 {{ totalCount }}</div>
        <button @click="deleteCheckedItem">清除已完成</button>
    </div>
</template>

<script>
export default {
    name: 'Options',
    props: ['totalCount', 'completeCount', 'handleCheckAll', 'deleteCheckedItem', 'flag']

}
</script>

<style scoped>
.optionsBox {
    display: flex;
    align-items: center;
    width: 80%;
    height: 50px;
    margin-bottom: 10px;
    background-color: aquamarine;
}
input {
    width: 25px;
    height: 25px;
    margin: 0 5%;
}
button {
    width: 15%;
    height: 35px;
    margin-left: 40%;
}
</style>