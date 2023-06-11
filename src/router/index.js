//引入router文件
import router from 'vue-router'
import Vue from "vue"
//引入组件
import HelloWorld from '../components/HelloWorld'
import HelloEarth from '../components/HelloEarth'

//使用router
Vue.use(router)

//配置路由
/*
   vue­router路由参数的传递,
   1.必须在路由内加入路由的name,

*/
export default new router({
   routes:[{
      name:'helloworld',
      path:'/helloworld/:worldmsg',//指定要跳转的路径
      component:HelloWorld//指定要跳转的组件
   },
   {
      name:'helloearth',
      path:'/helloearth/:earthmsg',
      component:HelloEarth
   }
  ]
})