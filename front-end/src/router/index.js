import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Login from '@/components/login' // 一定要首字母大写？有什么规则

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',  // 什么意思？
      name: 'login',
      component: Login
    }
  ]
})
