<template>
  <div class="container">
    <div class="slider-img">
    <div id="myCarousel" class="carousel slide">
      <!-- 轮播（Carousel）指标 -->
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <!-- 轮播（Carousel）项目 -->
      <div class="carousel-inner">
        <div class="item active" style="height: 300px;">
          <img src="../assets/images/head.jpg" alt="First slide">
          <div class="carousel-caption">首页轮播一</div>
        </div>
        <div class="item" style="height: 300px;">
          <img src="../assets/images/head.jpg" alt="Second slide">
          <div class="carousel-caption">首页轮播二</div>
        </div>
        <div class="item" style="height: 300px;">
          <img src="../assets/images/head.jpg" alt="Third slide">
          <div class="carousel-caption">首页轮播三</div>
        </div>
      </div>
      <!-- 轮播（Carousel）导航 -->
      <a class="carousel-control left" href="#myCarousel"
         data-slide="prev">&lsaquo;</a>
      <a class="carousel-control right" href="#myCarousel"
         data-slide="next">&rsaquo;</a>
    </div>
    </div>
    <!--test element ui -->
    <el-button @click="visible = true">Test Element UI</el-button>
    <el-dialog :visible.sync="visible" title="Hello world">
      <p>Try Element</p>
    </el-dialog>
    <div class="block">
      <span class="demonstration">默认 Hover 指示器触发</span>
      <el-carousel height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
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
      msg: 'Welcome to Your Vue.js App'
    }
  },
  comments: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{width: 100%;margin: 0px;padding: 0px;}
  .slider-img{width: 100%;}

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

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
