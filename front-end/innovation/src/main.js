import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import axios from 'axios'
import mavonEditer from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import 'element-ui/lib/theme-chalk/index.css'
Vue.prototype.$axios = axios
// axios.defaults.baseURL = 'http://81.70.56.45:8082'
Vue.prototype.$axios=axios
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(mavonEditer)
axios.defaults.baseURL = 'http://81.70.56.45:8082'
new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
