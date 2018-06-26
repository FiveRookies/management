import Vue from 'vue'
import App from './App'
import router from './router'
// import 'jquery'
// import 'bootstrap/dist/js/bootstrap.min.js'
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'element-ui/lib/theme-chalk/index.css';
import VueCarousel from 'vue-carousel'
import VueResource from 'vue-resource'

// import '../static/lib/daterangepicker/daterangepicker-bs3.css'


import {
    Tree,
    Select,
    Option,
    Upload,
    Button,
    ButtonGroup,
} from 'element-ui'
Vue.use(VueCarousel)
Vue.use(VueResource)
Vue.use(Tree)
Vue.use(Select)
Vue.use(Option)
Vue.use(Upload)
Vue.use(Button)

Vue.config.productionTip = false
Vue.http.options.xhr = { withCredentials: true}; 
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
