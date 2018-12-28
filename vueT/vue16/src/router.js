import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
//import Alex from './views/Alex.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/alex',
      name: 'alex',
      component: () => import(/* webpackChunkName: "alex" */ './views/Alex.vue'),
      children : [
        {
          path:'info',
          name:'alex-info',
          component: () => import(/* webpackChunkName: "info" */ './views/Info.vue'),
        },
        {
          path:'youtube',
          name:'alex-youtube',
          component: () => import(/* webpackChunkName: "youtube" */ './views/Youtube.vue'),
        }
      ]
    }
  ]
}) 
   