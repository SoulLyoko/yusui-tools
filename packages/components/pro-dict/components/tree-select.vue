<script setup lang="ts">
import type { ProDictProps } from '../types'

import { useVModels } from '@vueuse/core'
import { mergeDicProps, useDict } from '@yusui/composables'
import { computed, useAttrs } from 'vue'

const props = defineProps<ProDictProps>()
const { modelValue } = useVModels(props)

const { data, loading } = useDict(props)
const dicProps = mergeDicProps(props.props)

const attrs = useAttrs()
const treeSelectProps = computed(() => {
  return {
    ...attrs,
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
