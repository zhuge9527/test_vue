<template>
  <div id="app">
    <router-view/>
    <el-alert id="elementUIAlertMessageBox"
              style="display:none;"
              :title="alertTitle"
              :type="alertType"
              :description="'账号或密码错误'"
              center
              show-icon>
    </el-alert>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      alertTitle: '提示信息',
      alertType: 'error'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  height: 100%;
  margin: 0 20px;
}
</style>
