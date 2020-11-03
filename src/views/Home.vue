<template>
  <div id="home">
    <Menu class="menu"></Menu>
    <MainContent class="menu"></MainContent>
  </div>
</template>

<script>
import Menu from './Menu'
import MainContent from './Content'
export default {
  name: 'Home',
  components: {Menu, MainContent}
}
</script>

<style scoped>
#home {
  flex: content;
}
</style>
