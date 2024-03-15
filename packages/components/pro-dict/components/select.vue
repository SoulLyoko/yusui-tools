<script setup lang="ts">
import type { ProDictProps } from '../types'

import { useVModels } from '@vueuse/core'
import { mergeDicProps, useDict } from '@yusui/composables'

const props = defineProps<ProDictProps>()
const { modelValue } = useVModels(props)

const { data, loading } = useDict(props)
const { label, value, disabled } = mergeDicProps(props.props)
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
