<script setup lang="ts">
import { useVModels } from '@vueuse/core'

const props = defineProps<{ modelValue: any[] }>()
const { modelValue: tableData } = useVModels(props)

const tableOption = {
  rowKey: 'prop',
  menu: false,
  defaultExpandAll: true,
  addBtn: false,
  refreshBtn: false,
  columnBtn: false,
  column: [
    { label: '按钮名', prop: 'name', width: 100 },
    { label: '按钮值', prop: 'buttonKey', width: 100 },
    { label: '显示条件', prop: 'display' },
    { label: '审批窗口', prop: 'approval' },
  ],
}
</script>

<template>
  <avue-crud :data="tableData || []" :option="tableOption">
    <template #display="{ row, dic }">
      <avue-select v-model="row.display" :dic="dic || []" />
    </template>
    <template #approval="{ row, dic }">
      <avue-select v-model="row.approval" :dic="dic || []" />
    </template>
  </avue-crud>
</template>
