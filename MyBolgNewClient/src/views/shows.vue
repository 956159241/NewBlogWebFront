<template>
  <div class="container">
    <h1>
      <a href="http://www.iotzzh.com/old/index.html" target="_blank">my blog old</a>
    </h1>
    <h1>
      <a href="http://www.iotzzh.com/jf.html" target="_blank">jf website</a>
    </h1>
    <h1>
      <a href="http://www.iotzzh.com/yt.html" target="_blank">yt website</a>
    </h1>
    <h1>
      <a href="http://www.iotzzh.com/cjw.html" target="_blank">cjw website</a>
    </h1>
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

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
