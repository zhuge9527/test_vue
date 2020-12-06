<template>
  <el-container style="flex-grow: 0; text-align: center">
    <div id="snow-div-list"></div>
    <el-header>
      <h1>Welcome To My Website (Test Version)</h1>
    </el-header>
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
    <el-footer>
      <span>The main technologies used in this project are: Vue, Vuex, Vue Router, ElementUI ...</span>
    </el-footer>
  </el-container>
</template>

<script>
import Vue from 'vue'

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
        this.$message.error('账号或密码错误!')
      }
    },
    loginUp () {
      this.$message.warning('抱歉，该功能尚未完成~')
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
.login-view-main-form {
  margin: 10% 0 30% 0;
  height: 200px;
  padding: 20px 140px;
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
body {
  height: 100vh;
  background: radial-gradient(ellipse at bottom, #5e6063 0%, #0e1744 100%);
  overflow: hidden;
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
