<template>
  <div>
    <h1>ABC</h1>
    <div id="page-a"></div>
  </div>
</template>

<script>
const PageA = {
  name: 'PageA',
  beforeRouteEnter (to, form, next) {
    debugger
    next()
  },
  watch: {
    $router (router) {
      debugger
      return router
    }
  }
  // render (createElement, context) {
  //   // for (let i = 1; i < 6; i++) {
  //   //   createElement('h' + i, {text: 'ABC'})
  //   // }
  //   return createElement('h' + 2, {text: 'ABC'})
  // }
}
export default PageA
</script>

<style scoped>

</style>
