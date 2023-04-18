<script setup lang="ts">
import type { AvueFormColumn, AvueFormOption } from '@smallwei/avue'
import type { ButtonItem, FlowFormData, FormPropertyItem } from '@yusui/flow-design'
import type { TaskDetail } from '../../api/flow-task'
import type { FlowButton } from '../../api/flow-button'

import { computed, nextTick, ref, shallowRef } from 'vue'
import { FlowModeler, FlowViewer, defaultGraphData } from '@yusui/flow-design'

import { options } from './options'
import { getParam } from '../../api/flow-param'
import { useFlowButtonList } from '../../api/flow-button'

const props = defineProps<{
  modelValue?: string
  view?: boolean
  formOption?: string
  flowHistory?: TaskDetail[]
}>()
const emit = defineEmits(['update:modelValue'])

const modelerFormOption = ref<AvueFormOption>({})
const elementData = ref()

function mergeFormProperty(column: AvueFormColumn[], source: FormPropertyItem[]): FormPropertyItem[] {
  return column.map((col) => {
    const findSource = source.find(e => e.prop === col.prop)
    const { label, prop, display = true, disabled = false, detail = false, readonly = false, rules } = col
    const required = rules?.some(e => e.required) ?? false
    const result = { label, prop, display, disabled, detail, readonly, required, ...findSource }
    if (col.type === 'dynamic' && col.children?.column?.length)
      result.children = mergeFormProperty(col.children.column, findSource?.children ?? [])

    return result
  })
}
function mergeButton(button: FlowButton[], source: ButtonItem[]) {
  return button.map((btn) => {
    const findSource = source.find(e => e.buttonKey === btn.buttonKey)
    const result = { ...btn, ...findSource }
    return result
  })
}

const { data: buttonList } = useFlowButtonList()

async function formDataFormat(data: FlowFormData) {
  await nextTick()
  if (modelerFormOption.value.group?.some(e => e.prop === 'formProperty')) {
    const { column = [], group = [] }: AvueFormOption = JSON.parse(props.formOption || '{}')
    const formProperty = mergeFormProperty(
      [...column, ...group.map(g => g.column ?? []).flat()],
      data.formProperty || [],
    )
    data.formProperty = formProperty
  }
  if (modelerFormOption.value.group?.some(e => e.prop === 'button')) {
    const button = mergeButton(buttonList.value || [], data.button || [])
    data.button = button
  }
  return data
}

function formOptionFormat(option: AvueFormOption) {
  const { column = [], group = [] }: AvueFormOption = JSON.parse(props.formOption || '{}')
  const allColumn = [...column, ...group.map(g => g.column ?? []).flat()]
  const fieldsDic = allColumn.map((item) => {
    return { label: item.label, value: `$\{${item.prop}}`, desc: `$\{${item.prop}}` }
  })
  option.group?.forEach((group) => {
    if (group.prop === 'base') {
      group.column?.forEach((col) => {
        if (col.prop === 'priority') {
          col.type = 'select'
          col.filterable = true
          col.allowCreate = true
          col.defaultFirstOption = true
          col.dicData = fieldsDic
        }
        if (col.prop === 'formTitle') {
          col.type = 'select'
          col.dataType = 'string'
          col.multiple = true
          col.filterable = true
          col.allowCreate = true
          col.defaultFirstOption = true
          col.dicData = fieldsDic
        }
      })
    }
  })
  return option
}

const graphData = computed({
  get() {
    let getter = defaultGraphData()
    if (typeof props.modelValue === 'string' && props.modelValue)
      getter = JSON.parse(props.modelValue)
    else if (typeof props.modelValue === 'object' && Object.keys(props.modelValue))
      getter = props.modelValue

    return getter
  },
  set(val) {
    emit('update:modelValue', JSON.stringify(val))
  },
})

const flowTaskStatus = ref<
  { name?: string; status?: number; style?: { fill?: string; stroke?: string; strokeWidth?: number } }[]
>([])
getParam('flow.task.status').then((res) => {
  flowTaskStatus.value = res.data
})

const flowHistoryStyles = computed(() => {
  return props.flowHistory?.map((item) => {
    const style = flowTaskStatus.value.find(e => e.status === item.status)
    return { id: item.taskNodeKey, style }
  })
})

const lf = shallowRef()
// watchEffect(() => {
/** 解决在弹窗中连接锚点，画布会发生移动的问题 */
// lf.value?.on("anchor:dragstart", () => {
//   lf.value?.updateEditConfig({ stopMoveGraph: true });
// });
// lf.value?.on("anchor:dragend", () => {
//   lf.value?.updateEditConfig({ stopMoveGraph: false });
// });
// });
</script>

<template>
  <div v-if="view" class="flow-viewer">
    <div class="flow-status-legend">
      <div v-for="item in flowTaskStatus" :key="item.name" class="legend-item">
        <div class="legend-color" :style="{ backgroundColor: item.style?.fill }" />
        <span>{{ item.name }}</span>
      </div>
    </div>
    <FlowViewer v-model:lf="lf" :model-value="graphData" :styles="flowHistoryStyles" />
  </div>
  <FlowModeler
    v-else
    v-model="graphData"
    v-model:lf="lf"
    v-model:elementData="elementData"
    v-model:formOption="modelerFormOption"
    :form-options="options"
    :form-data-format="formDataFormat"
    :form-option-format="formOptionFormat"
    form-width="30%"
  />
</template>

<style lang="scss" scoped>
.flow-viewer {
  height: 100%;

  .flow-status-legend {
    position: absolute;
    left: 4px;
    z-index: 1;
    display: flex;

    .legend-item {
      display: flex;
      align-items: center;
      margin-right: 10px;

      .legend-color {
        width: 16px;
        height: 16px;
        margin-right: 5px;
      }
    }
  }
}
</style>
