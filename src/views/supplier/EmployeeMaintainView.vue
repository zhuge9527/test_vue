<template>
  <el-main>
    <el-form class="employee-form" model="criteria" label-width="80px" :height="100">
      <el-form-item prop="name" label="姓名">
        <el-input v-model="criteria.name"/>
      </el-form-item>
      <el-form-item prop="name" label="工号">
        <el-input v-model="criteria.staffNo"/>
      </el-form-item>
      <el-form-item>
        <el-row class="search-form-button-container">
          <el-button type="default" icon="el-icon-refresh-left">重 置</el-button>
          <el-button type="primary" icon="el-icon-search">查 询</el-button>
        </el-row>
      </el-form-item>
    </el-form>
    <el-table
      :data="tableData"
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      stripe border height="100%"
      :highlight-current-row="true"
      width="100%"
    >
      <el-table-column label="姓名" width="100px" prop="name"></el-table-column>
      <el-table-column label="级别" width="100px" prop="name"></el-table-column>
      <el-table-column label="工号" width="100px" prop="name"></el-table-column>
      <el-table-column label="性别" width="100px" prop="name"></el-table-column>
      <el-table-column label="工龄" width="100px" prop="name"></el-table-column>
      <el-table-column label="在职" width="100px" prop="name"></el-table-column>
      <el-table-column label="入职日期" width="150px" prop="name"></el-table-column>
      <el-table-column label="合同日期" width="150px" prop="name"></el-table-column>
    </el-table>
  </el-main>
</template>

<script>
export default {
  name: 'EmployeeSearchView',
  data () {
    return {
      loading: false,
      criteria: {
        name: undefined,
        staffNo: undefined
      },
      tableData: []
    }
  }
}
</script>

<style scoped>
.employee-form {
  display: flex;
  justify-content: space-between;
}

.employee-form > div {
  flex: 1;
}
.search-form-button-container > button:last-child {
  margin-left: 40px;
}

.search-form-button-container {
  display: flex;
  justify-content: flex-end;
  flex-wrap: nowrap;
}
</style>
