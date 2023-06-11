// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 将rt注入到vue实例里面
  router:router,
  components: { App },
  template: '<App/>'
})
