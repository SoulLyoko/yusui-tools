<script setup lang="ts">
import { useCssVar } from '@vueuse/core'

const value = useCssVar('--el-color-primary')
</script>

<template>
  <el-space>
    <el-color-picker v-model="value" size="large" show-alpha />
    <el-color-picker v-model="value" show-alpha />
    <el-color-picker v-model="value" size="small" show-alpha />
  </el-space>
</template>
