// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/style/reset.css'
import fastClick from 'fastclick'
fastClick.attach(document.body)

Vue.config.productionTip = false
import { Button,PullRefresh,List,Swipe, SwipeItem } from 'vant'
Vue.use(Button).use(PullRefresh).use(List).use(Swipe).use(SwipeItem)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
