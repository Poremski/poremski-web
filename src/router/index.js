import Vue from 'vue'
import Router from 'vue-router'
import ResumePage from '@/views/ResumePage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ResumePage',
      component: ResumePage
    }
  ]
})
