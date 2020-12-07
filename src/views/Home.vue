<template>
  <el-container id="home">
    <el-aside width="220px">
      <Menu class="menu" v-if="false"></Menu>
      <Navigate @setCurrentViewTitle="setCurrentViewTitle"></Navigate>
    </el-aside>
    <el-container>
      <el-header style="display: flex;align-items: center;">
        <el-row style="flex: 1;">
          <el-col :span="6">
            <el-page-header @back="goBack" :content="currentViewTitle"></el-page-header>
          </el-col>
          <el-col :span="12"></el-col>
          <el-col :span="6"></el-col>
        </el-row>
      </el-header>
      <el-main>
        <router-view></router-view>
        <MainContent class="menu" v-if="false"></MainContent>
      </el-main>
      <el-footer height="32px">
        <p style="line-height: 32px;"> made in greg ge at 2020/12/07 </p>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import Menu from './Menu'
import MainContent from './Content'
import Navigate from './navigate/Navigate'

export default {
  name: 'Home',
  components: {Menu, MainContent, Navigate},
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
  }
}
</script>

<style scoped>
#home {
  height: 100vh;
  width: 100vw;
}
</style>
