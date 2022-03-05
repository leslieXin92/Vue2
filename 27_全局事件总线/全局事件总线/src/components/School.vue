<template>
    <div class="school">
        <h2>school：{{ schoolName }}</h2>
        <h2>address：{{ address }}</h2>
    </div>
</template>

<script>
export default {
    name: 'School',
    data () {
        return {
            schoolName: 'SUSE',
            address: 'Yibin'
        }
    },
    mounted () {
        // 注册自定义事件studentToSchool
        this.$bus.$on('studentToSchool', this.showStudentName)
    },
    beforeDestroy () {
        // 销毁自定义事件studentToSchool
        this.$bus.$off('studentToSchool')
    },
    methods: {
        showStudentName (name) {
            alert(name)
        }
    }
}
</script>

<style>
.school {
    background-color: palevioletred;
}
</style>