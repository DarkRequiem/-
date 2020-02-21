import Vue from 'vue'
import Router from 'vue-router'
import home from '../page/home/home.vue'
import player from '../page/player/player.vue'
import top from '../page/top/top.vue'
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
          path: '/top',
          name:'top',
          component: top
      }
  ]
})