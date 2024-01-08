<script setup lang="ts">
import { ref } from 'vue'

const value = ref(true)
</script>

<template>
  <h3>基础用法</h3>
  <el-switch v-model="value" size="large" />
  <br>
  <el-switch v-model="value" />
  <br>
  <el-switch v-model="value" size="small" />

  <h3>禁用状态</h3>
  <el-switch v-model="value" disabled />
</template>
