<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
const timerange = ref('')
</script>

<template>
  <h3>任意时间点</h3>
  <el-time-picker v-model="value" placeholder="Arbitrary time" />
  <el-time-picker v-model="value" arrow-control placeholder="Arbitrary time" />

  <h3>任意时间范围</h3>
  <el-time-picker v-model="timerange" is-range start-placeholder="Start time" end-placeholder="End time" />
  <el-time-picker v-model="timerange" is-range arrow-control start-placeholder="Start time" end-placeholder="End time" />
</template>
