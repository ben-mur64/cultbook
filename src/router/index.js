import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Find from '../views/Find.vue'
import Friends from '../views/Friends.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/find',
    name: 'Find',
    component: Find
  },
  {
    path: '/friends',
    name: 'Friends',
    component: Friends
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
