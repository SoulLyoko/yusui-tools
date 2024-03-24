<script setup lang="ts">
import type { ProDictProps } from '../types'

import { computed } from 'vue'
import { useVModels } from '@vueuse/core'
import { useDict } from '@yusui/composables'

const props = defineProps<ProDictProps>()
const { modelValue } = useVModels(props)

const { data, getLabel, getValue, getDisabled } = useDict(props)

const radioComponent = computed(() => {
  return props.button ? 'el-radio-button' : 'el-radio'
})
</script>

<template>
  <el-radio-group v-model="modelValue" v-bind="$attrs">
    <component
      :is="radioComponent"
      v-for="item in data"
      v-bind="item"
      :key="getValue(item)"
      :label="getValue(item)"
      :disabled="getDisabled(item)"
      :border="border"
    >
      {{ getLabel(item) }}
    </component>
  </el-radio-group>
</template>
