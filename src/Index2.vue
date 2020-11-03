<template>
  <el-container>
    <el-aside width="200px">
      <NavMenu></NavMenu>
    </el-aside>
    <el-container>
      <el-header ref="header" :height=headerHeight>Header</el-header>
      <el-main ref="main" :height="mainHeight">
        <el-row>Main</el-row>
        <el-row>
          <el-col>
            <el-button type="danger" @click="changeHeight">大</el-button>
            <el-button type="primary" @click="changeHeight">小</el-button>
          </el-col>
        </el-row>
      </el-main>
      <el-footer ref="footer" :height="footerHeight">Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import NavMenu from './components/NavMenu'

export default {
  name: 'Index2',
  components: {NavMenu},
  data: function () {
    return {
      headerHeight: '100px',
      footerHeight: '100px'
    }
  },
  computed: {
    mainHeight: function () {
      const headerHeight = Number(this.headerHeight.split('px').shift())
      const footerHeight = Number(this.footerHeight.split('px').shift())
      return screen.availHeight - headerHeight - footerHeight + 'px'
    }
  },
  methods: {
    changeHeight: function () {
      this.headerHeight = (Number(this.headerHeight.split('px').shift()) + 100) + 'px'
    }
  }
}
</script>

<style scoped>
main,header, footer {
  border-left: 2px solid #42b983;
  border-right: 2px solid #123434;
  border-bottom: 2px solid black;
}
.el-main>.el-row:nth-last-child(2) {
  margin-bottom: 20px;
}
.el-main>.el-row:last-child {
  border-top: 1px solid gray;
  padding-top:4px;
}
</style>
