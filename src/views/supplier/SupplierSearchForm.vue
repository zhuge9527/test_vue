<template>
  <el-form :model="criteriaVo" label-width="100px">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-form-item label="供应商名称">
          <el-input v-model="criteriaVo.supplierName"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="供应商代码">
          <el-input v-model="criteriaVo.supplierCode"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="供应商地址">
          <el-input v-model="criteriaVo.address"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-form-item label="是否有效">
          <el-select style="width: 100%;" v-model="criteriaVo.active">
            <el-option label="无效" :value="false"></el-option>
            <el-option label="有效" :value="true"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="供应商负责人">
          <el-input v-model="criteriaVo.master"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label-width="0" class="my-flex-end" style="display: flex;flex-wrap: nowrap;overflow: hidden;">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-button style="width: 100px;" icon="el-icon-refresh-left" type="default" @click="resetForm"
                         size="small">重置
              </el-button>
            </el-col>
            <el-col :span="12">
              <el-button style="width: 100px;" icon="el-icon-search" type="primary" @click="onSearch" size="small">
                查询
              </el-button>
            </el-col>
          </el-row>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
const defaultCriteria = {
  supplierName: 'Apple Office In ShangHai',
  supplierCode: 'APPLE_CODE_A',
  address: undefined,
  active: true,
  master: undefined
}
export default {
  name: 'SupplierSearchForm',
  data () {
    return {
      criteriaVo: {...defaultCriteria}
    }
  },
  methods: {
    onSearch () {
      this.$emit('submit', this.criteriaVo)
    },
    resetForm () {
      this.criteriaVo = defaultCriteria
    }
  }
}
</script>

<style scoped>
.my-flex-end {
  display: flex;
  justify-content: flex-end;
}
</style>
