<script setup lang="ts">
import type { TableTemplate } from '@yusui/flow-pages'

import { ref, watchEffect } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useCrud } from '@yusui/composables'
import { differenceBy } from 'lodash-es'
import { useConfigProvider, useFlowParamApi, useTableTemplateApi } from '@yusui/flow-pages'

import { tableOption } from './option'

const { request } = useConfigProvider()

const {
  bindVal,
  crudStateRefs: { formData, defaults },
  getDataList,
  afterOpen,
  beforeSubmit,
} = useCrud({
  crudOption: useTableTemplateApi(request),
  tableOption,
})

getDataList()

const { data: defaultFields } = useFlowParamApi(request).useParam('table.default.fields')
afterOpen((type) => {
  formData.value.defaultFields = defaultFields.value ?? []
  if (type === 'edit') {
    const tableFields: any[] = JSON.parse(formData.value.tableFields as string)
    formData.value.editFields = differenceBy(tableFields, defaultFields.value ?? [], 'name')
  }
})
beforeSubmit((row) => {
  const tableFields = [...row.defaultFields, ...row.editFields]
  row.tableFields = JSON.stringify(tableFields)
})

const showDefaultFields = ref(false)
watchEffect(() => {
  if (defaults.value?.defaultFields)
    defaults.value.defaultFields.display = showDefaultFields.value
})

const { deploy, getFields } = useTableTemplateApi(request)
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

function handleGetFields() {
  getFields({ tableName: formData.value.tableName }).then((res) => {
    if (!res.data?.length)
      return ElMessage.warning('未找到该表')
    formData.value.editFields = res.data
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
    <template #tableName-form>
      <el-input v-model="formData.tableName" placeholder="请输入 表名">
        <template #append>
          <el-button type="primary" size="default" @click="handleGetFields">
            导入已有表
          </el-button>
        </template>
      </el-input>
    </template>
    <template #editFields-label>
      <div>
        数据库字段
        <br>
        <el-tooltip content="显示默认字段">
          <el-switch v-model="showDefaultFields" />
        </el-tooltip>
      </div>
    </template>
  </avue-crud>
</template>
