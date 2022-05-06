
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
<<<<<<< HEAD
axios.defaults.baseURL = 'http://81.70.56.45:8082'
Vue.prototype.$axios=axios
=======
Vue.prototype.$axios = axios
>>>>>>> 75b2d5b14af868e4f73767a0467f2b5d7d19101e
Vue.config.productionTip = false
Vue.use(ElementUI)

axios.defaults.baseURL = 'http://81.70.56.45:8082'
new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')

