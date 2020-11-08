<template>
<div id="pageBView">
  <span>erer</span>
  <span>sad
    {{pageB}}
  </span>
</div>
</template>

<script>
export default {
  name: 'PageB',
  data: function () {
    return {
      pageB: 'Test Page B'
    }
  }
}
</script>

<style scoped>
span {
  line-height: 50px;
  font-size: 30px
}
</style>
