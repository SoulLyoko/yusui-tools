<script setup lang="ts">
import type { AvueFormColumn } from '@smallwei/avue'
import type { ElementTreeNode } from '../../types'

import { computed, ref } from 'vue'
import Avue from '@smallwei/avue'
import { isFunction, isNil, omitBy, pick } from 'lodash-unified'

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

  const common = pick(formOption.value, ['detail', 'disabled', 'readonly'])
  const { designOption } = getResource(props.element.name) ?? {}
  let column: AvueFormColumn = {}

  if (typeof designOption === 'object') {
    column = { ...common, ...designOption }
  }
  else if (typeof designOption === 'function') {
    column = { ...common, ...designOption(props.element) }
  }
  else {
    column = {
      ...common,
      ...omitBy(props.element.props, isFunction),
    }
  }

  const { labelWidth, display } = column
  return {
    ...column,
    labelWidth: typeof labelWidth === 'number' ? `${labelWidth}px` : labelWidth,
    style: { width: '100%', opacity: display === false ? 0.3 : 1 },
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
