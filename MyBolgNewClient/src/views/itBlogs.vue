<template>
  <div>
    <el-row>
      <el-col :span="8"><div class="grid-content bg-purple">
            <itCategoryComponent></itCategoryComponent>
        </div></el-col>
      <el-col :span="16"><div class="grid-content bg-purple-light">
            <router-view></router-view>
        </div></el-col>
      </el-row>

    <!-- <ul>
      <li v-for="item in links"><a @click="$goRoute(item.route)">{{item.text}}</a></li>
    </ul>-->

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
      isCollapse: true,
      links: [
        {
          text: '大白菜',
          route: '/testContent'
        },
        {
          text: '水蜜桃',
          route: '/testContentOne'
        }
      ]
    }
  },
  // components: {categoryComponent, testContentComponent}
  components: { itCategoryComponent },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
