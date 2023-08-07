<script setup lang="ts">
import type { VDictProps } from '../types'

import { watchEffect } from 'vue'
import { useVModels } from '@vueuse/core'
import { mergeDicProps, useDict } from '@yusui/composables'

const props = defineProps<VDictProps>()
const { modelValue } = useVModels(props)

const { data, loading, dictValue } = useDict(props)
const { label, value, disabled } = mergeDicProps(props.props)
watchEffect(() => {
  dictValue.value = modelValue?.value
})
</script>

<template>
  <el-select v-model="modelValue" :multiple="multiple" :loading="loading" v-bind="$attrs">
    <el-option
      v-for="item in data"
      v-bind="item"
      :key="item[value!]"
      :label="item[label!]"
      :value="item[value!]"
      :disabled="item[disabled!]"
    />
  </el-select>
</template>
