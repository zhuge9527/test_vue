<template>
  <div id="app">
    <router-view @showMessage="showMessage"/>
    <el-alert v-show="showMessageBox" id="elementUIAlertMessageBox"
              :type="messageBoxConfig.type"
              :title="messageBoxConfig.title"
              :description="messageBoxConfig.description"
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
      showMessageBox: false,
      messageBoxConfig: {
        type: 'success',
        title: '提示信息',
        description: '操作成功'
      }
    }
  },
  computed: {},
  methods: {
    showMessage (config) {
      config = config || {}
      // const defaultConfig = {
      //   type: 'error',
      //   title: '未知错误',
      //   description: '未知错误，如需要，请联系网站开发人员！'
      // }
      this.messageBoxConfig = {...this.messageBoxConfig, ...config}
      this.showMessageBox = true
      setTimeout(() => {
        this.showMessageBox = false
      }, 2000, this)
    }
  },
  watch: {}
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
  display: flex;
  justify-content: center;
  align-items: center;
  /*display: grid;*/
  /*grid-template-columns: 400px;*/
  /*grid-template-rows: 600px;*/
}

#elementUIAlertMessageBox {
  position: fixed;
  top: 10%;
  width: 60%;
  text-align: center;
  left: 0;
  right: 0;
  margin: auto;
}
</style>
