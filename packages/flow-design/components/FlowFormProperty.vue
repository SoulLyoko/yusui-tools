<script setup lang="ts">
import type { AvueFormOption, DicItem } from '@smallwei/avue'
import type { FormPropertyItem } from '../types'

import { computed, onMounted, ref } from 'vue'
import { createReusableTemplate, useVModels } from '@vueuse/core'
import { filterTree, sleep } from '@yusui/utils'
import { pick } from 'lodash-unified'

import { useInjectState } from '../composables/state'
import { formColumnToDic, mergeFormProperty } from '../utils'
import { defaultFormProperty } from '../constants'
import FlowCheckbox from './FlowCheckbox.vue'
import FlowDynamicRowEditor from './FlowDynamicRowEditor.vue'

const props = defineProps<{ modelValue: FormPropertyItem[] }>()
const { modelValue: tableDataModel } = useVModels(props, undefined, { defaultValue: { modelValue: [] } })

const [DefinePropSelect, PropSelect] = createReusableTemplate<{
  'modelValue': string
  'onUpdate:modelValue': (val: string) => void
  'dicData': DicItem[]
}>()

const { dataOptions } = useInjectState()
const formOptions = computed(() => {
  return dataOptions.value?.formOptions?.filter(e => e.prop) ?? []
})

const activeTab = ref(0)

onMounted(async () => {
  await sleep()
  tableDataModel.value = formOptions.value.map((option) => {
    return {
      ...pick(option, ['label', 'prop', 'display', 'disabled', 'detail', 'readonly']),
      children: mergeFormProperty(option, tableDataModel.value.find(e => e.prop === option.prop)?.children ?? []),
    }
  })
})

const tableFormOption = computed<AvueFormOption<FormPropertyItem>>(() => {
  const formOption = formOptions.value[activeTab.value]
  const propDic = formColumnToDic(formOption?.column ?? [])
  return {
    menuBtn: false,
    column: [
      { label: '表单显示', prop: 'display', type: 'switch', value: true, span: 6 },
      { label: '表单禁用', prop: 'disabled', type: 'switch', value: false, span: 6 },
      { label: '表单详情', prop: 'detail', type: 'switch', value: false, span: 6 },
      { label: '表单只读', prop: 'readonly', type: 'switch', value: false, span: 6 },
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
            { label: '显示', prop: 'display', width: 60, component: FlowCheckbox },
            { label: '禁用', prop: 'disabled', width: 60, component: FlowCheckbox },
            { label: '详情', prop: 'detail', width: 60, component: FlowCheckbox },
            { label: '只读', prop: 'readonly', width: 60, component: FlowCheckbox },
            { label: '必填', prop: 'required', width: 60, component: FlowCheckbox },
            { label: '校验', prop: 'validate', width: 60, component: FlowCheckbox },
            // { label: '打印', prop: 'print', width: 60, component: FlowCheckbox },
            // { label: '套红', prop: 'overprint', width: 60, component: FlowCheckbox },
            // { label: '通过时更新', prop: 'upSend', width: 100 },
            // { label: '接收时更新', prop: 'upReceive', width: 100 },
            { label: '高级', prop: '', width: 100, component: FlowDynamicRowEditor },
          ],
        },
      },
    ],
  }
})

function handleAdd() {
  tableDataModel.value[activeTab.value]?.children?.push({ ...defaultFormProperty })
}

function handleAddChild(prop: string) {
  const row = tableDataModel.value[activeTab.value]?.children?.find(e => e.prop === prop)
  if (!row)
    return
  if (!row?.children)
    row.children = []
  row.children.push({ ...defaultFormProperty, $cellEdit: true } as any)
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

  <div>
    <el-tabs v-model="activeTab">
      <el-tab-pane v-for="(item, index) in formOptions" :key="index" :label="item.label" :name="index">
        <avue-form v-model="tableDataModel[index]" :option="tableFormOption">
          <template #children-label>
            <div style="position:absolute;left:20px;top:4px;z-index:10;">
              <el-button type="primary" icon="el-icon-plus" size="small" circle @click="handleAdd" />
              <strong> 字段</strong>
            </div>
          </template>
        </avue-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
