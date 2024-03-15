<script setup lang="ts">
import type { ProDictProps } from '../types'

import { useDict } from '@yusui/composables'

const props = defineProps<ProDictProps>()

const { selectedLabel } = useDict(props)
</script>

<template>
  <el-text v-bind="$attrs">
    {{ selectedLabel }}
  </el-text>
</template>
