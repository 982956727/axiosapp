<template>
    <ul>
      <!-- vue­router路由的跳转,to的值填写路由里面填的路径 -->
      <!-- <router-link to="/helloworld">HELLO WORLD</router-link><br>
      <router-link to="/helloearth">HELLO EARTH</router-link> -->

        <!-- 1.必须在路由内加入路由的name -->
       <router-link :to="{name:'helloworld',params:{worldmsg:'你好世界'}}">HELLO WORLD</router-link><br>

       <router-link :to="{name:'helloearth',params:{earthmsg:'你好夜晚'}}">HELLO EARTH</router-link>
    </ul>
</template>

<script>
  export default {
    name:"list"
  }
</script>

<style scoped>

</style>