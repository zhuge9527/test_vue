<template>
  <el-aside :width="menuWidth">
    <Menu class="menu" v-if="true"></Menu>
    <el-menu
      id="navigate-menu"
      router
      :default-active="currentActive"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-container>
        <el-button type='info' :style="minMenuButtonStyle" @click="changeMenuSize"
                   style="background-color: rgb(84, 92, 100);">
          {{ buttonText }}
        </el-button>
      </el-container>
      <template v-for="route in routes">
        <template v-if="route.children && route.children.length > 0">
          <!--          <el-tooltip :disabled="showTooltip" :key="route.index"-->
          <!--                      class="item" effect="dark" :content="route.backupText" placement="top-start">-->
          <el-submenu :index="route.index" :key="route.index" class="el-submenu">
            <template slot="title"><i :class="route.iconClass"></i>{{ route.menuText }}</template>
            <template v-for="menuItem in route.children">
              <el-tooltip :disabled="showTooltip" :key="menuItem.index" :offset="-20" :visible-arrow="false"
                          class="item" effect="dark" :content="menuItem.backupText" placement="bottom-start">
                <el-menu-item :index="'/home' + route.index + menuItem.index" class="el-menu-item">
                  {{ menuItem.menuText }}
                </el-menu-item>
              </el-tooltip>
            </template>
          </el-submenu>
          <!--          </el-tooltip>-->
        </template>
        <template v-else>
          <el-menu-item :index="'/home' + route.index" :key="route.index" class="el-menu-item">
            <i :class="route.iconClass"></i>{{ route.menuText }}
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </el-aside>
</template>

<script>
const [minWidth, minButtonText, maxWidth, maxButtonText] = ['80px', '收缩菜单', '220px', '展开']
export default {
  name: 'Navigate',
  data: function () {
    return {
      menuWidth: maxWidth,
      routes: [{
        index: '/supplier',
        menuText: '供应商资料',
        iconClass: 'el-icon-truck',
        children: [
          {index: '/search', menuText: '查询供应商资料'},
          {index: '/create', menuText: '创建供应商'},
          {index: '/employee/maintain', menuText: '查询供应商人员'},
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
    showTooltip () {
      return this.menuWidth !== minWidth
    },
    buttonText () {
      return this.menuWidth !== minWidth ? minButtonText : maxButtonText
    },
    minMenuButtonStyle () {
      let width = Number(this.menuWidth.replace('px', '')) - 1 + 'px'
      return {width: width}
    },
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
    },
    changeMenuSize () {
      function handlerText (routes, size) {
        routes.forEach(routeInfo => {
          if (!routeInfo.backupText) {
            routeInfo.backupText = routeInfo.menuText
          }
          if (size === 'min') {
            delete routeInfo.menuText
          }
          if (size === 'max') {
            routeInfo.menuText = routeInfo.backupText
          }
          if (Array.isArray(routeInfo.children)) {
            handlerText(routeInfo.children, size)
          }
        })
      }

      if (this.menuWidth === minWidth) {
        // 放大
        this.menuWidth = maxWidth
        handlerText(this.routes, 'max')
      } else if (this.menuWidth === maxWidth) {
        // 缩小
        this.menuWidth = minWidth
        handlerText(this.routes, 'min')
      }
    }
  },
  created () {
    this.changeMenuSize()
  }
}
</script>

<style scoped>
#navigate-menu {
  height: 100vh;
  overflow: hidden;
}
</style>
