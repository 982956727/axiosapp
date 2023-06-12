//引入router文件
import router from 'vue-router'
import Vue from "vue"
//引入HelloWorld组件
import HelloWorld from '../components/HelloWorld'
import HelloWorldPost from '../components/HelloWorldPost'

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
      path:'/',//指定要跳转的路径
      component:HelloWorld//指定要跳转的组件
   },
   {
      name:'helloworld',
      path:'/post',//指定要跳转的路径
      component:HelloWorldPost//指定要跳转的组件
   },
  ]
})