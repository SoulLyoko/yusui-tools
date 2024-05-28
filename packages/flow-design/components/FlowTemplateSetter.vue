<script setup lang="ts">
import type { TemplateItem } from '../types'

import { computed, defineComponent, h, resolveComponent } from 'vue'
import { useVModels } from '@vueuse/core'
import { set } from 'lodash-unified'
import { ProDict } from '@yusui/components'

import { useInjectState } from '../composables/state'
import { formColumnToDic, getFormColumn } from '../utils'

const props = defineProps<{ modelValue: TemplateItem[], dataKey?: string }>()
const { modelValue: tableData } = useVModels(props)

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

const { dataOptions } = useInjectState()
const allColumn = computed(() => {
  const formOptions = dataOptions.value?.formOptions?.filter(e => e.prop) ?? []
  return formOptions.map(e => getFormColumn(e)).flat()
})

const TemplateChildrenSetter = defineComponent({
  props: {
    modelValue: { type: Array, default: () => [] },
  },
  emits: ['update:modelValue'],
  setup() {
    const propDic = formColumnToDic(allColumn.value ?? [])
    const option = {
      column: [
        { label: '模板书签', prop: 'label' },
        { label: '表单字段', prop: 'value', type: 'select', dicData: propDic, filterable: true },
        { label: '默认值', prop: 'defaultValue' },
      ],
    }

    return { option }
  },
  render() {
    return h(resolveComponent('avue-dynamic'), {
      'modelValue': this.modelValue,
      'children': this.option,
      'onUpdate:modelValue': (val: any) => this.$emit('update:modelValue', val),
    })
  },
})

const tableOption = computed(() => {
  // @ts-ignore
  const templateDic = dataOptions.value?.[props.dataKey] ?? []
  return {
    type: 'form',
    index: false,
    column: [
      { label: '模板', prop: 'value', type: 'select', dicData: templateDic, component: TemplateSelect },
      { label: '字段映射', prop: 'children', type: 'dynamic', span: 24, value: [], component: TemplateChildrenSetter },
    ],
  }
})
</script>

<template>
  <avue-dynamic v-model="tableData" :children="tableOption" />
</template>
