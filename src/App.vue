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
* {
  margin: 0;
}
html, body, #app {
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
