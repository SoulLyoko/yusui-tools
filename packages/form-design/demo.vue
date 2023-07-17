<script setup lang="ts">
import type { Resource } from './types'

import { ref } from 'vue'

import { form } from './resources'
import { SwitchSetter } from './setters'
import { groupList as defaultGroupList } from './options'

const option = ref({})

const filesDic = [
  { name: 'createTime', comment: '操作时间' },
  { name: 'createBy', comment: '操作人' },
]

// 扩展基础配置
const baseOption = [
  // 为字段标识增加可选项
  {
    type: 'select',
    dicData: filesDic,
    filterable: true,
    allowCreate: true,
    defaultFirstOption: true,
    props: { label: 'name', value: 'name', desc: 'comment' },
  },
  // 为字段标题增加可选项
  {
    type: 'select',
    dicData: filesDic,
    filterable: true,
    allowCreate: true,
    defaultFirstOption: true,
    props: { label: 'comment', value: 'comment', desc: 'name' },
  },
]

// 扩展物料库
const resources: Record<string, Resource> = {
  // 给表单增加一个样式类的配置
  form: {
    settings: Array.from({ length: form.settings?.length ?? 0 })
      .fill({})
      .concat({ label: '样式类', prop: 'class' }),
  } as Resource,
  // 自定义组件,基于el-text封装(@yusui/components/v-text)
  custom: {
    name: 'custom',
    title: '自定义组件',
    icon: 'el-icon-user',
    group: '自定义分组',
    props: { label: '自定义组件', component: 'v-text', value: '这是一个自定义组件', type: 'primary' },
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
}

const groupList = ['自定义分组', ...defaultGroupList]
</script>

<template>
  <FormDesign v-model="option" :base-option="baseOption" :resources="resources" :group-list="groupList" style="height: 800px" />
</template>
