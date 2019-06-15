import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/login"
    },
    {
        path:"/login",
        meta:{
          title:"欢迎来到星享俱乐部"
        },
        component:()=>import("../views/login/index")
    },
    {     
      path:"/home",
      meta:{
          title:"加班/休假"
      },
      component:()=>import('../views/home/index')
    },{     
      path:"/search",
      component:()=>import('../views/search/index')
    },{     
      path:"/detail/:type/:id",
      meta:{
        title:"加班详情"
      },
      props:true,
      component:()=>import('../views/detail/index')
    },{
      path:"/personal",
      meta:{
        title:"申请人信息"
      },
      props:true,
      component:()=>import("../views/personal/index")
    },{
      path:"/new",
      meta:{
        title:"办公室加班申请表"
      },
      props:true,
      component:()=>import("../views/new/index")
    },{
      path:"/history",
      props:true,
      component:()=>import("../views/history/index")
    }
  ]
})
