<script setup lang="ts">
import { uniqueId } from 'lodash-es'
import { onMounted, ref } from 'vue'

import ProTree from './index.vue'

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

const singleValue = ref()
const multiValue = ref([])

const bigValue = ref([])
const bigData = ref<any[]>([])
const loading = ref(false)
onMounted(() => {
  loading.value = true
  setTimeout(() => {
    bigData.value = genTree(100, 2)
    loading.value = false
  }, 1000)
})

function genTree(length: number, totalDepth: number, depth = 1): any[] {
  return Array.from({ length }).map(() => {
    const id = uniqueId()
    return {
      label: `label-${id}`,
      value: id,
      children: totalDepth === depth ? [] : genTree(length, totalDepth, depth + 1),
    }
  })
}
</script>

<template>
  单选：
  <ProTree v-model="singleValue" :data="treeData" />
  多选：
  <ProTree v-model="multiValue" :data="treeData" multiple />
  大数据：
  <ProTree
    v-model="bigValue" v-loading="loading" :data="bigData" multiple default-expand-all virtualized collapse-tags
    collapse-tags-tooltip :max-collapse-tags="3"
  />
</template>
