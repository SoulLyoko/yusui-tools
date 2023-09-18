<script setup lang="ts">
import type { Resource } from './types'

import { ref } from 'vue'

import { form } from './resources'
import { SwitchSetter } from './setters'
import { base, groupList as defaultGroupList } from './options'

const option = ref({})

const filesDic = [
  { name: 'createTime', comment: '操作时间' },
  { name: 'createBy', comment: '操作人' },
]

// 扩展基础配置
function baseOption(context: any) {
  const defaultBaseOption = base(context)
  const commonOption = { type: 'select', dicData: filesDic, filterable: true, allowCreate: true, defaultFirstOption: true }
  return [
    // 为字段标识增加可选项
    { ...commonOption, props: { label: 'name', value: 'name', desc: 'comment' } },
    // 为字段标题增加可选项
    { ...commonOption, props: { label: 'comment', value: 'comment', desc: 'name' } },
    // 最后添加一个样式类
    ...Array.from({ length: (defaultBaseOption?.length ?? 0) - 2 })
      .fill({}).concat({ label: '样式类', prop: 'class' }),
  ]
}

// 扩展物料库
const resources: Record<string, Resource> = {
  // 给表单增加一个样式类的配置
  form: {
    settings: Array.from({ length: form.settings?.length ?? 0 })
      .fill({}).concat({ label: '样式类', prop: 'class' }),
  } as Resource,
  // 自定义组件,基于el-text封装(@yusui/components/v-text)
  customText: {
    name: 'customText',
    title: '自定义文本',
    icon: 'el-icon-minus',
    group: '自定义分组',
    props: { label: '自定义文本', component: 'v-text', value: '这是一个自定义文本', type: 'primary' },
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

const groupList = ['自定义分组', ...defaultGroupList]
</script>

<template>
  <FormDesign
    v-model="option" :base-option="baseOption" :resources="resources" :group-list="groupList"
    style="height: 800px"
  />
</template>
