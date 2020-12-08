<template>
  <el-header style="display: flex;align-items: center;">
    <!--    <el-row style="flex: 1;">-->
    <!--      <el-col :span="6">-->
    <!--        <el-page-header @back="goBack" :content="currentViewTitle"></el-page-header>-->
    <!--      </el-col>-->
    <!--      <el-col :span="12"></el-col>-->
    <!--      <el-col :span="6"></el-col>-->
    <!--    </el-row>-->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <template v-for="route in currentRoute">
        <el-breadcrumb-item :key="route.path" :to="route.path">{{ route.meta.text || route.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </el-header>
</template>

<script>
export default {
  name: 'MainViewHeader',
  data () {
    return {
      currentViewTitle: '<null>',
      currentRoute: undefined
    }
  },
  methods: {
    goBack () {
      console.log('call goBack')
    },
    getCurrentRoute () {
      let matched = this.$route.matched
      delete matched[matched.length - 1].path
      this.currentRoute = matched
    }
  },
  created () {
    this.getCurrentRoute()
  },
  watch: {
    $route () {
      this.getCurrentRoute()
    }
  }
}
</script>

<style scoped>

</style>
