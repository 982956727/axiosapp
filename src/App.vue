<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
//导入HelloWorld组件
import HelloWorld from './components/HelloWorld'

import HelloWorldPost from './components/HelloWorldPost'

export default {
  name: 'App',
  components: {
    HelloWorld,
    HelloWorldPost
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
