<template>
  <div class="login-view-outer-container">
    <el-container class="login-view-main-container">
      <div id="snow-div-list"></div>
      <el-header>
        <h1>Welcome To My Website (Test Version)</h1>
      </el-header>
      <el-main class="login-view-main-form">
        <el-form ref="loginForm" :model="loginData">
          <el-form-item required hide-required-asterisk prop="username">
            <el-input
              id="loginUsernameInput"
              placeholder="请输入用户名"
              v-model="loginData.username"
              maxlength="20"
              show-word-limit
              clearable>
            </el-input>
          </el-form-item>
          <el-form-item required hide-required-asterisk prop="password">
            <el-input
              placeholder="请输入密码"
              size="medium"
              v-model="loginData.password"
              show-password>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="loginUp">
              Login Up
            </el-button>
            <el-button type="primary" @click="loginIn">
              Login In
            </el-button>
          </el-form-item>
        </el-form>
      </el-main>
      <el-footer>
        <span>The main technologies used in this project are: Vue, Vuex, Vue Router, ElementUI ...</span>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'Login',
  data: function () {
    return {
      loginData: {
        username: localStorage.getItem('test_vue_last_username') || undefined,
        password: undefined
      }
    }
  },
  watch: {
    'loginData.username': (() => {
      let timeout
      return (newValue) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          localStorage.setItem('test_vue_last_username', newValue)
        }, 2000)
      }
    })()
  },
  methods: {
    operateAfterValidate (callback) {
      this.$refs.loginForm.validate(isValid => {
        if (isValid) {
          const formData = {
            username: this.loginData.username,
            password: this.loginData.password
          }
          callback(formData)
        }
      })
    },
    loginIn () {
      this.operateAfterValidate(formData => {
        this.$axios.post('/server/loginIn', formData).then(res => {
          if (res.data.success) {
            this.$store.commit('loginIn', this.loginData.username)
            this.$router.push('/nav-view')
          } else {
            this.$message.error(res.data.message || '账号或密码错误!')
          }
        })
      })
    },
    loginUp () {
      this.operateAfterValidate(formData => {
        this.$axios.post('/server/loginUp', formData).then(res => {
          if (res.data.success) {
            this.loginData.password = undefined
            this.$message.success(res.data.message)
          } else {
            this.$message.error(res.data.message)
          }
        })
      })
    }
  },
  mounted () {
    let SnowBackground = Vue.extend({
      render (h) {
        let snowDomList = []
        for (let i = 0; i < 100; i++) {
          snowDomList.push(h('div', {
            class: 'snow-item'
          }))
        }
        return h('div', {class: 'snow-div-list'}, snowDomList)
      }
    })
    let background = new SnowBackground()
    background.$mount('#snow-div-list')
  }
}
</script>
<style lang="scss">
.login-view-outer-container {
  height: 100vh;
  width: 100vw;
  background: radial-gradient(ellipse at bottom, #5e6063 0%, #0e1744 100%);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-view-main-container {
  text-align: center;
}

.login-view-main-form {
  min-height: 200px;
  width: 320px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.snow-div-list {
  position: fixed;
  left: 0;
  top: 0;
  filter: drop-shadow(0 0 10px white);
}

@function random_range($min, $max) {
  $rand: random();
  $random_range: $min + floor($rand * (($max - $min) + 1));
  @return $random_range;
}

.snow-item {
  $total: 200;
  position: absolute;
  width: 10px;
  height: 10px;
  background: white;
  border-radius: 50%;

  @for $i from 1 through $total {
    $random-x: random(1000000) * 0.0001vw;
    $random-offset: random_range(-100000, 100000) * 0.0001vw;
    $random-x-end: $random-x + $random-offset;
    $random-x-end-yoyo: $random-x + ($random-offset / 2);
    $random-yoyo-time: random_range(30000, 80000) / 100000;
    $random-yoyo-y: $random-yoyo-time * 100vh;
    $random-scale: random(10000) * 0.0001;
    $fall-duration: random_range(10, 30) * 1s;
    $fall-delay: random(30) * -1s;

    &:nth-child(#{$i}) {
      opacity: random(10000) * 0.0001;
      transform: translate($random-x, -10px) scale($random-scale);
      animation: fall-#{$i} $fall-duration $fall-delay linear infinite;
    }

    @keyframes fall-#{$i} {
      #{percentage($random-yoyo-time)} {
        transform: translate($random-x-end, $random-yoyo-y) scale($random-scale);
      }

      to {
        transform: translate($random-x-end-yoyo, 100vh) scale($random-scale);
      }
    }
  }
}

</style>
