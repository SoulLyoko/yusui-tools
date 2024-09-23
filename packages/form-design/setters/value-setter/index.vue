<script setup lang="ts">
import { useVModels } from '@vueuse/core'
import { getDataType } from '@yusui/utils'
import { computed, ref, watch } from 'vue'

import EditorSetter from '../editor-setter/index.vue'

type ValueType = 'string' | 'number' | 'boolean' | 'array' | 'object'

const props = defineProps<{
  modelValue: any
  prop?: string
  /** 显示的选择项 */
  types?: ValueType[]
  /** 默认选择的类型 */
  defaultValueType?: ValueType
}>()
const { modelValue } = useVModels(props)

const valueType = ref<ValueType>(props.defaultValueType ?? 'string')
watch(modelValue, (val) => {
  if (val === undefined)
    return
  valueType.value = getDataType(val).toLowerCase() as ValueType
}, { immediate: true })

function valueTypeChange() {
  modelValue.value = undefined
}

const defaultValueTypes = [
  { label: 'str', value: 'string' },
  { label: 'num', value: 'number' },
  { label: 'boo', value: 'boolean' },
  { label: 'arr', value: 'array' },
  { label: 'obj', value: 'object' },
]
const valueTypesDic = computed(() => {
  if (props.types?.length)
    return defaultValueTypes.filter(e => props.types?.includes(e.value as ValueType))
  else
    return defaultValueTypes
})
const booleanDic = [
  { label: 'true', value: true },
  { label: 'false', value: false },
]
</script>

<template>
  <div style="display: flex">
    <el-input v-if="valueType === 'string'" v-model="modelValue" v-bind="$attrs" />
    <el-input-number v-else-if="valueType === 'number'" v-model="modelValue" controls-position="right" v-bind="$attrs" />
    <avue-select v-else-if="valueType === 'boolean'" v-model="modelValue" v-bind="$attrs" :dic="booleanDic" />
    <EditorSetter v-else v-model="modelValue" :value-type="valueType" tooltip v-bind="$attrs" />

    <el-select
      v-model="valueType" :clearable="false" suffix-icon="" style="width: 50px;flex-shrink: 0;"
      @change="valueTypeChange"
    >
      <el-option v-for="item in valueTypesDic" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
  </div>
</template>
