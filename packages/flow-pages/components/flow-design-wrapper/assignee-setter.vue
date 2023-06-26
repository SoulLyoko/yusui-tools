<script setup lang="ts">
import type { AssigneeItem } from '@yusui/flow-design'

import { computed, ref, watch } from 'vue'
import { treeMap } from '@yusui/utils'
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

const treeData = ref<any[]>([])
const dynamicDic = ref<any[]>([])

const { getUserTree } = useFlowUserApi()
const { getParam } = useFlowParamApi()

watch(
  type,
  (val) => {
    if (['dept', 'post', 'user'].includes(val!)) {
      loading.value = true
      getUserTree(val === 'user' ? '' : val).then((res) => {
        treeData.value = treeMap(res.data, (e) => {
          return { label: e.title, value: e.id }
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
    v-if="['dept', 'post', 'user'].includes(type!)" v-model="selectValue" :data="treeData" :loading="loading"
    :expand-on-click-node="false" multiple check-on-click-node show-checkbox check-strictly clearable
  />
  <el-tree-select v-else-if="type === 'dynamic'" v-model="inputValue" :data="dynamicDic" :loading="loading" clearable />
  <FlowNodeSelect v-else-if="type === 'userTask'" v-model="inputValue" filter-type="userTask" />
  <el-input v-else v-model="inputValue" />
</template>
