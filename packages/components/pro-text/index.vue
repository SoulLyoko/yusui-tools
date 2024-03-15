<script setup lang="ts">
import type { ProTextProps } from './types'

const props = defineProps<ProTextProps>()
</script>

<template>
  <el-text v-bind="props">
    {{ modelValue }}
  </el-text>
</template>
