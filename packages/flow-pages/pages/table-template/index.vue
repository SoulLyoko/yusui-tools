<script setup lang="ts">
import type { TableTemplate } from '../../api'

import { ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useCrud } from '@yusui/composables'

import { tableOption } from './option'
import { useFlowParamApi, useTableTemplateApi } from '../../api'

const {
  bindVal,
  crudStateRefs: { formData },
  getDataList,
  beforeOpen,
  beforeSave,
  beforeUpdate,
} = useCrud({
  crudOption: useTableTemplateApi(),
  tableOption,
})

getDataList()

const { data: defaultFields } = useFlowParamApi().useParam('table.default.fields' as const)
beforeOpen((type) => {
  if (type === 'add')
    formData.value.tableFields = defaultFields.value
  else
    formData.value.tableFields = JSON.parse(formData.value.tableFields as string)
})
beforeSave((row) => {
  row.tableFields = JSON.stringify(row.tableFields)
})
beforeUpdate((row) => {
  row.tableFields = JSON.stringify(row.tableFields)
})

const { deploy } = useTableTemplateApi()
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
