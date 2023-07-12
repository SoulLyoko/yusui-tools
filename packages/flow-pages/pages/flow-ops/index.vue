<script setup lang="ts">
import type { FlowCirculateOps, FlowOps } from '../../api'

import { ref } from 'vue'
import { useStorage, watchDebounced } from '@vueuse/core'
import { useCrud } from '@yusui/composables'

import { tableOption } from './option'
import { useFlowCirculateApi, useFlowOpsApi } from '../../api'
import { useFlowForm } from '../../composables'

const debugMode = useStorage('debugMode', false)

const { getTaskOpsList } = useFlowOpsApi()
const { getCirculateOpsList, updateCirculate, removeCirculate } = useFlowCirculateApi()

const {
  bindVal,
  getDataList,
  crudStateRefs: { searchForm, crudOption },
} = useCrud({
  tableOption,
  crudOption: {
    getList: getTaskOpsList,
  },
  searchForm: { status: 2 },
  sortOption: { descs: 'start_time' },
})

watchDebounced(searchForm, getDataList, { debounce: 300, immediate: true, deep: true })

const activeTab = ref('task')
const tabs = [
  { label: '任务', name: 'task', getList: getTaskOpsList },
  { label: '传阅', name: 'circulate', getList: getCirculateOpsList, update: updateCirculate, remove: removeCirculate },
]
function onTabClick({ paneName }: any) {
  const findTab = tabs.find(tab => tab.name === paneName)
  crudOption.value.getList = findTab!.getList
  crudOption.value.update = findTab!.update!
  crudOption.value.remove = findTab!.remove!
  getDataList()
}

const { open, close } = useFlowForm({ type: 'drawer' })
function openFlow(row: FlowOps | FlowCirculateOps) {
  open({
    flowKey: row.flowKey,
    taskId: row.taskId,
    instanceId: row.flowInstanceId,
    debug: debugMode.value,
    circulateId: (row as FlowCirculateOps).id,
    formPath: (row as FlowOps).formPath,
    onComplete() {
      close()
      getDataList()
    },
  })
}
</script>

<template>
  <el-tabs v-model="activeTab" @tab-click="onTabClick">
    <el-tab-pane v-for="tab in tabs" :key="tab.name" :label="tab.label" :name="tab.name" />
  </el-tabs>

  <avue-crud v-bind="bindVal" :permission="{ menu: activeTab === 'circulate' }">
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
