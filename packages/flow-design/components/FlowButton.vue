<script setup lang="ts">
import type { ButtonItem } from '../types'

import { useVModels } from '@vueuse/core'
import { sleep } from '@yusui/utils'
import { computed, onMounted } from 'vue'

import { useInjectState } from '../composables/state'
import { mergeButton } from '../utils'

const props = defineProps<{ modelValue: ButtonItem[] }>()
const { modelValue: tableData } = useVModels(props, undefined, { defaultValue: [] })

const { dataOptions } = useInjectState()
onMounted(async () => {
  await sleep()
  tableData.value = mergeButton(dataOptions.value?.buttonList ?? [], tableData.value ?? [])
})

const tableOption = computed(() => {
  const {
    flowButtonDisplayDic = [],
    flowButtonApprovalDic = [],
    flowButtonValidateDic = [],
    buttonList = [],
  } = dataOptions.value ?? {}
  const buttonSelectDic = buttonList?.map((e) => {
    return { label: e.name, value: e.key, desc: e.key }
  })
  return {
    rowKey: 'key',
    column: [
      { label: '按钮', prop: 'key', width: 150, type: 'select', dicData: buttonSelectDic ?? [], filterable: true },
      { label: '按钮名称', prop: 'name', width: 150 },
      { label: '显示条件', prop: 'display', type: 'select', multiple: true, dataType: 'string', dicData: flowButtonDisplayDic ?? [] },
      { label: '审批窗口', prop: 'approval', type: 'select', multiple: true, dataType: 'string', dicData: flowButtonApprovalDic ?? [] },
      { label: '是否校验', prop: 'validate', type: 'switch', width: 60, value: false, dicData: flowButtonValidateDic ?? [] },
    ],
  }
})
</script>

<template>
  <avue-dynamic v-model="tableData" :children="tableOption" />
</template>
