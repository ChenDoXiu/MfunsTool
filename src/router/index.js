/*
 * @Author: your name
 * @Date: 2021-02-21 11:04:49
 * @LastEditTime: 2021-02-24 16:47:41
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \html\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
