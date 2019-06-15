<template>
  <div class="container">
    <h4>留言板</h4>

    <form class="form1">
      <fieldset class="fieldset1">
        <legend class="legend1">请留言</legend>
        <ol class="ol1">
          <li>
            <label>姓名</label><br/>
            <el-input
              placeholder="请输入姓名"
              v-model="name"
              clearable>
            </el-input>
          </li>
          <li>
            <label>电子邮件</label><br/>
            <el-input
              placeholder="请输入邮箱"
              v-model="name"
              clearable>
            </el-input>
          </li>
          <li>
            <label>个人网站</label><br/>
            <div>
              <el-input placeholder="请输入内容" v-model="website">
                <template slot="prepend">Http://</template>
              </el-input>
            </div>
          </li>
          <li>
            <label>留言内容</label><br/>
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="textarea">
            </el-input>

          </li>
          <li class="li-input-submit">
            <el-button type="primary" class="submit">提交</el-button>
          </li>
        </ol>
      </fieldset>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        textarea: '',
        website: '',
        name: ''
      }
    },
    method: {
    },
    comments: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*表单1样式*/
  .form1{width:30%;margin: 0px auto;}
  .legend1{
  text-align: left;margin-left: 0px;font-size:12px;
  }
  .ol1{list-style: none;text-align: left;padding-left:20px;}
  .ol1>li{margin: 10px auto;}
  .li-input-submit{text-align: center;}
  .el-button--primary{width: 150px;}
</style>
