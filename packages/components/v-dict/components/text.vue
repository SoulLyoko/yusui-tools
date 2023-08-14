<script setup lang="ts">
import type { VDictProps } from '../types'

import { useDict } from '@yusui/composables'

const props = defineProps<VDictProps>()

const { selectedLabel } = useDict(props)
</script>

<template>
  <el-text v-bind="$attrs">
    {{ selectedLabel ?? props.modelValue }}
  </el-text>
</template>
