<template>
  <el-header style="display: flex;align-items: center;">
    <!--    <el-row style="flex: 1;">-->
    <!--      <el-col :span="6">-->
    <!--        <el-page-header @back="goBack" :content="currentViewTitle"></el-page-header>-->
    <!--      </el-col>-->
    <!--      <el-col :span="12"></el-col>-->
    <!--      <el-col :span="6"></el-col>-->
    <!--    </el-row>-->
    <el-page-header @back="goBack"></el-page-header>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <template v-for="route in currentRoute">
        <el-breadcrumb-item :key="route.path" :to="route.path">{{ route.meta.text || route.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
    <div class="main-header-avatar">
      <el-dropdown>
        <el-badge  is-dot :value="12" :max="99" class="main-header-badge">
          <el-avatar size="large" :src="currentUserInfo.avatarPath">
            <img src="/static/default-avatar.png" alt="load fail"/>
          </el-avatar>
        </el-badge>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click="toView('/home/supplier/search')">用户信息</el-dropdown-item>
          <el-dropdown-item>更改密码</el-dropdown-item>
          <el-dropdown-item>权限申请</el-dropdown-item>
          <el-dropdown-item>通知设置</el-dropdown-item>
          <el-dropdown-item>版本公告</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
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
  computed: {
    currentUserInfo () {
      return this.$store.state.userInfo
    }
  },
  methods: {
    toView (url) {
      debugger
      return this.$router.push(url)
    },
    goBack () {
      console.log('call goBack')
      this.$router.back()
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
.main-header-avatar {
  position: absolute;
  right: 20px;
}
.main-header-badge {
}
</style>
