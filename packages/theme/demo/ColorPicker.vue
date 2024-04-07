<script setup lang="ts">
import { ref } from 'vue'

const value = ref('#000')
</script>

<template>
  <h3>基础用法</h3>
  <el-space>
    <el-color-picker v-model="value" size="large" show-alpha />
    <el-color-picker v-model="value" show-alpha />
    <el-color-picker v-model="value" size="small" show-alpha />
  </el-space>

  <h3>禁用</h3>
  <el-space>
    <el-color-picker v-model="value" size="large" disabled />
    <el-color-picker v-model="value" disabled />
    <el-color-picker v-model="value" size="small" disabled />
  </el-space>
</template>
