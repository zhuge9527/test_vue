<template>
  <el-menu
    id="navigate-menu"
    router
    :default-active="currentActive"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <template v-for="route in routes">
      <template v-if="route.children && route.children.length > 0">
        <el-submenu :index="route.index" :key="route.index" class="el-submenu">
          <template slot="title"><i :class="route.iconClass"></i>{{ route.menuText }}</template>
          <template v-for="menuItem in route.children">
            <el-menu-item :index="'/home' + route.index + menuItem.index" :key="menuItem.index" class="el-menu-item">
              {{ menuItem.menuText }}
            </el-menu-item>
          </template>
        </el-submenu>
      </template>
      <template v-else>
        <el-menu-item :index="'/home' + route.index" :key="route.index" class="el-menu-item">
          <i :class="route.iconClass"></i>{{ route.menuText }}
        </el-menu-item>
      </template>
    </template>
  </el-menu>
</template>

<script>
export default {
  name: 'Navigate',
  data: function () {
    return {
      routes: [{
        index: '/supplier',
        menuText: '供应商资料',
        iconClass: 'el-icon-truck',
        children: [
          {index: '/search', menuText: '查询供应商资料'},
          {index: '/create', menuText: '创建供应商'},
          {index: '/employee/search', menuText: '查询供应商人员'},
          {index: '/truck/search', menuText: '查询供应商车辆'}
        ]
      }, {
        index: '/customer',
        menuText: '客户资料',
        iconClass: 'el-icon-box',
        children: [
          {index: '/search', menuText: '查询客户资料'},
          {index: '/create', menuText: '创建客户'},
          {index: '/customer-site/search', menuText: '查询客户门点'}
        ]
      }, {
        index: '/transport',
        menuText: '运输信息',
        iconClass: 'el-icon-place',
        children: [
          {index: '/job/search', menuText: '运单'},
          {index: '/order/search', menuText: '订单'},
          {index: '/route-info/search', menuText: '路线信息'}
        ]
      }, {
        index: '/system/role',
        menuText: '角色管理',
        iconClass: 'el-icon-user'
      }, {
        index: '/system/authority',
        menuText: '权限管理',
        iconClass: 'el-icon-view'
      }]
    }
  },
  computed: {
    currentActive () {
      if (this.$route.matched.length < 2 || this.$route.matched[1].name === '404') {
        return '/home/supplier/search'
      }
      return this.$route.fullPath
    }
  },
  methods: {
    handleSelect () {
      console.log('select element menu')
      const title = arguments[2].$slots.default[0].text.trim()
      this.$emit('setCurrentViewTitle', title)
    }
  }
}
</script>

<style scoped>
#navigate-menu {
  height: 100vh;
  overflow: auto;
}
</style>
