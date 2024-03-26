<script setup lang="ts">
import type { AvueFormColumn } from '@smallwei/avue'
import type { ElementTreeNode } from '../../types'

import { computed, ref } from 'vue'
import Avue from '@smallwei/avue'
import { cloneDeep, isFunction, isNil, omitBy } from 'lodash-unified'

import { useInjectState } from '../../composables'

const props = defineProps<{
  element: ElementTreeNode
}>()

const { getResource, formOption } = useInjectState()
const FormTemp = Avue.Form.components!.formTemp

const modelValue = ref()

const option = computed<AvueFormColumn>(() => {
  if (!isNil(props.element.props?.value))
    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
    modelValue.value = props.element.props?.value

  const common = cloneDeep(formOption.value)
  const { designOption } = getResource(props.element.name) ?? {}
  if (typeof designOption === 'object') {
    return { ...common, ...designOption }
  }
  else if (typeof designOption === 'function') {
    return { ...common, ...designOption(props.element) }
  }
  else {
    const column = {
      ...common,
      ...omitBy(props.element.props, isFunction),
      style: { width: '100%', opacity: props.element.props?.display === false ? 0.3 : 1 },
    }
    return column
  }
})

const formClass = computed(() => {
  return `avue-form__item--${option.value.labelPosition} ${option.value.detail ? 'avue--detail' : ''}`
})
</script>

<template>
  <el-form-item v-bind="option" :class="formClass">
    <FormTemp v-model="modelValue" v-bind="option" :column="option" :disabled="option.detail || option.disabled" />
  </el-form-item>
</template>
