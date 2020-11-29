<template>
  <!--      <div class="main-container">-->
  <!--        <div-->
  <!--          class="link-div"-->
  <!--          @click="linkView"-->
  <!--          :key="item.id"-->
  <!--          v-for="(item, index) in normalRouterData">-->
  <!--          <router-link :id="item.id" :to="item.to">{{ item.text || index }}</router-link>-->
  <!--        </div>-->
  <!--      </div>-->
  <div class="main-container">
    <el-row :gutter="20" type="flex" justify="space-around" align="center">
      <el-col :span="4" :key="item.id" v-for="item in normalRouterData">
        <div class="navigate-link-div" :class="item.itemClass">
          <router-link :id="item.id" :to="item.to">{{ item.text }}</router-link>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" type="flex" justify="space-around">
      <el-col :span="4" :key="item.id" v-for="item in singlePageRouterData">
        <a class="navigate-link-div navigate-item-specialLevel" :href="item.to">{{ item.text }}</a>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'NavigateMainView',
  data () {
    let normalRouterData = []
    Array.apply(1, {length: 5}).forEach((v, i) => {
      normalRouterData.push({
        id: 'link' + i,
        to: `index/page${i}`,
        text: i,
        itemClass: (i % 2) === 0 ? 'navigate-item-levelA' : 'navigate-item-levelB'
      })
    })
    return {
      normalRouterData: [{
        id: Math.random(),
        to: '',
        text: '',
        itemClass: (Math.random() * 10 % 2) === 0 ? 'navigate-item-levelA' : 'navigate-item-levelB'
      }, ...normalRouterData],
      singlePageRouterData: [{
        id: 'linkSpecial-1',
        to: './singlepageview/Page1',
        text: 'singlepageview/Page1'
      }]
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
/*.main-container {*/
/*  box-sizing: border-box;*/
/*  height: 100%;*/
/*  width: 100%;*/
/*  padding: 100px 200px;*/
/*  display: flex;*/
/*  justify-content: space-around;*/
/*  align-items: center;*/
/*  align-content: space-around;*/
/*}*/

/*.main-container > div {*/
/*  min-width: 80px;*/
/*  padding: 0 10px;*/
/*  height: 100px;*/
/*  background-color: #42b983;*/
/*  line-height: 100px;*/
/*  text-align: center;*/
/*  font-size: 40px;*/
/*}*/

/*.main-container > div > a {*/
/*  text-decoration: none;*/
/*}*/
.main-container {
  height: 100vh;
  width: 100vw;
}

.main-container > .el-row {
  margin-bottom: 1rem;
  /*height: 30vh;*/
}

.navigate-link-div {
  min-height: 1rem;
  background-color: #42b983;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  text-align: center;
}

.navigate-item-specialLevel {
  background-color: #d2f3e4;
}

.navigate-item-levelA {
  background-color: #42b983;
}

.navigate-item-levelB {
  background-color: #42b900;
}
</style>
