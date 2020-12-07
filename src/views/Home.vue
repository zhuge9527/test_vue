<template>
  <el-container id="home">
    <el-aside width="220px">
      <Menu class="menu" v-if="false"></Menu>
      <Navigate></Navigate>
    </el-aside>
    <el-container>
      <el-header></el-header>
      <el-main>
        <router-view></router-view>
        <MainContent class="menu" v-if="false"></MainContent>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </el-container>
</template>

<script>
import Menu from './Menu'
import MainContent from './Content'
import Navigate from './navigate/Navigate'

export default {
  name: 'Home',
  components: {Menu, MainContent, Navigate}
}
</script>

<style scoped>
#home {
  height: 100vh;
  width: 100vw;
}
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}
</style>
