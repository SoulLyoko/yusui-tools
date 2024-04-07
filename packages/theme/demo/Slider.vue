<script setup lang="ts">
import { ref } from 'vue'

const value = ref(10)

const range = ref([30, 60])
const marks = {
  0: '0°C',
  10: {
    style: { color: 'blue' },
    label: '10%',
  },
  37: '37°C',
  50: {
    style: { color: 'orange' },
    label: '50%',
  },
  100: {
    style: { color: 'red' },
    label: '100%',
  },
}
</script>

<template>
  <h3>基础用法</h3>
  <el-slider v-model="value" />
  <el-slider v-model="value" show-input />

  <h3>显示标记</h3>
  <el-slider v-model="range" range :marks="marks" />

  <h3>禁用状态</h3>
  <el-slider v-model="value" disabled />
  <el-slider v-model="value" disabled show-input />
  <el-slider v-model="range" range :marks="marks" disabled />
</template>
