<template>
  <el-container class="main-view">
    <comp-menu @setCurrentViewTitle="setCurrentViewTitle"/>
    <el-container class="main-view-container">
      <comp-header/>
      <router-view/>
      <comp-footer/>
    </el-container>
  </el-container>
</template>

<script>
import CompMenu from '../components/menu/Menu'
import CompHeader from '../components/header/Header'
import CompFooter from '../components/footer/Footer'

export default {
  name: 'Layout',
  components: {CompMenu, CompHeader, CompFooter},
  data () {
    return {
      currentViewTitle: '<无>'
    }
  },
  methods: {
    setCurrentViewTitle (v) {
      this.currentViewTitle = v
    },
    goBack () {
      console.log('go back')
    }
  },
  mounted () {
    if (this.$route.matched.length < 2 || this.$route.matched[1].name === '404') {
      this.$router.push('/home/supplier/search')
    }
  },
  watch: {
    $route () {
      this.$store.commit('pushRouterHistory', this.$route)
    }
  },
  created () {
    this.$store.commit('pushRouterHistory', this.$route)
  }
}
</script>

<style scoped>
.main-view {
  height: 100vh;
  width: 100vw;
}

.main-view-container {
  flex-direction: column;
}
.main-view-container > .el-main {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  height: 100%;
  margin: 0 1rem;
  background-color: #E9EEF3;
}
</style>
