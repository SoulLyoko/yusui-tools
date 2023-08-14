<script setup lang="ts">
import type { VDictProps } from '../types'

import { computed, useAttrs } from 'vue'
import { useVModels } from '@vueuse/core'
import { mergeDicProps, useDict } from '@yusui/composables'

const props = defineProps<VDictProps>()
const { modelValue } = useVModels(props)

const { data } = useDict(props)
const dicProps = mergeDicProps(props.props)

const cascaderProps = computed(() => {
  return {
    ...useAttrs(),
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
