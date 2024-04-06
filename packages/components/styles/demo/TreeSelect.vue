<script setup lang="ts">
import { ref } from 'vue'

const value = ref()
const values = ref()
const data = [
  {
    value: '1',
    label: 'Level one 1',
    children: [
      {
        value: '1-1',
        label: 'Level two 1-1',
        children: [
          {
            value: '1-1-1',
            label: 'Level three 1-1-1',
          },
          {
            value: '1-1-2',
            label: 'Level three 1-1-2',
          },
        ],
      },
    ],
  },
  {
    value: '2',
    label: 'Level one 2',
    children: [
      {
        value: '2-1',
        label: 'Level two 2-1',
      },
      {
        value: '2-2',
        label: 'Level two 2-2',
      },
    ],
  },
  {
    value: '3',
    label: 'Level one 3',
    children: [
      {
        value: '3-1',
        label: 'Level two 3-1',
      },
      {
        value: '3-2',
        label: 'Level two 3-2',
        disabled: true,
      },
    ],
  },
]
</script>

<template>
  <h3>基础用法</h3>
  <el-tree-select v-model="value" :data="data" />
  <br>
  <br>
  <el-tree-select v-model="value" :data="data" show-checkbox />

  <h3>多选</h3>
  <el-tree-select v-model="values" :data="data" multiple />
  <br>
  <br>
  <el-tree-select v-model="values" :data="data" show-checkbox multiple />

  <h3>禁用</h3>
  <el-tree-select v-model="value" :data="data" disabled />
  <br>
  <br>
  <el-tree-select v-model="values" :data="data" multiple disabled />
</template>
