import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history:createWebHashHistory(),
  routes:[
    {
      path:"/",
      redirect:"/home"
    },
    {
      path:"/home",
      component:() => import('@/views/home/Home.vue')
    },
    {
      path:"/order",
      component:() => import('../views/order/Order.vue')
    },
    {
      path:"/profile",
      component:() => import('../views/profile/Profile.vue')
    },
    {
      path:"/favor",
      component:() => import("../views/favor/Favor.vue")
    },
    {
      path:"/city",
      component:() => import("../views/city/city.vue"),
      meta:{
        hidden:true
      }
    },
    {
      path:"/search",
      component:() => import("../views/search/search.vue"),
      meta:{
        hidden:true
      }
    },
    {
      path:"/detail/:id",
      component:() => import("../views/detail/detail.vue"),
      meta:{
        hidden:true
      }
    }
  ]
})

export default router