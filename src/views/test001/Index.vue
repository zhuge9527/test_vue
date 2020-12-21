<template>
  <el-container id="test-index-001" style="height:100%;border: 1px solid #eee">
    <el-aside width="250px" height="100%" style="background-color: rgb(238, 241, 246)">
      <el-menu
        style="height:100%;background-color: #d6ebff"
        :default-openeds="['4']"
        :default-active="$route.path"
        unique-opened
        router>
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>导航一</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>导航二</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>导航三</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="3-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="3-4">
            <template slot="title">选项4</template>
            <el-menu-item index="3-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title"><i class="el-icon-setting"></i>Index</template>
          <el-menu-item index="/index/supplier/search">Supplier Search Page</el-menu-item>
          <el-menu-item index="/index/pageA">/index/pageA</el-menu-item>
          <el-menu-item index="/index/pageA/param(131)">/index/pageA/param(131)</el-menu-item>
          <el-menu-item index="/index/render/pageA2/third">/index/render/pageA2/third</el-menu-item>
          <el-menu-item index="/pageB">/pageB</el-menu-item>
          <el-menu-item index="/index/pageB/abc">/index/pageB/abc</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-row>
          <el-col :span="16" :offset="2">
            <el-breadcrumb separator="/" style="display:inline-block; float:left;line-height: 60px">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
              <el-breadcrumb-item>活动列表</el-breadcrumb-item>
              <el-breadcrumb-item>活动详情</el-breadcrumb-item>
              <el-breadcrumb-item
                v-for="item in currentHistory"
                :key="item.path">
                <a :href="item.path">{{ item.name }}</a>
              </el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
          <el-col :span="6">
            <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span style="font-size: 18px">{{ this.username }}</span>
          </el-col>
        </el-row>
      </el-header>

      <el-main class="box-shadow-inset">
        <router-view></router-view>
<!--        <el-row class="main-container-top-button">-->
<!--          <el-button type="primary" size="small">Add</el-button>-->
<!--          <el-button type="danger" size="small">Remove</el-button>-->
<!--          <el-button type="warning" size="small">Copy</el-button>-->
<!--          <el-button type="success" size="small">Download</el-button>-->
<!--        </el-row>-->
<!--        <el-table :data="tableData">-->
<!--          <el-table-column prop="date" label="日期" width="140">-->
<!--          </el-table-column>-->
<!--          <el-table-column prop="name" label="姓名" width="120">-->
<!--          </el-table-column>-->
<!--          <el-table-column prop="address" label="地址">-->
<!--          </el-table-column>-->
<!--        </el-table>-->
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
.main-container-top-button button {
  float: left;
}
.box-shadow-inset {
  box-shadow: #b52b2bcc 0 0 30px 10px inset;
}
</style>

<script>
export default {
  data () {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }
    return {
      currentHistory: [
        {path: '/index2', name: '第二首页'},
        {path: '/home', name: '主页'}
      ],
      tableData: Array(20).fill(item)
    }
  },
  computed: {
    username () {
      return this.$store.state.userInfo.username
    }
  },
  watch: {
    $route () {
      // debugger
    }
  }
}
</script>
