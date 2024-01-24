<script setup lang="ts">
import type { FlowOps } from '@yusui/flow-pages'

import { ElMessage } from 'element-plus'
import { useStorage, watchDebounced } from '@vueuse/core'
import { useCrud } from '@yusui/composables'
import { TaskStatus, taskNodeTypeDic, useConfigProvider, useFlowForm, useFlowOpsApi } from '@yusui/flow-pages'

import { tableOption } from './option'

const debugMode = useStorage('debugMode', false)

const { request } = useConfigProvider()
const { getTaskOpsList } = useFlowOpsApi(request)

const {
  bindVal,
  getDataList,
  crudStateRefs: { searchForm },
} = useCrud({
  tableOption,
  crudOption: {
    getList: getTaskOpsList,
  },
  searchForm: { status: TaskStatus['待办'], taskNodeType: 'userTask' },
  sortOption: { descs: 'start_time' },
})

watchDebounced(searchForm, getDataList, { debounce: 300, immediate: true, deep: true })

const { open, close } = useFlowForm()
function openFlow(row: FlowOps) {
  open({
    flowKey: row.flowKey,
    taskId: row.taskId,
    instanceId: row.flowInstanceId,
    debug: debugMode.value,
    onComplete() {
      close()
      ElMessage.success('操作成功')
      getDataList()
    },
  })
}
</script>

<template>
  <avue-crud v-bind="bindVal">
    <template #menu-left>
      <avue-radio v-model="searchForm.taskNodeType" :dic="taskNodeTypeDic" button />
    </template>
    <template #menu-right>
      <el-button type="text">
        <el-switch v-model="debugMode" inline-prompt active-text="debug" inactive-text="debug" />
      </el-button>
    </template>
    <template #processTitle="{ row }">
      <el-text type="primary" style="cursor: pointer;" @click="openFlow(row)">
        {{ row.processTitle || "无标题" }}
      </el-text>
    </template>
  </avue-crud>
</template>
