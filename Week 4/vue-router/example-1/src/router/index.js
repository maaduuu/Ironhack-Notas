import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TaekwondoInfo from '../views/TaekwondoInfo.vue'
import HipHopMusic from '../views/Music.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  {
    path: '/taekwondo',
    name: 'taekwondo',
    component: TaekwondoInfo
  },
  
  {
    path: '/music',
    name: 'music',
    component: HipHopMusic 
  },
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/aboutMadu',
    name : 'aboutMadu',

    component: () => import("../views/AbotMadu.vue")
 
  },

  {
    path: '/aboutGenis',
    name : 'aboutGenis',

    component: () => import("../views/AboutGenis.vue")
 
  },
  
  {
    path: '/contact',
    name : 'contact',

    component: () => import("../views/Contact.vue")
 
  },

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
