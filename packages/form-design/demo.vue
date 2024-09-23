<script setup lang="ts">
import type { Resource } from './types'
import type { MergeWithCustomizer } from 'lodash'

import { base, groupList as defaultGroupList, SwitchSetter } from '@yusui/form-design'
import { ref } from 'vue'

const option = ref({})

const groupList = ['自定义分组', ...defaultGroupList]

const fieldsDic = [
  { name: 'createTime', comment: '操作时间' },
  { name: 'createBy', comment: '操作人' },
]
// 扩展基础配置
function baseOption(context: any) {
  const defaultBaseOption = base(context)
  const commonOption = { type: 'select', dicData: fieldsDic, filterable: true, allowCreate: true, defaultFirstOption: true }
  return [
    // 为字段标识增加可选项
    { ...defaultBaseOption[0], ...commonOption, props: { label: 'name', value: 'name', desc: 'comment' } },
    // 为字段标题增加可选项
    { ...defaultBaseOption[1], ...commonOption, props: { label: 'comment', value: 'comment', desc: 'name' } },
    ...defaultBaseOption.filter((_, i) => i >= 2),
    // 给基础配置增加一个样式属性
    { label: '样式', prop: 'style', type: 'textarea' },
  ]
}

// 扩展物料库
const resources: Record<string, Resource> = {
  // 给表单增加一个样式属性
  form: {
    settings: [{ label: '样式', prop: 'style', type: 'textarea' }],
  },
  // 自定义组件,基于el-text封装(@yusui/components/pro-text)
  customText: {
    name: 'customText',
    title: '自定义文本',
    icon: 'el-icon-minus',
    group: '自定义分组',
    props: { label: '自定义文本', component: 'pro-text', value: '这是一个自定义文本', type: 'primary' },
    settings: [
      {
        label: '显示内容',
        prop: 'value',
        type: 'textarea',
      },
      {
        label: '显示类型',
        prop: 'type',
        type: 'select',
        dicData: [
          { label: 'primary', value: 'primary' },
          { label: 'success', value: 'success' },
          { label: 'warning', value: 'warning' },
          { label: 'danger', value: 'danger' },
          { label: 'info', value: 'info' },
        ],
      },
      {
        label: '显示省略号',
        prop: 'truncated',
        component: SwitchSetter,
      },
      {
        label: '自定义元素标签',
        prop: 'tag',
        labelWidth: 120,
      },
    ],
  },
  customContainer: {
    name: 'customContainer',
    title: '自定义容器',
    icon: 'el-icon-folder',
    group: '自定义分组',
    isContainer: true,
    props: { label: '自定义容器' },
  },
}

const resourcesMerger: MergeWithCustomizer = (value, srcValue, key) => {
  if (key === 'form' && value.settings) {
    value.settings.push(...srcValue.settings)
    return value
  }
}
</script>

<template>
  <FormDesign
    v-model="option" :group-list="groupList" :base-option="baseOption" :resources="resources"
    :resources-merger="resourcesMerger" style="height: 800px"
  >
    <template #header-left>
      左侧slot
    </template>
    <template #header-right>
      右侧slot
    </template>
  </FormDesign>
</template>
