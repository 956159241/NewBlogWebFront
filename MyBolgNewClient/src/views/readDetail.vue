<template>
  <div class="container">
    <p style="color:red;">ID：{{ Id }}, Time: {{ Time }}, Type: {{ Type }}, Content: {{ Content }}</p>

    <keep-alive>

      <router-view></router-view>

    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'readDetail',
    data () {
      return {
        msg: '',
        // 保存传递过来的index
        myIndex: '',
        Id: '',
        Time: '',
        Type: '',
        Content: ''
      }
    },
    // 在挂载完成后,将接收到的index赋值给myIndex
    mounted: function () {
      this.msg = this.$route.query.msgKeyOne
      this.myIndex = this.$route.query.msgKey
      this.Id = this.$route.query.Id
      this.Time = this.$route.query.Time
      this.Type = this.$route.query.Type
      this.Content = this.$route.query.Content
      console.log(this.myIndex)
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
