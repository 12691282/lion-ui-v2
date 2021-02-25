import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'
import Layout from '@/layout'
 

const routerHistory = createWebHistory()

export const constantRoutes = [
 
    {
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
      component: Layout,
      children: [
        {
          path: '/vue4',
          component: defineAsyncComponent(() => import('@v/vue4')),
          name: '首页'
        }
      ]
    },
    {
      component: Layout,
      children: [
        {
          path: '/system/role',
          component: () => import('@v/system/role'),
          name: '角色'
        }
      ]
    }
]

export default new createRouter({
  history: routerHistory,
  routes: constantRoutes
})