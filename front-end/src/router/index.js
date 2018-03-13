import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Login from '@/components/login' // 一定要首字母大写？有什么规则
import Signin from '@/components/signin'
import Content from '@/components/content'
import BackTop from '@/components/backtop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/content',
      name: 'content',
      component: Content
    },
    {
      path: './backtop',
      name: 'backtop',
      component: BackTop
    }
  ]
})
