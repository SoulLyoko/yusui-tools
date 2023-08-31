<script setup lang="ts">
import { computed } from 'vue'
import { useVModels } from '@vueuse/core'

import EditorSetter from '../editor-setter/index.vue'

type ValueType = 'string' | 'number' | 'boolean' | 'array' | 'object'

const props = defineProps<{
  modelValue: any
  tableData?: { row?: any }
  prop?: string
  /** 显示的选择项 */
  types?: ValueType[]
  /** 默认选择的类型 */
  defaultValueType?: ValueType
}>()
const vModels = useVModels(props)
const { modelValue } = vModels as Required<typeof vModels>

const valueType = computed({
  get() {
    return props.tableData?.row?.[`${props.prop}ValueType`] ?? props.tableData?.row?.valueType ?? props.defaultValueType ?? 'string'
  },
  set(val) {
    if (props.tableData?.row)
      props.tableData!.row![`${props.prop}ValueType`] = val
  },
})

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
    <avue-select v-else-if="valueType === 'boolean'" v-model="modelValue" :dic="booleanDic" v-bind="$attrs" />
    <EditorSetter v-else v-model="modelValue" :value-type="valueType" tooltip v-bind="$attrs" />

    <el-select v-model="valueType" :clearable="false" suffix-icon="" style="width: 50px;flex-shrink: 0;" @change="valueTypeChange">
      <el-option v-for="item in valueTypesDic" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
  </div>
</template>
