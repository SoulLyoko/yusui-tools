<script setup lang="ts">
import { useCssVar } from '@vueuse/core'

const value = useCssVar('--el-color-primary')
</script>

<template>
  <el-color-picker v-model="value" show-alpha />
</template>
