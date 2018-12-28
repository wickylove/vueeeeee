<script>
export default {
    data(){
        return {
            todo: ''
        }
    },
    methods: {
        submitHandler(){
            // 沒有東西就回傳 null
            if(!this.todo) return
            this.$store.commit('ADD_TODO',{
                content: this.todo ,
                complete: false
            })
            this.todo = ''
        }
    }
}
</script>
<template src="./template.html"></template> 