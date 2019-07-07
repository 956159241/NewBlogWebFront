<template>
  <div class="containers">
    <!-- Test Navigation -->
    <!-- <div class="row navigation">
      <div class="col-lg-12 navigation">
        <ul class="nav nav-pills ls-nav">
          <li role="presentation">
            <a @click="$goRoute('/itBlogs/testContentOne')">首页</a>
          </li>
          <li role="presentation">
            <a @click="$goRoute('/itBlogs/testContent')">IT杂记</a>
          </li>
        </ul>
      </div>
    </div>-->

    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <el-row class="tac">
            <el-col :span="12" class="vertical-nav">
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
              >
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>前端</span>
                  </template>
                  <el-menu-item-group title="分组一">
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="2" @click="$goRoute('/itBlogs/testContent')">
                  <i class="el-icon-menu"></i>
                  <span slot="title">后端</span>
                </el-menu-item>
                <el-menu-item index="3" @click="$goRoute('/itBlogs/testContentOne')">
                  <i class="el-icon-menu"></i>
                  <span slot="title">数据库</span>
                </el-menu-item>
                <el-menu-item index="4" @click="$goRoute('/itBlogs/testContent')">
                  <i class="el-icon-menu"></i>
                  <span slot="title">其他</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <!-- <el-col :span="9">
        <div class="grid-content bg-purple-light">
        </div>
      </el-col> -->
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'itCategory',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  comments: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vertical-nav{width: 100%;}
.el-submenu .el-menu-item {min-width: auto;}
</style>
