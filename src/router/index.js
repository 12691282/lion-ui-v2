import { createRouter, createWebHistory } from 'vue-router'
 
 
import Test from '@v/test/index'

import Home from '@v/home/index'

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