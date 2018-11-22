import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [{
      path: "/",
      name: "home",
      component: resolve => require(['@/components/home/home'], resolve),
      children: [{
          path: "",
          name: "firstpage",
          component: resolve => require(['@/components/firstpage/firstpage'], resolve),
        },
        {
          path: "/firstpage",
          name: "firstpage",
          component: resolve => require(['@/components/firstpage/firstpage'], resolve),
        },
        {
          path: "/login",
          name: "login",
          component: resolve => require(["@/components/login/login"], resolve),
        },
        {
          path: '/register',
          name: 'register',
          component: resolve => require(['@/components/register/register'], resolve),
        }
      ]
    },
    {
      path: '/person',
      name: "person",
      meta: {
        requiresAuth: true
      },
      component: resolve => require(['@/components/person/person'], resolve),
      children: [{
          path: "",
          name: 'personHome',
          component: resolve => require(['@/components/person/personHome/personHome'], resolve),
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/personhome',
          name: 'personHome',
          component: resolve => require(['@/components/person/personHome/personHome'], resolve),
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/personpage',
          name: 'personpage',
          component: resolve => require(['@/components/person/personPage/personPage'], resolve),
          meta: {
            requiresAuth: true
          },
          children: [{
              path: '',
              name: 'personarticle',
              component: resolve => require(['@/components/person/personArticle/personArticle'], resolve),
              meta: {
                requiresAuth: true
              }
            },
            {
              path: 'personarticle',
              name: 'personArticle',
              component: resolve => require(['@/components/person/personArticle/personArticle'], resolve),
              meta: {
                requiresAuth: true
              }
            },
            {
              path: 'personfriend',
              name: 'personfriend',
              component: resolve => require(['@/components/person/personFriend/personFriend'], resolve),
              meta: {
                requiresAuth: true
              }
            }
          ]
        }
      ]
    }
  ]
})
