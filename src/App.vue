<template>
  <div id="app">
    <router-view></router-view>
    <img src="./assets/logo.png">
    <!-- 确定视图加载的位置 -->
    <list></list>
  </div>
</template>

<script>
// 导入list组件
import list from './components/list'
//导入HelloWorld组件
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    list
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
