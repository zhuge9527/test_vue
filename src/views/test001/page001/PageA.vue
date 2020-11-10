<template>
  <div>
    <h2 v-if="notMatched">Template.h2</h2>
    <h3 v-else>{{matchParam[Object.keys(matchParam)[0]]}}</h3>
    <router-view></router-view>
    <router-view name="view2"></router-view>
  </div>
</template>

<script>
export default {
  name: 'PageA',
  // data () {
  //   return {
  //     matchParam: {},
  //     notMatched: true
  //   }
  // },
  computed: {
    matchParam () {
      return this.$route.params
    },
    notMatched () {
      return Object.keys(this.$route.params).length === 0
    }
  // },
  // watch: {
  //   $route () {
  //     this.matchParam = this.$route.params
  //     this.notMatched = Object.keys(this.$route.params).length === 0
  //   }
  }
}
</script>

<style scoped>

</style>
