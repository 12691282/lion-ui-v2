import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'
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
            component: defineAsyncComponent(() =>import(/*webpackChunkName:'test'*/'@v/test')),
            name: '主页'
          }
        ]
    },
    {
      path: '',
      component: Layout,
      children: [
        {
          path: '/vue4',
          component: defineAsyncComponent(() => import('@v/vue4')),
          name: '首页'
        }
      ]
    }
]

export default new createRouter({
  history: routerHistory,
  routes: constantRoutes
})