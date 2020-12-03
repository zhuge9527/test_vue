<template>
  <div id="app">
    <router-view @showMessage="showMessage"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
}

html, body, #app {
  width: 100%;
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  /*display: grid;*/
  /*grid-template-columns: 400px;*/
  /*grid-template-rows: 600px;*/
}

</style>
