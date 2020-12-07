<template>
      <div class="main-container">
        <div
          class="link-div"
          @click="linkView"
          :key="item.id"
          v-for="(item, index) in routerData">
          <router-link :id="item.id" :to="item.to">{{ item.text || index }}</router-link>
        </div>
      </div>
</template>

<script>
export default {
  name: 'NavigateMainView',
  data () {
    let routers = []
    Array.apply(1, {length: 5}).forEach((v, i) => {
      routers.push({
        id: 'link' + i,
        to: `index/page${i}`
      })
    })
    return {
      routerData: [{
        id: 'linkSpecial-1',
        to: 'Index',
        text: 'Index/PageA'
      }, {
        id: 'linkSpecial-2',
        to: 'Home',
        text: '/Home'
      }, ...routers]
    }
  },
  methods: {
    linkView (e) {
      if (e.target.tagName === 'DIV' && e.target.classList.contains('link-div')) {
        let link1Dom = e.target.children[0]
        link1Dom.click()
      }
    }
  }
}
</script>

<style scoped>
.main-container {
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: space-around;
}

.main-container > div {
  min-width: 80px;
  padding: 0 10px;
  height: 100px;
  background-color: #42b983;
  line-height: 100px;
  text-align: center;
  font-size: 40px;
}

.main-container > div > a {
  text-decoration: none;
}
</style>
