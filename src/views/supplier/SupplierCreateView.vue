<template>
  <el-main>
    <ToolbarHeader>创建供应商</ToolbarHeader>
    <el-scrollbar :wrap-style="{'overflow': 'hidden'}">
        <el-form class="main-form"
          :ref="formName" :rules="rules" :model="supplierData" label-position="top" label-width="200px"
          size="medium" :status-icon="true">
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="供应商名称" prop="name">
                <el-input v-model=" supplierData.name"/>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="供应商代码" prop="code">
                <el-input v-model="supplierData.code"/>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="联系电话" prop="telephone">
                <el-input v-model="supplierData.telephone">
                  <template slot="prepend">+86</template>
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="法人代表">
                <el-input v-model="supplierData.legalRepresentative"/>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="邮编号码">
                <el-input v-model="supplierData.postcodeNumber"/>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="注册日期">
                <el-date-picker v-model="supplierData.dateOfRegistration" style="width: 100%;"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="开户银行">
                <el-input v-model="supplierData.bankOfDeposit"/>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="组织机构代码">
                <el-input v-model="supplierData.organizationCode"/>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="负责人">
                <el-input v-model="supplierData.director"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="3">
              <el-form-item label="是否有效" label->
                <el-switch v-model="supplierData.active"/>
              </el-form-item>
            </el-col>
            <el-col :span="9">
              <el-form-item label="公司网址">
                <el-input v-model="supplierData.companyWebsite">
                  <template slot="prepend">https://</template>
                  <template slot="append">.com</template>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="有效期截止日期">
                <el-date-picker
                  v-model="supplierData.effectiveTime"
                  style="width: 100%;"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  :default-time="['00:00:00', '23:59:59']"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="公司地址">
            <el-input v-model="supplierData.address"/>
          </el-form-item>
          <el-form-item label="主要产品及服务">
            <el-select v-model="supplierData.productsAndServices"
                       style="width: 100%;"
                       :multiple="true"
                       :multiple-limit='4'
                       size="medium">
              <el-option v-for="item in productsAndServicesData"
                         :label="item.label"
                         :value="item.value"
                         :key="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item v-if="false" label="主要产品及服务">
            <el-checkbox-group v-model="supplierData.productsAndServices" :min="1" :max="4">
              <el-checkbox v-for="item in productsAndServicesData" :key="item.value" :label="item.value" name="value">
                {{ item.label }}
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="备注">
            <el-input type="textarea" v-model="supplierData.remark" aria-placeholder="123"/>
          </el-form-item>
  </el-form>
    </el-scrollbar>
    <ToolbarFooter>
      <el-button size="mini" @click="resetData">重置</el-button>
      <el-button size="mini" type="primary" @click="saveData">创建</el-button>
    </ToolbarFooter>
  </el-main>
</template>

<script>
import ToolbarHeader from '../../components/home/ToolbarHeader'
import ToolbarFooter from '../../components/home/ToolbarFooter'

const productsAndServicesData = [
  {label: '集卡运输', value: '1'},
  {label: '零担运输', value: '2'},
  {label: '整车运输', value: '3'},
  {label: '省内寄送', value: '4'},
  {label: '一日速达', value: '5'},
  {label: '最优寄送', value: '6'},
  {label: '其他', value: '0'}
]
let defaultStartTime = new Date()
defaultStartTime.getFullYear()
let defaultEndTime = new Date()
defaultEndTime.setFullYear(defaultStartTime.getFullYear() + 1)
let defaultData = {
  name: '',
  code: '',
  telephone: null,
  legalRepresentative: '',
  postcodeNumber: '000000',
  dateOfRegistration: defaultStartTime,
  bankOfDeposit: '',
  organizationCode: '',
  director: '',
  active: true,
  companyWebsite: '',
  productsAndServices: ['1', '3'],
  effectiveTime: [defaultStartTime, defaultEndTime],
  address: '',
  remark: ''
}
const formName = 'supplierForm'
const requiredMessage = '该项为必填项'
export default {
  name: 'SupplierCreateView',
  components: {ToolbarHeader, ToolbarFooter},
  data () {
    return {
      formName: formName,
      productsAndServicesData: productsAndServicesData,
      supplierData: {...defaultData},
      rules: {
        name: [
          {required: true, message: requiredMessage, trigger: 'blur'},
          {min: 4, max: 20, message: '最小长度为4, 最大长度为20', trigger: 'blur'}
        ],
        code: [
          {required: true, message: requiredMessage, trigger: 'blur'},
          {min: 4, max: 20, message: '最小长度为4, 最大长度为20', trigger: 'blur'}
        ],
        telephone: [
          {type: 'pattern', pattern: /^[1][345789][0-9]{9}$/, message: '号码格式不正确', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    resetData () {
      this.$refs[formName].resetFields()
    },
    saveData () {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let startTime = this.supplierData.effectiveTime[0]
          let endTime = this.supplierData.effectiveTime[1]
          console.log(startTime, endTime)
          this.$axios.post('/server/supplier', this.supplierData).then(result => {
            if (result.status === 200) {
              this.$message.success({message: '创建成功！', center: true})
              this.resetData()
            }
          })
        } else {
          this.$message.error('表单中存在错误!请修改')
          return false
        }
      })
    }
  },
  watch: {
    supplierData (oldValue, newValue) {
      return newValue
    }
  }
}
</script>

<style scoped>
/deep/ .el-scrollbar__wrap {
  overflow-x: hidden;
}
.main-form {
  margin: 10px 10px 0 10px;
}
</style>
