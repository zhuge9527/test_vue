<template>
  <div id="app"
       v-bind:style="{width: pageWidth, height: pageHeight}">
    <!--    <img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      pageWidth: '100%' || window.innerWidth + 'px',
      pageHeight: '100%' || window.innerHeight + 'px'
    }
  // },
  // computed: {
  //   pageWidth: window.innerWidth,
  //   pageHeight: window.innerHeight
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  /*background-color: #fae6c0;*/
  height: 100%;
  margin: 0 20px;
}
</style>
