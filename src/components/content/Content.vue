<template>
  <el-main class="content">
    <router-view/>
  </el-main>
</template>

<script>
export default {
  name: 'Content',
  watch: {
    $route () {
      debugger
      this.$store.commit('pushRouterHistory', this.$route)
    }
  }
}
</script>

<style scoped>
.content {
  margin: 0 2rem;
  background-color: #E9EEF3;
}
</style>
