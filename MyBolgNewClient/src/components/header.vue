<template>
  <div class="container">
    <!--顶部top-bar-->
    <div class="row top">
      <div class="col-lg-12 top-bar">
          <div class="col-lg-4 top-content-left">欢迎来到小站！</div>
          <div class="col-lg-8 top-content-right">
            <!--<img class="weixin-logo" src="../../blog_static/images/myblognew-weixin-logo.png">-->
          </div>
      </div>
    </div>
    <div class="row navigation">
      <div class="col-lg-12 navigation">
        <ul class="nav nav-pills ls-nav">
          <li role="presentation"><a @click="$goRoute('/home')">首页</a></li>
          <li role="presentation"><a @click="$goRoute('/itBlogs')">IT杂记</a></li>
          <li role="presentation"><a @click="$goRoute('/reads')">文人墨客</a></li>
          <li role="presentation"><a @click="$goRoute('/shows')">劳有所获</a></li>
          <li role="presentation"><a @click="$goRoute('/diary')">生活杂记</a></li>
          <li role="presentation"><a @click="$goRoute('/messages')">七言八语</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
  .container{width:100%;margin: 0 auto;padding:0px;margin:0px;}
  .row.top{background: #e6e6e6;height: 30px;line-height: 30px;vertical-align: middle;width:100%;margin:0px;}
  .col-lg-12.top-bar{min-width: 1200px;margin: 0px;padding:0px;font-size:14px;}
  .top-content-left{color:#646464; text-align: right}
  .ls-nav>li:hover{cursor: pointer;}
  .row.navigation{width:100%;margin: 0px;padding:0px;}
  .col-lg-12.navigation{width:1200px;margin: 0px auto;}
  .nav.nav-pills.ls-nav{float:right; font-size: 18px;padding:20px 0px;}
  .nav.nav-pills.ls-nav li a{color:black;}
  .nav.nav-pills.ls-nav li a:hover{border-radius: 0px;background-color: transparent;color:#909090;}
</style>

