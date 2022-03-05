<template>
    <div>
        <!-- 使用props子传父 -->
        <School :showSchoolName="showSchoolName" />
        <!-- 使用自定义事件子传父 -->
        <Student v-on:showStudentName="showStudentName" v-on:showStudentAge="showStudentAge" />
        <Student @showStudentName="showStudentName" @showStudentAge="showStudentAge" />
        <!-- 使用ref子传父 -->
        <Student ref="student" @click.native="show" />
    </div>
</template>

<script>
import School from './components/School'
import Student from './components/Student'

export default {
    name: 'App',
    components: {
        School,
        Student
    },
    mounted () {
        setTimeout(() => {
            this.$refs.student.$on('showStudentName', this.showStudentName)
            this.$refs.student.$on('showStudentAge', this.showStudentAge)
        }, 3000)
    },
    methods: {
        showSchoolName (name) {
            alert(name)
        },
        showStudentName (name) {
            alert(name)
        },
        showStudentAge (age) {
            alert(age)
        },
        show () {
            alert(1)
        }
    }
}
</script>

<style>
</style>