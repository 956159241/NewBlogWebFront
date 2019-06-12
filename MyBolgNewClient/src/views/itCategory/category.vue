<template>
  <div class="container">
    <!--<router-link to="testContent" style="display: none">Go to testContent</router-link>-->
    <!--<router-link to="testContentOne" style="display: none">Go to itCategory</router-link>-->
    <!--<br/>-->
    <!--<br/>-->
    <!--<br/>-->
    <!--<a @click="$goRoute('/itBlogs/testContent')">Test Page</a>-->
    <!--<br/>-->
    <!--<a @click="$goRoute('/itBlogs/testContentOne')">itCategory</a>-->

    <!--<router-link to="/itBlogs/testContent">Go to Foo</router-link>-->
    <!--<router-link to="/itBlogs/testContentOne">Go to Bar</router-link>-->

  </div>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <!--<router-view></router-view>-->
</template>

<script>
  export default {
    name: 'itCategory',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    comments: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
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
