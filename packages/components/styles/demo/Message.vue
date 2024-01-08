<script setup lang="ts">
import { ElMessage } from 'element-plus'

function open(type: string) {
  ElMessage({
    message: type,
    type: type as any,
    duration: 0,
    showClose: true,
  })
}

const types = ['success', 'warning', 'info', 'error']
</script>

<template>
  <el-button v-for="type in types" :key="type" @click="open(type)">
    {{ type }}
  </el-button>
</template>
