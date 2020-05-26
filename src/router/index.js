import Vue from 'vue'
import Router from 'vue-router'
import home from '../page/home/home.vue'
import player from '../page/player/player.vue'
import hot from '../page/hot/hot.vue'
import comment from '../page/comment/comment.vue'
import songlist from '../page/songlist/songlist.vue'
import ak from '../page/comment/123.vue'
Vue.use(Router)

export default new  Router ({
  routes: [
      {
          path:'/',
          name:'home',
          component: home
      },
      {
        path:'/home',
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
      },
      {
          path:'/comment',
          name:'comment',
          component: comment
      },
      {
          path:'/songlist',
          name:'songlist',
          component:songlist
      }
  ]
})