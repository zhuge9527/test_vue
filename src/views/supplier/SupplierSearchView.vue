<template>
  <div class="main-container">
    <supplier-search-form class="main-container-form" ref="searchForm" @submit="searchData"/>
    <supplier-search-table class="main-container-table" ref="resultTable"/>
  </div>
</template>

<script>
import SupplierSearchForm from './SupplierSearchForm'
import SupplierSearchTable from './SupplierSearchTable'

export default {
  name: 'SupplierSearchView',
  components: {SupplierSearchForm, SupplierSearchTable},
  methods: {
    searchData: function (criteriaVo) {
      this.$refs.resultTable.loading = true
      this.$axios.post('/server/supplier/search', criteriaVo)
        .then(res => {
          this.$refs.resultTable.loading = false
          if (res.status === 200) {
            const data = res.data
            data.forEach(item => {
              if (item['expire_date']) {
                item['expire_date'] = new Date(item['expire_date']).toLocaleString()
              }
              if (item['dateOfRegistration']) {
                item['dateOfRegistration'] = new Date(item['dateOfRegistration']).toLocaleString()
              }
            })
            this.$refs.resultTable.tableData = data
          } else {
            this.$message.error(res.data)
          }
        })
        .catch(err => {
          console.trace(err)
        })
    }
  }
}
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  height: 100%;
}
</style>
