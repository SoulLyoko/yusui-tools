<script setup lang="ts">
import { ref } from 'vue'

const value = ref([])
const data = [
  { label: 'Option 1', key: '1' },
  { label: 'Option 2', key: '2' },
  { label: 'Option 3', key: '3' },
  { label: 'Option 4', key: '4', disabled: true },
]
</script>

<template>
  <h3>基础用法</h3>
  <el-transfer v-model="value" :data="data" filterable />
</template>
