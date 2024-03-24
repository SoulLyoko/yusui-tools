<script setup lang="ts">
import type { ProDictProps } from '../types'

import { useVModels } from '@vueuse/core'
import { useDict } from '@yusui/composables'

const props = defineProps<ProDictProps>()
const { modelValue } = useVModels(props)

const { data, loading, getLabel, getValue, getDisabled } = useDict(props)
</script>

<template>
  <el-select v-model="modelValue" :multiple="multiple" :loading="loading" v-bind="$attrs">
    <el-option
      v-for="item in data"
      v-bind="item"
      :key="getValue(item)"
      :label="getLabel(item)"
      :value="getValue(item)"
      :disabled="getDisabled(item)"
    />
  </el-select>
</template>
