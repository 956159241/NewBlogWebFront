<template>
  <div class="container">
    <div class="block">
      <el-carousel height="300px">

        <el-carousel-item v-for="item in paths" :key="item">
          <img class="LoopPic" :src= "item" style="height: 300px;" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <!--test element ui -->
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      paths: ['../../blog_static/images/jianshu.jpg', '../../blog_static/images/WeChat.jpg', '../../blog_static/images/gongzhonghao.png']
    }
  },
  comments: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{width: 100%;margin: 0px;padding: 0px;}
  .block{text-align: center;}

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }

</style>
