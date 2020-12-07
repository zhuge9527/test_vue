<template>
  <div id="app">
    <router-view/>
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
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  /*display: grid;*/
  /*grid-template-columns: 400px;*/
  /*grid-template-rows: 600px;*/
}

</style>
