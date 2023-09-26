<script setup lang="ts">
import type { AvueTreeOption } from '@smallwei/avue'
import type { FlowCategory } from '@yusui/flow-pages'

import { useCrud } from '@yusui/composables'
import { useConfigProvider, useFlowCategoryApi } from '@yusui/flow-pages'

const emit = defineEmits(['node-click'])

const treeOption: AvueTreeOption<FlowCategory> = {
  defaultExpandAll: true,
  props: { label: 'name', value: 'id' },
  filter: true,
  formOption: {
    span: 24,
    column: [
      {
        label: '分类名称',
        prop: 'name',
        rules: [{ required: true, message: '请输入分类名称' }],
      },
      { label: '描述', prop: 'remark' },
      { label: '排序', prop: 'sort', type: 'number' },
    ],
  },
}

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
  sortOption: {
    ascs: 'sort',
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
