<script setup lang="ts">
import type { AssigneeItem } from '@yusui/flow-design'

import { computed, ref, watch } from 'vue'
import { treeMap } from '@yusui/utils'

import { useFlowUserApi } from '../../api'

const props = defineProps<{
  modelValue: string | string[]
  tableData?: { row?: AssigneeItem }
}>()
const emit = defineEmits(['update:modelValue'])

const { getUserTree } = useFlowUserApi()

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

const treeData = ref<any[]>([])
const loading = ref(false)
const type = computed(() => props.tableData?.row?.type)
watch(
  type,
  (val) => {
    if (!['dept', 'post', 'user'].includes(val!))
      return
    loading.value = true
    getUserTree(val === 'user' ? '' : val).then((res) => {
      treeData.value = treeMap(res.data, (node) => {
        return {
          label: node.title,
          value: node.id,
        }
      })
    }).finally(() => loading.value = false)
  },
  { immediate: true },
)
</script>

<template>
  <el-tree-select
    v-if="['dept', 'post', 'user'].includes(type!)" v-model="selectValue" :data="treeData" :loading="loading"
    multiple check-on-click-node show-checkbox check-strictly :expand-on-click-node="false"
  />
  <el-input v-else v-model="inputValue" />
</template>
