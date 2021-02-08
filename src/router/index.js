import { createRouter, createWebHistory } from 'vue-router'
 
import Layout from '@/layout'
 

const routerHistory = createWebHistory()

export const constantRoutes = [
 
    {
        path: '',
        component: Layout,
        redirect: 'index',
        children: [
          {
            path: '/index',
            component: ()=> import(/*webpackChunkName:'test'*/'@v/test'),
            name: '主页'
          }
        ]
    },
    {
      path: '',
      component: Layout,
      children: [
        {
          path: '/home',
          component: ()=> import('@v/home'),
          name: '首页'
        }
      ]
    }
]

export default new createRouter({
  history: routerHistory,
  routes: constantRoutes
})