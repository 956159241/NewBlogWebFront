<template>
  <div class="container">
    <div class="content">
      <vue-markdown v-highlight :source="Content"></vue-markdown>
      <!--<vue-markdown :srource="Value" placeholder="edit me">-->
      <!--</vue-markdown>-->
      <!--<vue-markdown>```mounted: function () {-->
        <!--this.msg = this.$route.params.msgKeyOne-->
        <!--this.myIndex = this.$route.params.msgKey-->
        <!--console.log(this.myIndex)-->
        <!--}-->
        <!--```</vue-markdown>-->
      <!--<p>Value is: {{ Value }}</p>-->


    </div>
<!--markdown editor-->
      <!--<mavon-editor v-model="Value"/>-->

    <!--<keep-alive>-->

      <!--<router-view></router-view>-->

    <!--</keep-alive>-->
  </div>
</template>

<script>
  // import VueMarkdown from '../../../src/VueMarkdown' // development
  import VueMarkdown from 'vue-markdown' // production
  export default {
    name: 'readDetail',
    data () {
      return {
        msg: '',
        // 保存传递过来的index
        myIndex: '',
        Id: '',
        Time: '',
        Type: '## hello world!',
        Content: '',
        source: new Date().toLocaleTimeString(),
        TestMsg: '',
        Value: '',
        anchorAttrs: {
          target: '_blank',
          rel: 'noopener noreferrer nofollow'
        }
      }
    },
    // 在挂载完成后,将接收到的index赋值给myIndex
    mounted: function () {
      this.msg = this.$route.query.msgKeyOne
      this.myIndex = this.$route.query.msgKey
      this.Id = this.$route.query.Id
      this.Time = this.$route.query.Time
//      this.Type = this.$route.query.Type
//      this.Content = this.$route.query.Content.replace(/[#]/g, ' ')
      this.Content = this.$route.query.Content

//      console.log(this.Content)
      setInterval(() => {
        this.source = new Date().toLocaleTimeString()
      }, 1000)
    },
    method: {
      getParams () {
        // 取到路由带过来的参数
        let routerParams = this.$route.params.msgKey
        // 将数据放在当前组件的数据内
        this.msg = routerParams
        console.log('routerParams', this.msg) // 输出 test message
      }
    },
    watch: {
      // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
      '$route': 'getParams'
    },
    components: {
      VueMarkdown
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content {text-align: left; margin: 0px auto; border: 1px solid red;font-size: 16px;}
  p {margin: 0px 0px 20px; font-size: 16px; }
  p>img{margin: 10px auto;}
</style>
