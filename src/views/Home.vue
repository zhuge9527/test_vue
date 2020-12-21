<template>
  <el-container id="home">
    <el-aside width="220px">
      <Menu class="menu" v-if="false"></Menu>
      <Navigate @setCurrentViewTitle="setCurrentViewTitle"></Navigate>
    </el-aside>
    <el-container>
      <MainViewHeader/>
      <el-main>
        <el-container class="main-container-outer">
          <router-view></router-view>
        </el-container>
        <MainContent class="menu" v-if="false"></MainContent>
      </el-main>
      <el-footer height="32px">
        <p style="line-height: 32px;">Made In Greg Ge At 2020/12/07</p>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import Menu from './Menu'
import MainContent from './Content'
import Navigate from '../components/home/Navigate'
import MainViewHeader from '../components/home/MainViewHeader'

export default {
  name: 'Home',
  components: {Menu, MainContent, Navigate, MainViewHeader},
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
#home {
  height: 100vh;
  width: 100vw;
}

.main-container-outer {
  height: 100%;
  background-color: #E9EEF3;
}
</style>
