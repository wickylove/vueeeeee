<template>
    <h1 class="ti">{{title}}</h1>
</template>

<script>
export default {
    name: 'TitleComponent' ,
    props:{
        title: {
            type: String ,
            required : true  //有東西才顯示
        }
    }
}
</script>

<style scoped>
h1.ti{
    color: orange
}
</style>