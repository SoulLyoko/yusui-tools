<script setup lang="ts">
import type { FormPropertyItem } from '../types'
import type { AvueFormOption, DicItem } from '@smallwei/avue'

import { createReusableTemplate, useVModels } from '@vueuse/core'
import { filterTree, sleep } from '@yusui/utils'
import { computed, onMounted, ref } from 'vue'

import { useInjectState } from '../composables/state'
import { formColumnToDic, getFormColumn } from '../utils'
import FlowCheckbox from './FlowCheckbox.vue'
import FlowFormPropertyExtra from './FlowFormPropertyExtra.vue'

const props = defineProps<{ modelValue: FormPropertyItem[] }>()
const { modelValue: tableDataModel } = useVModels(props, undefined, { defaultValue: [] })

const [DefinePropSelect, PropSelect] = createReusableTemplate<{
  'modelValue': string
  'onUpdate:modelValue': (val: string) => void
  'dicData': DicItem[]
}>()

const { dataOptions } = useInjectState()
const formOptions = computed(() => {
  return dataOptions.value?.formOptions?.filter(e => e.prop) ?? []
})

onMounted(async () => {
  await sleep()
  tableDataModel.value?.forEach((e, i) => e.prop ??= formOptions.value[i].prop)
})

const activeTab = ref(0)

const tableFormOption = computed<AvueFormOption<FormPropertyItem>>(() => {
  const formOption = formOptions.value[activeTab.value]
  const propDic = formColumnToDic(getFormColumn(formOption))
  return {
    menuBtn: false,
    labelWidth: 120,
    span: 8,
    column: [
      { label: '表单显示', prop: 'display', component: FlowCheckbox, labelTip: '不受字段配置控制' },
      { label: '表单禁用', prop: 'disabled', component: FlowCheckbox, labelTip: '不受字段配置控制' },
      { label: '表单详情', prop: 'detail', component: FlowCheckbox, labelTip: '不受字段配置控制' },
      { label: '全部字段显示', prop: 'allDisplay', component: FlowCheckbox, labelTip: '可通过字段配置覆盖' },
      { label: '全部字段禁用', prop: 'allDisabled', component: FlowCheckbox, labelTip: '可通过字段配置覆盖' },
      { label: '全部字段详情', prop: 'allDetail', component: FlowCheckbox, labelTip: '可通过字段配置覆盖' },
      {
        prop: 'children',
        type: 'dynamic',
        labelWidth: 0,
        span: 24,
        children: {
          rowKey: 'prop',
          defaultExpandAll: true,
          index: false,
          align: 'center',
          column: [
            { label: '', prop: 'prop', component: PropSelect, dicData: propDic },
            { label: '显示', prop: 'display', width: 80, component: FlowCheckbox },
            { label: '禁用', prop: 'disabled', width: 80, component: FlowCheckbox },
            { label: '详情', prop: 'detail', width: 80, component: FlowCheckbox },
            { label: '必填', prop: 'required', width: 80, component: FlowCheckbox },
            { label: '其它', prop: '', width: 100, component: FlowFormPropertyExtra },
          ],
        },
      },
    ],
  }
})

function handleAdd() {
  tableDataModel.value[activeTab.value]?.children?.push({ $cellEdit: true })
}

function handleAddChild(prop: string) {
  const row = tableDataModel.value[activeTab.value]?.children?.find(e => e.prop === prop)
  if (!row)
    return
  if (!row?.children)
    row.children = []
  row.children.push({ $cellEdit: true })
}

function handleDel(prop: string) {
  tableDataModel.value[activeTab.value]!.children = filterTree(tableDataModel.value[activeTab.value]!.children!, e => e.prop !== prop, { flat: false })
}

function showAddChildBtn(prop: string, dic: DicItem[]) {
  const hasChild = !!dic.find(e => e.value === prop && e.children?.length)
  return hasChild
}
</script>

<template>
  <DefinePropSelect v-slot="{ modelValue: prop, 'onUpdate:modelValue': setProp, dicData }">
    <div style="display:flex;">
      <avue-input-tree :model-value="prop" :dic="dicData" default-expand-all filterable @update:model-value="setProp" />
      <el-button v-if="showAddChildBtn(prop, dicData)" type="primary" icon="el-icon-plus" text @click="handleAddChild(prop)" />
      <el-button type="danger" icon="el-icon-delete" text @click="handleDel(prop)" />
    </div>
  </DefinePropSelect>

  <el-tabs v-model="activeTab">
    <el-tab-pane v-for="(item, index) in formOptions" :key="index" :label="item.label" :name="index">
      <avue-form v-model="tableDataModel[index]" :option="tableFormOption">
        <template #children-label>
          <div style="position:absolute;left:20px;top:4px;z-index:10;">
            <el-button type="primary" icon="el-icon-plus" size="small" circle @click="handleAdd" />
            <strong> 字段配置</strong>
          </div>
        </template>
      </avue-form>
    </el-tab-pane>
  </el-tabs>
</template>
