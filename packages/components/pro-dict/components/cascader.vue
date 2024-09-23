<script setup lang="ts">
import type { ProDictProps } from '../types'

import { useVModels } from '@vueuse/core'
import { mergeDicProps, useDict } from '@yusui/composables'
import { computed, useAttrs } from 'vue'

const props = defineProps<ProDictProps>()
const { modelValue } = useVModels(props)

const { data } = useDict(props)
const dicProps = mergeDicProps(props.props)

const attrs = useAttrs()
const cascaderProps = computed(() => {
  return {
    ...attrs,
    options: data.value,
    props: {
      ...dicProps,
      multiple: props.multiple,
    },
  } as any
})
</script>

<template>
  <el-cascader v-model="modelValue" v-bind="cascaderProps" />
</template>
