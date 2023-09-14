<script setup lang="ts">
import type { AssigneeItem } from '../types'

import { computed, ref } from 'vue'
import { filterTree } from '@yusui/utils'

import { useInjectState } from '../composables/state'
import FlowNodeSelect from './FlowNodeSelect.vue'

const props = defineProps<{
  modelValue?: string
  tableData?: { row?: AssigneeItem }
  placeholder?: string
}>()
const emit = defineEmits(['update:modelValue'])

const loading = ref(false)
const type = computed(() => props.tableData?.row?.type as keyof typeof dicMap.value)
const isMultiple = computed(() => ['dept', 'post', 'user', 'specifyUser'].includes(type.value!))

const multipleValue = computed({
  get() {
    return props.modelValue ? props.modelValue.split(',') : []
  },
  set(val) {
    emit('update:modelValue', val.join(','))
    if (props.tableData?.row) {
      const values = filterTree(treeData.value, e => val?.includes(e.id!))
      // 把选择项的实际id存到idVal
      // eslint-disable-next-line vue/no-mutating-props
      props.tableData.row.idVal = values.map(e => e[`${type.value.replace('specifyUser', 'user')}Id` as keyof typeof e]).join(',')
      // // eslint-disable-next-line vue/no-mutating-props
      // props.tableData.row.values = values
    }
  },
})

const singleValue = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit('update:modelValue', val)
  },
})

const treeValue = computed({
  get() {
    return isMultiple.value ? multipleValue.value : singleValue.value
  },
  set(val) {
    if (isMultiple.value)
      multipleValue.value = val as string[]
    else
      singleValue.value = val as string
  },
})
function handleSelectAll() {
  treeValue.value = filterTree(treeData.value, e => e.type === type.value).map(e => e.id!)
}

const { dataOptions } = useInjectState()
const dicMap = computed(() => {
  const {
    flowAssigneeUserDic = [],
    flowAssigneeDeptDic = [],
    flowAssigneePostDic = [],
    flowAssigneeDynamicDic = [],
  } = dataOptions.value ?? {}
  return {
    user: flowAssigneeUserDic,
    dept: flowAssigneeDeptDic,
    post: flowAssigneePostDic,
    dynamic: flowAssigneeDynamicDic,
    specifyUser: flowAssigneeUserDic,
    userTask: [],
  }
})

const treeData = computed(() => {
  return dicMap.value[type.value] ?? []
})

const treeSelectProps = computed(() => {
  const commonProps = {
    clearable: true,
    data: treeData.value,
    filterable: true,
    loading: loading.value,
    nodeKey: 'value',
    placeholder: '请选择',
  }
  const multipleProps = {
    checkStrictly: !['user', 'specifyUser'].includes(type.value!),
    multiple: true,
    showCheckbox: true,
    collapseTags: true,
    collapseTagsTooltip: true,
    maxCollapseTags: 3,
  }

  return {
    ...commonProps,
    ...(isMultiple.value ? multipleProps : {}),
  }
})
</script>

<template>
  <div v-if="['dept', 'post', 'user', 'specifyUser', 'dynamic'].includes(type!)" style="display:flex">
    <el-tree-select v-model="treeValue" v-bind="treeSelectProps" style="width:100%" />
    <el-button v-if="treeSelectProps.multiple" text type="primary" icon="el-icon-check" @click="handleSelectAll">
      全选
    </el-button>
  </div>
  <FlowNodeSelect v-else-if="type === 'userTask'" v-model="singleValue" filter-type="userTask" placeholder="请选择" />
  <el-input v-else v-model="singleValue" clearable placeholder="请输入" />
</template>
