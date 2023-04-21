<script setup lang="ts">
import type { TableTemplate } from '../api/table-template'

import { ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useCrud } from '@yusui/composables'

import { tableOption } from './option'
import { create, deploy, getList, remove, update } from '../api/table-template'
import { getParam } from '../api/flow-param'

const {
  bindVal,
  crudStateRefs: { formData },
  getDataList,
  afterGetList,
  beforeOpen,
  beforeSave,
  beforeUpdate,
} = useCrud({
  crudOption: {
    getList,
    create,
    update,
    remove,
  },
  tableOption,
})

const defaultFields = ref([])
afterGetList(() => {
  getParam('table.default.fields').then((res) => {
    defaultFields.value = res.data
  })
})

getDataList()

beforeOpen((type) => {
  if (type === 'add')
    formData.value.tableFields = defaultFields.value
  else
    formData.value.tableFields = JSON.parse(formData.value.tableFields as any)
})
beforeSave((row) => {
  row.tableFields = JSON.stringify(row.tableFields)
})
beforeUpdate((row) => {
  row.tableFields = JSON.stringify(row.tableFields)
})

const loading = ref(false)
async function handleDeploy(row: TableTemplate) {
  await ElMessageBox.confirm('部署将自动生成数据库表，是否确认？', '提示', { type: 'success' })
  loading.value = true
  deploy({ id: row.id })
    .then(() => {
      ElMessage.success('部署成功')
      getDataList()
    })
    .finally(() => {
      loading.value = false
    })
}
</script>

<template>
  <avue-crud v-bind="bindVal">
    <template #menu="{ row }">
      <el-button type="text" icon="el-icon-upload" @click="handleDeploy(row)">
        部署
      </el-button>
    </template>
  </avue-crud>
</template>
