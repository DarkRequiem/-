import Vue from 'vue'
import Router from 'vue-router'
import home from '../page/home/home.vue'
import player from '../page/player/player.vue'
import hot from '../page/hot/hot.vue'
Vue.use(Router)

export default new  Router ({
  routes: [
      {
          path:'/',
          name:'home',
          component: home
      },
      {
          path:'/player',
          name:'player',
          component: player
      },
      {
          path: '/hot',
          name:'hot',
          component: hot
      }
  ]
})