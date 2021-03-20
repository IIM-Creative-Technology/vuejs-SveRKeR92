import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CreatePost from '@/views/CreatePost.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'Admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue')
  },
  {
    path: '/create',
    name: 'Create',
    component: CreatePost
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
