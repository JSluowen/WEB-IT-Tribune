import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import home from '@/components/home/home'
import register from '@/components/register/register'
import login from "@/components/login/login"
import firstpage from '@/components/firstpage/firstpage'
import person from '@/components/person/person'

export default new Router({
  routes: [{
      path: "/",
      name: "home",
      component: home,
      children: [
        {
          path:"",
          name:"firstpage",
          component:firstpage
        },
        {
          path:"/firstpage",
          name:"firstpage",
          component:firstpage
        },
        {
          path: "/login",
          name: "login",
          component: login
        },
        {
          path: '/register',
          name: 'register',
          component: register
        }
      ]
    },
    {
      path:'/person',
      name:"person",
      compoent:person
    }
  ]
})
