<template>
  <!-- template只能有一个根元素 -->
  <div class="hello">
    <h3>我是axiosApp,用来发送请求，拦截响应</h3>
    <button @click="getData()">GET方式发送请求</button>
    <ul>
        <li v-for="item in items">
            {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
// 3.将 axios全局挂载到VUE原型上
Vue.prototype.$http = axios;
// 2.引入加载
import axios from 'axios'

import Vue from 'vue'

export default {
  name: 'HelloWorld',
  data () {
    return {
      items:[],
    }
  },
  methods:{
    getData() {
      var self = this
      // 通过GET方式使用api
      this.$http.get('https://cnodejs.org/api/v1/topics?page=1&limit=15',{
        //params参数是固定的,推荐使用这种方法
        // params:{
        //   page:1,
        //   limit:10
        // }
      })
        /*
        .then(function(res) {
          // 此处的this指向的不是当前vue实例,this.items = res.data.data
          self.items = res.data.data
          console.log(res.data.data[1])
        })
        */
        .then(res => {
           this.items = res.data.data
           console.log(res)
        })
        .catch(function(err) {
          console.log(err)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
