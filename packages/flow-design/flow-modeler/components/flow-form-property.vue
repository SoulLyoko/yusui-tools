<script setup lang="ts">
import { useVModels } from '@vueuse/core'

const props = defineProps<{
  modelValue: any[]
}>()
const { modelValue: tableData } = useVModels(props)

const tableOption = {
  rowKey: 'prop',
  menu: false,
  defaultExpandAll: true,
  addBtn: false,
  refreshBtn: false,
  columnBtn: false,
  column: [
    { label: '字段', prop: 'label' },
    { label: '属性', prop: 'prop' },
    { label: '显示', prop: 'display', width: 40 },
    { label: '禁用', prop: 'disabled', width: 40 },
    { label: '详情', prop: 'detail', width: 40 },
    { label: '只读', prop: 'readonly', width: 40 },
    { label: '必填', prop: 'required', width: 40 },
  ],
}
</script>

<template>
  <avue-crud :data="tableData" :option="tableOption">
    <template #display="{ row }">
      <el-checkbox v-model="row.display" />
    </template>
    <template #readonly="{ row }">
      <el-checkbox v-model="row.readonly" />
    </template>
    <template #disabled="{ row }">
      <el-checkbox v-model="row.disabled" />
    </template>
    <template #detail="{ row }">
      <el-checkbox v-model="row.detail" />
    </template>
    <template #required="{ row }">
      <el-checkbox v-model="row.required" />
    </template>
  </avue-crud>
</template>
