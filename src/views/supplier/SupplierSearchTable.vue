<template>
  <el-table
    :data="tableData"
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    stripe border :height="tableHeight+'%'"
    :highlight-current-row="true"
    :header-row-style="headerRowStyle || tableStyle.headerRowStyle"
    style="width: 100%">
    <el-table-column prop="supplierName" label="供应商名称" minWidth="120"></el-table-column>
    <el-table-column prop="supplierCode" label="供应商名称" minWidth="120"></el-table-column>
    <el-table-column prop="supplierAddress" label="供应商地址" minWidth="120"></el-table-column>
    <el-table-column prop="activeEndDate" label="有效期截止日期" minWidth="100"></el-table-column>
    <el-table-column prop="supplierMaster" label="供应商负责人" minWidth="120"></el-table-column>
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data () {
    return {
      tableStyle: {
        headerRowStyle: {
          'background-color': 'red'
        }
      },
      tableData: [],
      loading: false
    }
  },
  props: {
    tableHeight: Number
  },
  methods: {
    headerRowStyle () {
    }
  }
}
</script>

<style scoped>
</style>
