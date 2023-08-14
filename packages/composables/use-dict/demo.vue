<script setup lang="ts">
import { ref } from 'vue'

import { useDict } from '.'

const dicData = [
  { label: 'label1', value: 'value1' },
  { label: 'label2', value: 'value2' },
]
const treeData = [
  {
    label: 'label1',
    value: 'value1',
    children: [
      { label: 'label1-1', value: 'value1-1' },
      { label: 'label1-2', value: 'value1-2' },
    ],
  },
  {
    label: 'label2',
    value: 'value2',
    children: [
      { label: 'label2-1', value: 'value2-1' },
      { label: 'label2-2', value: 'value2-2' },
    ],
  },
]

const dicMap = {
  '/dict/dicData': dicData,
  '/dict/treeData': treeData,
}

// 模拟请求
function request({ url }: { url: keyof typeof dicMap }) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          data: dicMap[url],
        },
      })
    }, 1000)
  })
}

const selectValue = ref('')
const {
  data: selectData,
  loading: selectLoading,
  selectedLabel,
  selectedItem,
} = useDict({ modelValue: selectValue, dicData })

const treeSelectValue = ref('')
const {
  data: treeSelectData,
  loading: treeSelectLoading,
  selectedItem: treeSelectedItem,
  selectedLabel: treeSelectedLabel,
} = useDict({ modelValue: treeSelectValue, request: request as any, dicUrl: '/dict/treeData' })
</script>

<template>
  select: <el-select v-model="selectValue" :data="selectData" :loading="selectLoading">
    <el-option v-for="item in selectData" :key="item.value" :label="item.label" :value="item.value" />
  </el-select>
  <br>
  <el-text>{{ selectedLabel }}</el-text>
  <br>
  <el-text>{{ selectedItem }}</el-text>
  <br>
  tree-select: <el-tree-select v-model="treeSelectValue" :data="treeSelectData" :loading="treeSelectLoading" node-key="value" />
  <br>
  <el-text>{{ treeSelectedLabel }}</el-text>
  <br>
  <el-text>{{ treeSelectedItem }}</el-text>
</template>
