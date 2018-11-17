// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'vue2-animate/dist/vue2-animate.min.css'
import api from './api'

Vue.prototype.$api = api

Vue.config.productionTip = false
Vue.use(ElementUI);

router.beforeEach((to,from,next)=>{
  var token =sessionStorage.getItem('token')
  console.log(token)
  if(to.matched[0].meta.requiresAuth){
    if(token){
      next()
    }else{
      next({
        path:'/login',
        query:{
          redirect:to.fullPath
        }
      })
    }

  }else{
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
