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