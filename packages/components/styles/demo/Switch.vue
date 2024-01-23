<script setup lang="ts">
import { ref } from 'vue'

const value = ref(true)
</script>

<template>
  <h3>基础用法</h3>
  <el-space>
    <el-switch v-model="value" size="large" />
    <el-switch v-model="value" />
    <el-switch v-model="value" size="small" />
  </el-space>

  <h3>禁用状态</h3>
  <el-space>
    <el-switch v-model="value" size="large" disabled />
    <el-switch v-model="value" disabled />
    <el-switch v-model="value" size="small" disabled />
  </el-space>
</template>
