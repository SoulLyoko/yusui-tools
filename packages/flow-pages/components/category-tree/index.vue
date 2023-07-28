<script setup lang="ts">
import { useCrud } from '@yusui/composables'
import { useConfigProvider, useFlowCategoryApi } from '@yusui/flow-pages'

import { treeOption } from './option'

const emit = defineEmits(['node-click'])

const { request } = useConfigProvider()

const {
  crudStateRefs: { formData, tableData },
  getDataList,
  handleSave,
  handleUpdate,
  handleDel,
} = useCrud({
  crudOption: {
    rowKey: 'id',
    ...useFlowCategoryApi(request),
    dataPath: 'res.data',
  },
  tableOption: treeOption,
  pageOption: { pageSize: 20 },
})
getDataList()

function handleTreeSave(node: any, data: any, done: () => void, loading: () => void) {
  handleSave(data, done, loading)
}
function handleTreeUpdate(node: any, data: any, done: () => void, loading: () => void) {
  handleUpdate(data, Number.NaN, done, loading)
}
async function handleTreeDel(node: any, done: () => void) {
  await handleDel(node.data, Number.NaN)
  done()
}
</script>

<template>
  <avue-tree
    v-model="formData"
    :option="treeOption"
    :data="tableData"
    @node-click="emit('node-click', $event)"
    @save="handleTreeSave"
    @update="handleTreeUpdate"
    @del="handleTreeDel"
  />
</template>
