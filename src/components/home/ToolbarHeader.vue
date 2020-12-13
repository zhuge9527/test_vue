<template>
  <el-header :height="height" style="background-color:#97a6b5;">
    <span class="toolbar-header-title-span" :style="'line-height: ' + height">
      <slot name="default"></slot>
    </span>
    <slot name="toolbar"></slot>
  </el-header>
</template>

<script>

export default {
  name: 'ToolbarHeader',
  data () {
    return {
      height: '40px'
    }
  }
}
</script>

<style scoped>
.toolbar-header-title-span {
  font-size: 18px;
  color: black;
}
</style>
