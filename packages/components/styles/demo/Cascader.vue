<script setup lang="ts">
import { ref } from 'vue'

const value = ref('4')
const options = [
  {
    label: 'Option - 1',
    value: '1',
    children: [
      {
        label: 'Option - 2',
        value: '2',
        children: [
          { label: 'Option - 4', value: '4' },
          { label: 'Option - 5', value: '5' },
          { label: 'Option - 6', value: '6' },
        ],
      },
      { label: 'Option - 3', value: '3', disabled: true },
    ],
  },
]

const values = ref(['4', '5', '6'])
</script>

<template>
  <h3>基础用法</h3>
  <el-cascader v-model="value" :options="options" :show-all-levels="false" :props="{ emitPath: false }" clearable />

  <h3>多选</h3>
  <el-cascader v-model="values" :options="options" :show-all-levels="false" :props="{ multiple: true }" clearable />

  <h3>禁用状态</h3>
  <el-cascader v-model="value" :options="options" :show-all-levels="false" :props="{ emitPath: false }" disabled />
  <el-cascader v-model="values" :options="options" :show-all-levels="false" :props="{ multiple: true }" disabled />
</template>
