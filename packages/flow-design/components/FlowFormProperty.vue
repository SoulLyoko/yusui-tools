<script setup lang="ts">
import type { FormPropertyItem } from '../types'

import { computed, onMounted } from 'vue'
import { createReusableTemplate, useVModels } from '@vueuse/core'
import { filterTree, sleep } from '@yusui/utils'

import { useInjectState } from '../composables/state'
import { formColumnToDic, mergeFormProperty } from '../utils'
import { defaultFormProperty } from '../constants'
import FlowCheckbox from './FlowCheckbox.vue'

const props = defineProps<{ modelValue: FormPropertyItem[] }>()
const { modelValue: tableData } = useVModels(props, undefined, { defaultValue: [] })

const [DefinePropSelect, PropSelect] = createReusableTemplate<{
  modelValue: string
  'onUpdate:modelValue': (val: string) => void
}>()

const { dataOptions } = useInjectState()
onMounted(async () => {
  await sleep()
  tableData.value = mergeFormProperty(dataOptions.value?.formPropertyList ?? [], tableData.value ?? [])
})

const propDic = computed(() => {
  return formColumnToDic(dataOptions.value?.formPropertyList ?? [])
})

const tableOption = computed(() => {
  return {
    rowKey: 'prop',
    defaultExpandAll: true,
    column: [
      { prop: '_index', hide: true },
      { label: '', prop: 'prop', component: PropSelect, type: 'select', dicData: propDic.value ?? [] },
      { label: '显示', prop: 'display', width: 40, component: FlowCheckbox },
      { label: '禁用', prop: 'disabled', width: 40, component: FlowCheckbox },
      { label: '详情', prop: 'detail', width: 40, component: FlowCheckbox },
      { label: '只读', prop: 'readonly', width: 40, component: FlowCheckbox },
      { label: '必填', prop: 'required', width: 40, component: FlowCheckbox },
      { label: '校验', prop: 'validate', width: 40, component: FlowCheckbox },
    ],
  }
})

function handleAdd() {
  tableData.value.push({ ...defaultFormProperty })
}

function handleAddChild(prop: string) {
  const row = tableData.value.find(e => e.prop === prop)!
  if (!row.children)
    row.children = []
  row.children.push({ ...defaultFormProperty, $cellEdit: true } as any)
}

function handleDel(prop: string) {
  tableData.value = filterTree(tableData.value, e => e.prop !== prop, { flat: false })
}

function showAddChildBtn(prop: string) {
  const hasChild = !!propDic.value.find(e => e.value === prop && e.children?.length)
  return hasChild
}
</script>

<template>
  <DefinePropSelect v-slot="{ modelValue: prop, 'onUpdate:modelValue': setProp }">
    <div style="display:flex;">
      <avue-input-tree :model-value="prop" :dic="propDic" default-expand-all @update:modelValue="setProp" />
      <el-button v-if="showAddChildBtn(prop)" type="primary" icon="el-icon-plus" text @click="handleAddChild(prop)" />
      <el-button type="danger" icon="el-icon-delete" text @click="handleDel(prop)" />
    </div>
  </DefinePropSelect>

  <div>
    <div style="position:absolute;left:12px;top:16px;z-index:10;">
      <el-button type="primary" icon="el-icon-plus" size="small" circle @click="handleAdd" />
      <strong> 字段</strong>
    </div>
    <avue-dynamic v-model="tableData" :children="tableOption" />
  </div>
</template>
