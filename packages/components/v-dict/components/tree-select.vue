<script setup lang="ts">
import type { VDictProps } from '../types'

import { computed, useAttrs, watchEffect } from 'vue'
import { useVModels } from '@vueuse/core'
import { mergeDicProps, useDict } from '@yusui/composables'

const props = defineProps<VDictProps>()
const { modelValue } = useVModels(props)

const { data, loading, dictValue } = useDict(props)
const dicProps = mergeDicProps(props.props)
watchEffect(() => {
  dictValue.value = modelValue?.value
})

const treeSelectProps = computed(() => {
  return {
    ...useAttrs(),
    data: data.value,
    multiple: props.multiple,
    nodeKey: dicProps.value,
    loading: loading.value,
    props: dicProps,
  }
})
</script>

<template>
  <el-tree-select v-model="modelValue" v-bind="treeSelectProps" />
</template>
