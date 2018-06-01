import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import statistics from '@/components/statistics'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'statistics',
      component: statistics
    }
  ]
})
