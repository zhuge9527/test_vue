<template>
  <div id="login" class="demo-input-suffix">
    <h1>Welcome To My Website(Test)</h1>
    <el-input
      id="loginUsernameInput"
      placeholder="请输入用户名"
      v-model="username"
      clearable>
    </el-input>
    <el-input
      placeholder="请输入密码"
      size="medium"
      v-model="password"
      show-password>
    </el-input>
    <el-button>
      Login Up
    </el-button>
    <el-button type="primary" @click="loginIn">
      Login In
    </el-button>
  </div>
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
      if (this.username && this.password) {
        this.$router.push('/home')
      } else {
        throw new Error('213')
      }
    }
  }
}
</script>

<style>
#login {
  padding: 300px 50px 0;
  margin: 0 auto;
  width: 600px;
  height: 100%;
}

#login h1 {
  margin-bottom: 50px;
}

#login input {
  margin: 5px 10px;
  width: 300px;
}
</style>
