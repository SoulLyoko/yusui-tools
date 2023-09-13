<script setup lang="ts">
import { useVModels } from '@vueuse/core'

const props = defineProps<{
  modelValue?: boolean
}>()
const { modelValue } = useVModels(props)
</script>

<template>
  <span>
    <el-checkbox v-model="modelValue" />
  </span>
</template>
