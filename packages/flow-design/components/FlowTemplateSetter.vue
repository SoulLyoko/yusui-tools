<script setup lang="ts">
import type { TemplateItem } from '../types'

import { computed, defineComponent, h } from 'vue'
import { useVModels } from '@vueuse/core'
import { set } from 'lodash-unified'
import { ProDict } from '@yusui/components'

import { useInjectState } from '../composables/state'

const props = defineProps<{ modelValue: TemplateItem[], dataKey?: string }>()
const { modelValue: tableData } = useVModels(props, undefined, { defaultValue: [] })

const { dataOptions } = useInjectState()

const TemplateSelect = defineComponent({
  props: {
    tableData: { type: Object as () => { row: any }, default: () => ({ row: {} }) },
    dicData: { type: Array as () => TemplateItem[] },
  },
  setup(props) {
    function onChange(value: string) {
      const item = props.dicData?.find(e => e.value === value)
      set(props.tableData, 'row.children', item?.children ?? [])
    }

    return { onChange }
  },
  render() {
    return h(ProDict, { dicData: this.dicData, onChange: this.onChange })
  },
})

const tableOption = computed(() => {
  // @ts-ignore
  const dicData = dataOptions.value?.[props.dataKey] ?? []
  return {
    type: 'form',
    index: false,
    column: [
      { label: '模板', prop: 'value', type: 'select', dicData, component: TemplateSelect },
      {
        label: '字段映射',
        prop: 'children',
        type: 'dynamic',
        span: 24,
        children: {
          column: [
            { label: '模板书签', prop: 'label' },
            { label: '表单字段', prop: 'value' },
            { label: '默认值', prop: 'defautValue' },
          ],
        },
      },
    ],
  }
})
</script>

<template>
  <avue-dynamic v-model="tableData" :children="tableOption" />
</template>
