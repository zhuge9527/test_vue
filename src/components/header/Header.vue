<template>
  <el-header class="header">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <template v-for="route in reactRoute">
        <el-breadcrumb-item :key="route.path" :to="route.path">
          {{ route.name }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
    <div class="main-header-avatar">
      <el-dropdown @command="handleCommand">
        <el-badge is-dot :value="12" :max="99" class="main-header-badge">
          <el-avatar size="large" :src="currentUserInfo.avatarPath">
            <img src="static/default-avatar.png" alt="load fail"/>
          </el-avatar>
        </el-badge>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click="toView('/home/supplier/search')">用户信息</el-dropdown-item>
          <el-dropdown-item>更改密码</el-dropdown-item>
          <el-dropdown-item>权限申请</el-dropdown-item>
          <el-dropdown-item>通知设置</el-dropdown-item>
          <el-dropdown-item>版本公告</el-dropdown-item>
          <el-dropdown-item command="loginOut">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      currentRoute: undefined
    }
  },
  computed: {
    reactRoute () {
      const reactRoute = []
      const history = this.$store.state.routerInfo.history
      history.forEach(route => {
        const name = route.meta && route.meta.text ? route.meta.text : '未配置'
        reactRoute.push({
          name,
          view: route.name,
          path: route.path
        })
      })
      return reactRoute
    },
    currentUserInfo () {
      return this.$store.state.userInfo
    }
  },
  methods: {
    toView (url) {
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
    },
    handleCommand (command) {
      if (command === 'loginOut') {
        this.$axios.get('/server/loginOut').then(res => {
          if (res && res.status === 200) {
            this.$router.replace('/login')
          }
        })
      }
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
.header {
  margin: 0 1rem;
  display: flex;
  align-items: center;
}

.main-header-avatar {
  position: absolute;
  right: 20px;
}

.main-header-badge {
}
</style>
