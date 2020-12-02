<template>
  <el-container style="flex-grow: 0">
    <el-header><h1>Welcome To My Website(Test)</h1></el-header>
    <el-main class="login-view-main-form">
      <el-row type="flex" justify="center">
        <el-input
          id="loginUsernameInput"
          placeholder="请输入用户名"
          v-model="username"
          maxlength="20"
          show-word-limit
          clearable>
        </el-input>
      </el-row>
      <el-row type="flex" justify="center">
        <el-input
          placeholder="请输入密码"
          size="medium"
          v-model="password"
          show-password>
        </el-input>
      </el-row>
      <el-row type="flex" justify="space-around">
        <el-col :span="7">
          <el-button @click="loginUp">
            Login Up
          </el-button>
        </el-col>
        <el-col :span="7">
          <el-button type="primary" @click="loginIn">
            Login In
          </el-button>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'Login',
  data: function () {
    return {
      username: 'admin',
      password: '000000'
    }
  },
  methods: {
    loginIn: function () {
      if (this.password === '000000') {
        this.$store.commit('loginIn', this.username)
        this.$router.push('/nav-view')
      } else {
        this.$emit('showMessage', {
          type: 'error',
          title: '错误',
          description: '账号或密码错误！'
        })
      }
    },
    loginUp () {
      this.$emit('showMessage')
    }
  }
}
</script>
<style>
.login-view-main-form {
  height: 300px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
}
</style>
