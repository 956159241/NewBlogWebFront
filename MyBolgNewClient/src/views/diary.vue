<template>
  <div class="container">
    <div class="diary">
      <div class="row diaries">
        <div class="col-lg-8 diaries-right" >
          <ul class="diaries">
            <li v-for="item in diaries" class="single-diary">
              <div class="other">
                <!--<span>测试Id：{{item.Id}}</span>-->
                <span>time：{{item.Time | formatDate}}</span>
                <span>week：{{item.Week}}</span>
                <span>weather：{{item.Weather}}</span>
                <span>mood：{{item.Mood}}</span>
              </div>
              <p>{{item.Content}}</p>
            </li>
          </ul>
          <!--分页-->
          <div class="pages">
            <!--Bootstrap-->
            <ul class="pagination">
              <li><a class="first-page" v-on:click="jumpToFirstPage()">首页</a></li>
              <li><a class="page-count"  v-on:click="jumpToPage(currentPage)">上一页</a></li>
              <li v-bind:class="{ 'active': currentPage == (index - 1)}" v-on:click="jumpToPage(index)"  v-for="index in totalPages"><a class="page-count">{{index}}</a></li>
              <li><a class="page-count"  v-on:click="jumpToPage(currentPage + 2)" v-bind:class="">下一页</a></li>
              <li><a class="last-page" v-on:click="jumpToLastPage()">末页</a></li>
              <li><a>共 {{totalPages}} 页</a></li>
            </ul>
          </div>

          <div class="block">
            <span class="demonstration">大于 7 页时的效果</span>
            <el-pagination
              layout="prev, pager, next"
              :total= parseInt(totalPages)>
            </el-pagination>
          </div>
          <!--分页结束-->
        </div>
        <div class="col-lg-4 diaries-left">
          <img src="../assets/images/touxiang.jpg" class="img-rounded diaries-header-img"><br/>
          <div class="info">
            <span>QQ:956159241<br/></span>
            <span>网名：懒家伙<br/></span>
            <span>籍贯：安徽蚌埠<br/></span>
          </div>
            <h5 class="introduce-header">Introduce</h5>
            <p class="introduce-body">二零一三年九月七号即癸巳年辛酉月丙子日，入大学。至今已三年将近，却劳无所获。然毕业将至，须有所为，故建此站。
            学以致用，防无所用。此站意在学而后理，望观者有所获，写者与人谈而后得，仅此而已。
            </p>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  import {formatDate} from '../common/date'
  export default {
    name: 'diary',
    data () {
      return {
        index: '',
        diaries: '',
        pageSize: 3,
        currentPage: [],
        totalCount: '',
        totalPages: ''
      }
    },
    mounted: function () {
      this.$http.get('/api/Diary/GetDiariesTotalNum').then(response => {
        this.totalCount = response.data
      })
      console.log('total count: ' + this.totalCount)
      this.$http.get('/api/Diary/GetDiaries', {
        params: {
          pageIndex: 0,
          pageSize: 3
        }
      }).then(response => {
        this.index = 1
        this.currentPage = 0
        this.diaries = response.data
//        this.totalPages = Math.ceil(parseFloat(this.totalCount) / parseFloat(this.pageSize))
        this.totalPages = parseInt(Math.ceil(parseFloat(this.totalCount) / parseFloat(this.pageSize)))
      })
      console.log('total pages' + this.totalPages)
    },
    filters: {
      formatDate (time) {
        let date = new Date(time)
        return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
      }
    },
    methods: {
      jumpToPage: function (index) {
        if (index - 1 < this.totalPages) {
          this.$http.get('/api/Diary/GetDiaries', {
            params: {
              pageIndex: index - 1,
              pageSize: this.pageSize
            }
          }).then(response => {
            this.currentPage = (index - 1)
            this.diaries = response.data
          })
        }
      },
      jumpToFirstPage: function () {
        this.$http.get('/api/Diary/GetDiaries', {params: {pageIndex: 0, pageSize: this.pageSize}}).then(response => {
          this.currentPage = 0
          this.diaries = response.data
        })
      },
      jumpToLastPage: function () {
        this.$http.get('/api/Diary/GetDiaries', {params: {pageIndex: this.totalPages - 1, pageSize: this.pageSize}}).then(response => {
          this.currentPage = this.totalPages - 1
          this.diaries = response.data
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .single-diary{ display: block;margin-top:30px;}
  .single-diary p{text-indent: 2em;text-align: left; line-height: 20px;}
  .single-diary .other{text-align: left;margin-bottom:3px;border-bottom: solid 1px #909090;}
 .single-diary .other span{margin-left: 20px;}
 .single-diary .other span:first-child{margin-left: 0px;}
 .pages{text-align: right;}
 .pagination li:hover {cursor:pointer;}
  .first-page{}
  .page-count{}
  .last-page{}
  .img-rounded.diaries-header-img{width: 150px;border-radius: 10%;}
  .col-lg-4.diaries-left{text-align: center;}
  .introduce-header{text-align: left;margin-top:30px;text-indent: 2em;}
  .introduce-body{padding: 0px 20px;text-align: justify;text-indent: 2em;}
  .info>span{margin: 5px;}
</style>
