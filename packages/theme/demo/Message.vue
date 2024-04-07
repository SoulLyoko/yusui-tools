<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { capitalize } from 'lodash-es'

function open(type: string) {
  ElMessage({
    message: capitalize(type),
    type: type as any,
    duration: 0,
    showClose: true,
  })
}

const types = ['success', 'warning', 'info', 'error']
</script>

<template>
  <el-button v-for="type in types" :key="type" @click="open(type)">
    {{ capitalize(type) }}
  </el-button>
</template>
