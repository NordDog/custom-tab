import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.myAwesomeType = function (obj) {
  return ({}).toString.call(obj).match(/\s([^\]]+)/)[1].toLowerCase();
}

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
