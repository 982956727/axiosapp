<template>
  <div class="hello">
    <h2>Hello Earth</h2>
    <!-- 读取参数 -->
    我是传递过来的参数<h3>{{$route.params.earthmsg}}</h3>
  </div>
</template>

<script>
export default {
  name: 'HelloEarth',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2,h3 {
  font-weight: normal;
  color: green;
  font-size: 80px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
