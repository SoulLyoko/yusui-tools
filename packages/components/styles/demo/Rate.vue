<script setup lang="ts">
import { ref } from 'vue'

const value = ref(3)
</script>

<template>
  <h3>基础用法</h3>
  <el-rate v-model="value" size="large" />
  <el-rate v-model="value" />
  <el-rate v-model="value" size="small" />

  <h3>只读</h3>
  <el-rate v-model="value" disabled />
</template>
