<script setup lang="ts">
import type { ParticipateItem } from '../types'

import { useVModels } from '@vueuse/core'
import { enumToDic } from '@yusui/utils'
import { computed } from 'vue'

import { ParticipateType } from '../types'
import FlowAssigneeSetter from './FlowAssigneeSetter.vue'

const props = defineProps<{ modelValue: ParticipateItem[] }>()
const { modelValue: tableData } = useVModels(props, undefined, { defaultValue: [] })

const tableOption = computed(() => {
  return {
    rowKey: 'type',
    addBtn: true,
    column: [
      { label: '类型', prop: 'type', type: 'select', width: 150, dicData: enumToDic(ParticipateType) },
      { label: '值', prop: 'value', component: FlowAssigneeSetter },
    ],
  }
})
</script>

<template>
  <avue-dynamic v-model="tableData" :children="tableOption" />
</template>
