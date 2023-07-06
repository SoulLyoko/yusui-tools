<script setup lang="ts">
import type { DicItem } from '@smallwei/avue'
import type { AssigneeItem } from '@yusui/flow-design'
import type { FlowUserTree } from '../../api'

import { computed, ref, watch } from 'vue'
import { filterTree, treeMap } from '@yusui/utils'
import { FlowNodeSelect } from '@yusui/flow-design'

import { useFlowParamApi, useFlowUserApi } from '../../api'

const props = defineProps<{
  modelValue: string | string[]
  tableData?: { row?: AssigneeItem }
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
      props.tableData.row.idVal = filterTree(
        treeData.value,
        e => val?.includes(e.id!),
      ).map(e => e[`${type.value}Id` as keyof typeof e]).join(',')
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

const { getUserTree } = useFlowUserApi()
const { getParam } = useFlowParamApi()

watch(
  type,
  (val) => {
    if (['dept', 'post', 'user'].includes(val!)) {
      loading.value = true
      getUserTree(val === 'user' ? '' : val).then((res) => {
        treeData.value = treeMap(res.data, (e) => {
          return { ...e, label: e.title, value: e.id, disabled: val === 'user' ? e.type !== 'user' : false }
        })
      }).finally(() => loading.value = false)
    }
    else if (type.value === 'dynamic') {
      loading.value = true
      getParam('flow.trends.user').then((res) => {
        dynamicDic.value = res.data
      }).finally(() => loading.value = false)
    }
  },
  { immediate: true },
)
</script>

<template>
  <el-tree-select
    v-if="['dept', 'post', 'user'].includes(type!)" v-model="selectValue" :data="treeData"
    :loading="loading" :expand-on-click-node="false" multiple check-on-click-node show-checkbox check-strictly clearable
    style="width: 100%"
  />
  <el-tree-select
    v-else-if="type === 'dynamic'" v-model="inputValue" :data="dynamicDic" :loading="loading" clearable
    style="width: 100%"
  />
  <FlowNodeSelect v-else-if="type === 'userTask'" v-model="inputValue" filter-type="userTask" />
  <el-input v-else v-model="inputValue" />
</template>
