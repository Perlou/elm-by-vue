/**
 * 应用入口
 * perloukevin@gmail.com
 */

'use strict'

import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

// components
import goods from './components/goods/goods'
import ratings from './components/ratings/ratings'
import seller from './components/seller/seller'

Vue.use(VueRouter)

let app = Vue.extend(App)
let router = new VueRouter()

router.map({
  '/goods': {
    component: goods
  },
  '/ratings': {
    component: ratings
  },
  '/seller': {
    component: seller
  }
})

router.start(app, '#app')
