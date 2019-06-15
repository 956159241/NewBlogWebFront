<template>
  <div id="it-blog">
    <!-- <el-row :gutter="0">
      <el-col :span="6"><div class="grid-content bg-purple">
        <itCategory-component></itCategory-component>
      </div></el-col>
      <el-col :span="18"><div class="grid-content bg-purple"> -->
        <!--<testContent-component></testContent-component>-->

        <!-- <router-view></router-view>
      </div>
      </el-col>
    </el-row> -->

<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <el-radio-button :label="false">展开</el-radio-button>
  <el-radio-button :label="true">收起</el-radio-button>
</el-radio-group>
<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">导航一</span>
    </template>
    <el-menu-item-group>
      <span slot="title">分组一</span>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="分组2">
      <el-menu-item index="1-3">选项3</el-menu-item>
    </el-menu-item-group>
    <el-submenu index="1-4">
      <span slot="title">选项4</span>
      <el-menu-item index="1-4-1">选项1</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="2">
    <i class="el-icon-menu"></i>
    <span slot="title">导航二</span>
  </el-menu-item>
  <el-menu-item index="3">
    <i class="el-icon-setting"></i>
    <span slot="title">导航三</span>
  </el-menu-item>
</el-menu>




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
        msg: 'Welcome to Your Vue.js App',
        isCollapse: true
      }
    },
//    components: {categoryComponent, testContentComponent}
    components: {itCategoryComponent},
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    }
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

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  .it-blog{
    text-align: left;
  }
</style>
