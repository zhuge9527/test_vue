<template>
  <el-footer class="toolbar--footer" style="background-color:#97a6b5;" height="40px">
    <slot></slot>
  </el-footer>
</template>

<script>
export default {
  name: 'ToolbarFooter'
}
</script>

<style scoped>
.toolbar--footer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
