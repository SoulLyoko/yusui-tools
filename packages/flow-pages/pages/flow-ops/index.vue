<script setup lang="ts">
import type { FlowFormProps } from '../../composables'
import type { FlowOps } from '../../api'

import { ref } from 'vue'
import { useStorage } from '@vueuse/core'
import { useCrud } from '@yusui/composables'

import { tableOption } from './option'
import { useFlowOpsApi } from '../../api'
import { useFlowForm } from '../../composables'

const debugMode = useStorage('debugMode', false)

const { getList } = useFlowOpsApi()

const {
  bindVal,
  getDataList,
} = useCrud({
  tableOption,
  crudOption: {
    getList,
  },
  searchForm: {
    status: 2,
  },
  sortOption: {
    descs: 'start_time',
  },
})
getDataList()

const flowProps = ref<FlowFormProps>({})
const { open, close } = useFlowForm(flowProps, { type: 'drawer' })
function openFlow(row: FlowOps) {
  flowProps.value = {
    flowKey: row.flowKey,
    taskId: row.taskId,
    instanceId: row.flowInstanceId,
    debug: debugMode.value,
    onComplete: () => {
      close()
      getDataList()
    },
  }
  open()
}
</script>

<template>
  <avue-crud v-bind="bindVal">
    <template #menu-right>
      <el-button type="text">
        <el-switch v-model="debugMode" inline-prompt active-text="debug" inactive-text="debug" />
      </el-button>
    </template>
    <template #processTitle="{ row }">
      <el-link type="primary" :underline="false" @click="openFlow(row)">
        {{ row.processTitle || "无标题" }}
      </el-link>
    </template>
  </avue-crud>
</template>
