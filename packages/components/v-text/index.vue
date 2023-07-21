<script setup lang="ts">
import type { VTextProps } from './types'

const props = defineProps<VTextProps>()
</script>

<template>
  <el-text v-bind="props">
    {{ modelValue }}
  </el-text>
</template>
