<script setup lang="ts">
import type { DicItem } from '@smallwei/avue'
import type { AssigneeItem } from '@yusui/flow-design'
import type { FlowUserTree } from '@yusui/flow-pages'

import { computed, ref, watch } from 'vue'
import { filterTree } from '@yusui/utils'
import { FlowNodeSelect } from '@yusui/flow-design'
import { useConfigProvider, useFlowParamApi, useFlowUserApi } from '@yusui/flow-pages'

const props = defineProps<{
  modelValue: string | string[]
  tableData?: { row?: AssigneeItem }
  placeholder: string
}>()
const emit = defineEmits(['update:modelValue'])

const selectValue = computed({
  get() {
    if (typeof props.modelValue === 'string')
      return props.modelValue ? props.modelValue.split(',') : []
    else
      return props.modelValue
  },
  set(val) {
    emit('update:modelValue', val.join(','))
    if (props.tableData?.row) {
      // eslint-disable-next-line vue/no-mutating-props
      props.tableData.row.values = filterTree(treeData.value, e => val?.includes(e.id!))
      // eslint-disable-next-line vue/no-mutating-props
      props.tableData.row.idVal = props.tableData.row.values.map(e => e[`${type.value}Id` as keyof typeof e]).join(',')
    }
  },
})

const inputValue = computed({
  get() {
    if (Array.isArray(props.modelValue))
      return props.modelValue.join(',')
    else
      return props.modelValue
  },
  set(val) {
    emit('update:modelValue', val)
  },
})

const loading = ref(false)
const type = computed(() => props.tableData?.row?.type)

const treeData = ref<FlowUserTree[]>([])
const dynamicDic = ref<DicItem[]>([])

const { request } = useConfigProvider()
const { getUserTree } = useFlowUserApi(request)
const { getParam } = useFlowParamApi(request)

watch(
  type,
  async (val) => {
    try {
      loading.value = true
      if (['dept', 'post', 'user'].includes(val!)) {
        const res = await getUserTree(val === 'user' ? '' : val)
        treeData.value = res.data
      }
      else if (type.value === 'dynamic') {
        const res = await getParam('flow.trends.user')
        dynamicDic.value = res.data
      }
    }
    finally {
      loading.value = false
    }
  },
  { immediate: true },
)

function handleSelectAll() {
  selectValue.value = filterTree(treeData.value, e => e.type === type.value).map(e => e.id!)
}

const userSelectProps = computed(() => {
  return {
    checkStrictly: type.value !== 'user',
    clearable: true,
    collapseTags: true,
    collapseTagsTooltip: true,
    data: treeData.value,
    filterable: true,
    loading: loading.value,
    maxCollapseTags: 3,
    multiple: true,
    nodeKey: 'id',
    props: { label: 'title' },
    placeholder: '请选择',
    showCheckbox: true,
  }
})
const dynamicSelectProps = computed(() => {
  return {
    clearable: true,
    data: dynamicDic.value,
    filterable: true,
    loading: loading.value,
    nodeKey: 'id',
    props: { label: 'title' },
    placeholder: '请选择',
  }
})
</script>

<template>
  <div v-if="['dept', 'post', 'user'].includes(type!)">
    <el-tree-select v-model="selectValue" v-bind="userSelectProps" style="width:75%" />
    <el-button text type="primary" icon="el-icon-check" style="width: 20%" @click="handleSelectAll">
      全选
    </el-button>
  </div>
  <el-tree-select v-else-if="type === 'dynamic'" v-model="inputValue" v-bind="dynamicSelectProps" style="width:100%" />
  <FlowNodeSelect v-else-if="type === 'userTask'" v-model="inputValue" filter-type="userTask" placeholder="请选择" />
  <el-input v-else v-model="inputValue" clearable placeholder="请输入" />
</template>
