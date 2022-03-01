<template>
    <div>
        <Student name="yahoo" sex="boy" :age="23" />
        <Student name="cabbage" sex="girl" :age="22" />
        <Student name="leslie" />
    </div>
</template>

<script>
import Student from './components/Student'

export default {
    name: 'App',
    components: {
        Student
    },
    data () {
        return {
            msg: 'hello'
        }
    },
}
</script>

<style>
</style>