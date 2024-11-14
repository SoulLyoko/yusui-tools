<script setup lang="ts">
import type { AssigneeItem } from '../types'

import { filterTree, treeMap } from '@yusui/utils'
import { computed, ref, watch } from 'vue'

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
const isMultiple = computed(() => ['dept', 'post', 'user', 'role', 'specifyUser'].includes(type.value!))

const { dataOptions } = useInjectState()
const dicMap = computed(() => {
  const {
    flowAssigneeUserDic = [],
    flowAssigneeDeptDic = [],
    flowAssigneePostDic = [],
    flowAssigneeRoleDic = [],
    flowAssigneeDynamicDic = [],
  } = dataOptions.value ?? {}
  return {
    user: flowAssigneeUserDic,
    dept: flowAssigneeDeptDic,
    post: flowAssigneePostDic,
    role: flowAssigneeRoleDic,
    dynamic: flowAssigneeDynamicDic,
    specifyUser: treeMap(flowAssigneeUserDic, e => ({ ...e, type: 'specifyUser' })),
    userTask: [],
  }
})

const treeData = computed(() => {
  return dicMap.value[type.value] ?? []
})

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

watch(type, () => {
  multipleValue.value = []
  singleValue.value = ''
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
  <div v-if="['dept', 'post', 'user', 'role', 'specifyUser', 'dynamic'].includes(type!)">
    <el-tree-select v-model="treeValue" v-bind="treeSelectProps">
      <template v-if="treeSelectProps.multiple" #header>
        <el-link type="primary" icon="el-icon-check" :underline="false" @click="handleSelectAll">
          全选
        </el-link>
      </template>
    </el-tree-select>
  </div>
  <FlowNodeSelect v-else-if="type === 'userTask'" v-model="singleValue" filter-type="userTask" placeholder="请选择" />
  <el-input v-else v-model="singleValue" clearable placeholder="请输入" />
</template>
