import Vue from 'vue'
import Router from 'vue-router'

//import Alex from './views/Alex.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/all',
      name: 'all'
    },
    {
      path: '/active',
      name: 'active'
    },
    {
      path: '/complete',
      name: 'complete'
    },
    {
      path: '*',
      redirect : '/all'
    },
  ]
}) 
   