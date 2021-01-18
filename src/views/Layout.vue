<template>
  <el-container class="main-view">
    <comp-menu @setCurrentViewTitle="setCurrentViewTitle"/>
    <el-container class="main-view-container">
      <comp-header/>
      <comp-content/>
      <comp-footer/>
    </el-container>
  </el-container>
</template>

<script>
import CompMenu from '../components/menu/Menu'
import CompHeader from '../components/header/Header'
import CompContent from '../components/content/Content'
import CompFooter from '../components/footer/Footer'

export default {
  name: 'Layout',
  components: {CompMenu, CompHeader, CompContent, CompFooter},
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
</style>
