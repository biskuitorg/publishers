/* eslint-disable indent */
import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import globals from '@/globals'

// Layouts
import Layout1 from '@/layout/Layout1'

Vue.use(Router)
Vue.use(Meta)

const router = new Router({
  base: '/',
  mode: 'history',
  routes: [{
    path: '/',
    component: Layout1,
    children: [{
      path: '',
      name: 'home',
      component: () => import('@/components/Home')
    }, {
      path: 'sign-in',
      name: 'sign-in',
      component: () => import('@/components/SignIn')
    }, {
      path: 'sign-up',
      name: 'sign-up',
        component: () => import('@/components/SignUp')
    }, {
      path: 'reset-password',
      name: 'reset-password',
        component: () => import('@/components/ResetPassword')
    }, {
      path: 'support',
      name: 'support',
        component: () => import('@/components/Support')
    }]
  },
  {
    path: '/packages',
    component: Layout1,
    children: [{
      path: '',
      name: 'packages',
      component: () => import('@/components/packages/List')
    }, {
      path: 'upload',
      name: 'packages-upload',
      component: () => import('@/components/packages/Upload')
    }]
  },
  {
    path: '/',
    component: Layout1,
    children: [{
      path: '/error/404',
      name: '404',
      component: () => import('@/components/errors/404')
    },
    {
      path: '*',
      name: '404',
      component: () => import('@/components/errors/404')
    }]
  }]
})

router.afterEach(() => {
  // Scroll to top of the page
  globals().scrollTop(0, 0)
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
