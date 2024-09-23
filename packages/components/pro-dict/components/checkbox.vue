<script setup lang="ts">
import type { ProDictProps } from '../types'

import { useVModels } from '@vueuse/core'
import { useDict } from '@yusui/composables'
import { computed } from 'vue'

const props = defineProps<ProDictProps>()
const { modelValue } = useVModels(props)

const { data, getLabel, getValue, getDisabled } = useDict(props)

const checkboxComponent = computed(() => {
  return props.button ? 'el-checkbox-button' : 'el-checkbox'
})
</script>

<template>
  <el-checkbox-group v-model="modelValue" v-bind="$attrs">
    <component
      :is="checkboxComponent"
      v-for="item in data"
      v-bind="item"
      :key="getValue(item)"
      :label="getValue(item)"
      :disabled="getDisabled(item)"
      :border="border"
    >
      {{ getLabel(item) }}
    </component>
  </el-checkbox-group>
</template>
