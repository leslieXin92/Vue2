<template>
    <div class="addBox">
        <input type="text" placeholder="请输入你的任务名称，按回车健确认" @keyup.enter="addItem" />
    </div>
</template>

<script>
export default {
    name: 'Add',
    props: ['addItem']
}
</script>

<style scoped>
.addBox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 50px;
    margin: 0 auto;
    margin-top: 5px;
    background-color: aquamarine;
}
input {
    width: 80%;
    height: 50px;
    font-size: 20px;
    text-indent: 1em;
}
input::-webkit-input-placeholder {
    font-size: 18px;
}
</style>