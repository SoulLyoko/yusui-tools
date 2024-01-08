<script setup lang="ts">
import { ref } from 'vue'

const value = ref(0)
</script>

<template>
  <h3>基础用法</h3>
  <el-space>
    <el-input-number v-model="value" size="large" />
    <el-input-number v-model="value" />
    <el-input-number v-model="value" size="small" />
  </el-space>

  <h3>按钮位置</h3>
  <el-input-number v-model="value" controls-position="right" />

  <h3>禁用状态</h3>
  <el-input-number v-model="value" disabled />
  <el-input-number v-model="value" controls-position="right" disabled />
</template>
