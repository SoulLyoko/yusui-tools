<script setup lang="ts">
import type { FlowDeploy } from '../../api'

import { ref, watchEffect } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useCrud } from '@yusui/composables'
import { Icon } from '@iconify/vue'

import { tableOption } from './option'
import { IsMainVersion, useFlowDeployApi } from '../../api'

const props = defineProps<{ flowModuleId?: string }>()
const emit = defineEmits(['back', 'view', 'edit'])

const { getList, update } = useFlowDeployApi()

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
  if (!props.flowModuleId)
    return
  searchForm.value.flowModuleId = props.flowModuleId
  getDataList()
})

const loading = ref(false)
async function handleSwitchMainVersion(row: FlowDeploy) {
  await ElMessageBox.confirm(`确定将 ${row.flowName}(${row.flowKey}:v${row.version}) 设为主版本?`, '提示', {
    type: 'warning',
  })
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
</script>

<template>
  <avue-crud v-bind="bindVal">
    <template #menu-left>
      <el-button :loading="loading" type="primary" icon="el-icon-arrow-left" @click="emit('back')">
        返回
      </el-button>
    </template>
    <template #menu="{ row }: { row: FlowDeploy }">
      <el-button :loading="loading" type="text" icon="el-icon-view" @click="emit('view', row)">
        查看
      </el-button>
      <el-button :loading="loading" type="text" icon="el-icon-edit" @click="emit('edit', row)">
        编辑
      </el-button>
      <el-button
        :loading="loading"
        :disabled="row.mainVersion === IsMainVersion['是']"
        type="text"
        icon="el-icon-switch"
        @click="handleSwitchMainVersion(row)"
      >
        设为主版本
      </el-button>
    </template>
    <template #flowIcon="{ row }">
      <Icon :icon="row.flowIcon!" width="25" style="display: inline" />
    </template>
  </avue-crud>
</template>
