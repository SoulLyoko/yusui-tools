<script setup lang="ts">
import type { VDictProps } from '../types'

import { watchEffect } from 'vue'
import { useDict } from '@yusui/composables'

const props = defineProps<VDictProps>()

const { selectedLabel, dictValue } = useDict(props)
watchEffect(() => {
  dictValue.value = props.modelValue
})
</script>

<template>
  <el-text v-bind="$attrs">
    {{ selectedLabel ?? props.modelValue }}
  </el-text>
</template>
