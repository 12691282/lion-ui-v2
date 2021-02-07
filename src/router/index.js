import { createRouter, createWebHistory } from 'vue-router'
 
 
import Test from '@v/test'

import Home from '@v/home'

const routerHistory = createWebHistory()


export default createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Test
    },
    {
      path: '/home',
      component: Home
    }
  ]
})