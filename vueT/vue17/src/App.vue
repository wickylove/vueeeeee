<template>
  <div id="app">
    <div id="nav">
      <router-link to="/all">全部</router-link> |
      <router-link :to="{ name : 'active' }">未完成</router-link> |
      <router-link to="/complete">已完成</router-link>
    </div>
    <TodoInput />
    <div id="list">
      <TodoListItem v-for="index in TodoIndex" :key="index" :index="index" />
    </div>
  </div>
</template>

<script>
import TodoInput from '@/components/TodoInput/index.vue'
import TodoListItem from '@/components/TodoListitem/index.vue'
export default {
  components:{ 
    TodoInput,
    TodoListItem
  },
  computed:{
    TodoIndex() {
      //store.js getters中的todoIndex方法
      return this.$store.getters['todoIndex']
    }
  },
  mounted(){
    this.$store.dispatch('INIT_TODOS')
  }
}
</script>



<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.router-link-exact-active {
  color : red ;
}

</style>
/* .router-link-active{
  color: orange ;
} 路由經過就會產生,可以在element中觀察*/ 