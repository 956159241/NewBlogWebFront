// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueMarkdown from 'vue-markdown'
import mavonEditor from 'mavon-editor'
// markdown-it对象：md.s_markdown, md => mavonEditor实例
//                 or
//                 mavonEditor.markdownIt
import 'mavon-editor/dist/css/index.css'
// 添加代码高亮
// import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css'
import hljs from 'highlight.js/lib/highlight'
import javascript from 'highlight.js/lib/languages/javascript'
hljs.registerLanguage('javascript', javascript)
import '../semantic/dist/semantic.js'
import '../semantic/dist/semantic.css'

// import $ from 'jquery'

Vue.use(hljs)
Vue.use(VueMarkdown)
Vue.use(ElementUI)
Vue.use(mavonEditor)
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(VueRouter)

// 路由跳转
Vue.prototype.$goRoute = function (index) {
  this.$router.push(index)
}

/* eslint-disable no-new */
new Vue({
  components: {
    VueMarkdown
  },
  el: '#app',
  router,
  render: h => h(App)
})
// 添加代码高亮
Vue.directive('highlight', (el) => {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})

// router.redirectedFrom({
//   el: 'body',
//   components: {App}
// })
// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })
