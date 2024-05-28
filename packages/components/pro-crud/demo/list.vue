<script setup lang="ts">
import type { ProCrudOption } from '@yusui/components'

import { useCrud } from '@yusui/composables'
import { ref } from 'vue'

const option: ProCrudOption = {
  type: 'list',
  viewBtn: true,
  gridBtn: false,
  span: 24,
  listOption: {
    icon: 'avatar',
    title: 'name',
    subtitle: '$sex',
    content: 'remark',
  },
  column: [
    {
      label: '头像',
      prop: 'avatar',
      type: 'upload',
      listType: 'picture-img',
    },
    {
      label: '名称',
      prop: 'name',
    },
    {
      label: '性别',
      prop: 'sex',
      type: 'select',
      dicData: [
        { label: '男', value: 1 },
        { label: '女', value: 0 },
      ],
    },
    {
      label: '备注',
      prop: 'remark',
      hide: true,
    },
  ],
}

const data = [
  { id: '1', avatar: 'https://p.qqan.com/up/2020-11/16043833185056669.jpg', name: '张三', sex: 1, remark: '备注备注备注备注备注备注备注备注备注备注' },
  { id: '2', avatar: 'https://p.qqan.com/up/2020-12/16070652272519101.jpg', name: '李四', sex: 0, remark: '备注备注备注备注备注备注备注备注备注备注' },
  { id: '3', avatar: 'https://p.qqan.com/up/2020-11/16043833185056669.jpg', name: '张三', sex: 1, remark: '备注备注备注备注备注备注备注备注备注备注' },
  { id: '4', avatar: 'https://p.qqan.com/up/2020-12/16070652272519101.jpg', name: '李四', sex: 0, remark: '备注备注备注备注备注备注备注备注备注备注' },
  { id: '5', avatar: 'https://p.qqan.com/up/2020-11/16043833185056669.jpg', name: '张三', sex: 1, remark: '备注备注备注备注备注备注备注备注备注备注' },
  { id: '6', avatar: 'https://p.qqan.com/up/2020-12/16070652272519101.jpg', name: '李四', sex: 0, remark: '备注备注备注备注备注备注备注备注备注备注' },
]

const crudRef = ref()
const { bindVal, getDataList } = useCrud({
  tableOption: option,
  mockData: data,
})
getDataList()
</script>

<template>
  <ProCrud v-bind="bindVal" ref="crudRef" />
</template>
