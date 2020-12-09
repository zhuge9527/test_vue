<template>
  <el-table
    :data="tableData"
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
      tableData: [...(function () {
        let data = []
        for (let i = 0; i < 30; i++) {
          let no = Math.floor(Math.random() * 1000000)
          data.push({
            supplierName: `Supplier ${no}`,
            supplierCode: `${no}`,
            supplierAddress: `梧桐路 ${no} 号`,
            activeEndDate: new Date().toLocaleDateString(),
            supplierMaster: `SupplierMater ${no}`,
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          })
        }
        return data
      }()), {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
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
