<script setup lang="ts">
import type { ProDictProps } from './types'

import { computed, useAttrs } from 'vue'

import { DictCascader, DictCheckbox, DictRadio, DictSelect, DictSwitch, DictText, DictTreeSelect } from './components'

const props = defineProps<ProDictProps>()
const attrs = useAttrs()
const componentProps = computed(() => {
  return { ...props, ...attrs }
})

const componentTypeMap = {
  'cascader': DictCascader,
  'checkbox': DictCheckbox,
  'radio': DictRadio,
  'select': DictSelect,
  'switch': DictSwitch,
  'tree-select': DictTreeSelect,
  'text': DictText,
}

const componentIs = computed(() => {
  return componentTypeMap[props.type || 'select']
})
</script>

<template>
  <component :is="componentIs" v-bind="componentProps" />
</template>
