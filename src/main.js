// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.use(Vuetify, {
  iconfont: 'fa'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  created () {
    AOS.init()
  },
  el: '#app',
  components: { App },
  template: '<App/>'
})
