<script setup lang="ts">
import type { FlowDeploy } from '@yusui/flow-pages'

import { ref, watchEffect } from 'vue'
import { watchDebounced } from '@vueuse/core'
import { ElMessage, ElMessageBox } from 'element-plus'
import { Icon } from '@iconify/vue'
import { useCrud } from '@yusui/composables'
import { IsMainVersion, useConfigProvider, useFlowDeployApi } from '@yusui/flow-pages'

import { tableOption } from './option'

const props = defineProps<{ flowModuleId?: string }>()
const emit = defineEmits(['back', 'view', 'edit'])

const { request } = useConfigProvider()
const { getList, update, remove } = useFlowDeployApi(request)

const {
  bindVal,
  crudStateRefs: { searchForm },
  getDataList,
} = useCrud({
  tableOption,
  crudOption: {
    getList,
    dataPath: 'res.data',
  },
})

watchEffect(() => {
  searchForm.value.flowModuleId = props.flowModuleId
})
watchDebounced(searchForm, getDataList, { debounce: 300, immediate: true, deep: true })

const loading = ref(false)
async function handleSwitchMainVersion(row: FlowDeploy) {
  await ElMessageBox.confirm(`确定将 ${row.flowName}(${row.flowKey}:v${row.version}) 设为主版本?`, '提示', { type: 'warning' })
  loading.value = true
  update({
    flowDeployId: row.flowDeployId,
    flowModuleId: row.flowModuleId,
    mainVersion: 1,
  })
    .then(() => {
      ElMessage.success('设置成功')
      getDataList()
    })
    .finally(() => {
      loading.value = false
    })
}

async function handleDel(row: FlowDeploy) {
  const { value } = await ElMessageBox.prompt('请输入确认删除的流程标识', '提示', { type: 'warning' })
  if (value !== row.flowKey)
    return
  await remove(row.flowDeployId!)
  ElMessage.success('删除成功')
  getDataList()
}
</script>

<template>
  <avue-crud v-bind="bindVal">
    <template #menu-left>
      <el-button :loading="loading" type="primary" icon="el-icon-arrow-left" @click="emit('back')">
        返回
      </el-button>
    </template>
    <template #menu-btn="{ row }">
      <el-dropdown-item icon="el-icon-view" @click="emit('view', row)">
        查看
      </el-dropdown-item>
      <el-dropdown-item icon="el-icon-edit" @click="emit('edit', row)">
        编辑
      </el-dropdown-item>
      <el-dropdown-item icon="el-icon-delete" @click="handleDel(row)">
        删除
      </el-dropdown-item>
      <el-dropdown-item icon="el-icon-switch" :disabled="row.mainVersion === IsMainVersion['是']" @click="handleSwitchMainVersion(row)">
        设为主版本
      </el-dropdown-item>
    </template>
    <template #flowIcon="{ row }">
      <Icon :icon="row.flowIcon!" width="25" style="display: inline" />
    </template>
  </avue-crud>
</template>
