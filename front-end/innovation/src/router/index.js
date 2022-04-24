import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import News from "../views/News"
import Gallery from "../views/Gallery"
import Organizer from "../views/Organizer"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/News',
    name: 'News',
    component: Home
  },
  {
    path: '/Gallery',
    name: 'Gallery',
    component: Home
  },
  {
    path: '/Organizer',
    name: 'Organizer',
    component: Home
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
