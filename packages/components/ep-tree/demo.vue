<script setup lang="ts">
import { ref } from 'vue'

import EpTree from './index.vue'

const treeData = [
  {
    value: 1,
    label: '一级 1',
    children: [
      {
        value: 4,
        label: '二级 1-1',
        children: [
          {
            value: 9,
            label: '三级 1-1-1',
          },
          {
            value: 10,
            label: '三级 1-1-2',
          },
        ],
      },
    ],
  },
  {
    value: 2,
    label: '一级 2',
    children: [
      {
        value: 5,
        label: '二级 2-1',
      },
      {
        value: 6,
        label: '二级 2-2',
      },
    ],
  },
  {
    value: 3,
    label: '一级 3',
    children: [
      {
        value: 7,
        label: '二级 3-1',
      },
      {
        value: 8,
        label: '二级 3-2',
      },
    ],
  },
]

const singleValue = ref('')
const multiValue = ref([])
</script>

<template>
  单选：
  <EpTree v-model="singleValue" :data="treeData" />
  多选：
  <EpTree v-model="multiValue" :data="treeData" multiple />
</template>
