<template>
  <div id="itBlog">
    <el-row :gutter="0">
      <el-col :span="6"><div class="grid-content bg-purple">
        <itCategory-component></itCategory-component>
      </div></el-col>
      <el-col :span="18"><div class="grid-content bg-purple">
        <!--<testContent-component></testContent-component>-->
        <router-view></router-view>
      </div>
      </el-col>
    </el-row>
  </div>
  </div>
</template>

<script>
  import itCategoryComponent from './itCategory/category.vue'
//  import testContentComponent from './itCategory/testContent.vue'
  export default {
    name: 'home',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
//    components: {categoryComponent, testContentComponent}
    components: {itCategoryComponent}
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
