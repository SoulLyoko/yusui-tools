<script setup lang="ts">
import { computed } from 'vue'
import { useVModels } from '@vueuse/core'

import EditorSetter from '../editor-setter/index.vue'

const props = defineProps<{
  modelValue: any
  tableData?: { row?: any }
  placeholder?: string
}>()
const vModels = useVModels(props)
const { modelValue } = vModels as Required<typeof vModels>

const valueType = computed({
  get() {
    return props.tableData?.row?.valueType ?? 'string'
  },
  set(val) {
    if (props.tableData?.row)
      props.tableData!.row!.valueType = val
  },
})

function valueTypeChange() {
  modelValue.value = undefined
}
const valueTypeDic = [
  { label: 'str', value: 'string' },
  { label: 'num', value: 'number' },
  { label: 'boo', value: 'boolean' },
  { label: 'arr', value: 'array' },
  { label: 'obj', value: 'object' },
]
const booleanDic = [
  { label: 'true', value: true },
  { label: 'false', value: false },
]
</script>

<template>
  <div style="display: flex">
    <el-input v-if="valueType === 'string'" v-model="modelValue" :placeholder="placeholder" />
    <el-input-number
      v-else-if="valueType === 'number'"
      v-model="modelValue"
      :placeholder="placeholder"
    />
    <avue-select
      v-else-if="valueType === 'boolean'"
      v-model="modelValue"
      :placeholder="placeholder"
      :dic="booleanDic"
    />
    <EditorSetter v-else v-model="modelValue" :value-type="valueType" tooltip />
    <el-select v-model="valueType" :clearable="false" suffix-icon="" style="width: 60px" @change="valueTypeChange">
      <el-option
        v-for="item in valueTypeDic"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
</template>
