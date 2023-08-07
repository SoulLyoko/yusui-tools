<script setup lang="ts">
import type { VDictProps } from '../types'

import { computed, watchEffect } from 'vue'
import { useVModels } from '@vueuse/core'
import { mergeDicProps, useDict } from '@yusui/composables'

const props = defineProps<VDictProps>()
const { modelValue } = useVModels(props)

const { data, dictValue } = useDict(props)
const { label, value, disabled } = mergeDicProps(props.props)
watchEffect(() => {
  dictValue.value = modelValue?.value
})

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
      :key="item[value!]"
      :label="item[value!]"
      :disabled="item[disabled!]"
      :border="border"
    >
      {{ item[label!] }}
    </component>
  </el-radio-group>
</template>
