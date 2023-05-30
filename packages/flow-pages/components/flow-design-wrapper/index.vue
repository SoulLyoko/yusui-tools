<script setup lang="ts">
import type { AvueFormColumn, AvueFormDefaults, AvueFormOption } from '@smallwei/avue'
import type { ButtonItem, FlowFormData, FormPropertyItem } from '@yusui/flow-design'
import type { FlowButton, FlowHistory } from '../../api'

import { computed, ref, watch } from 'vue'
import { defaultGraphData } from '@yusui/flow-design'
import { enumToDic } from '@yusui/utils'

import { FlowButtonApproval, FlowButtonDisplay, useFlowButtonApi, useFlowParamApi } from '../../api'
import { useConfigProvider } from '../../composables'
import { options } from './options'
import AssigneeSetter from './assignee-setter.vue'

const props = defineProps<{
  modelValue?: string
  view?: boolean
  flowFormOption?: string
  flowHistory?: FlowHistory[]
}>()
const emit = defineEmits(['update:modelValue'])

const { FlowViewer, FlowModeler } = useConfigProvider()

const formData = ref<FlowFormData>({})
const formDefaults = ref<AvueFormDefaults>({})

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

const allColumn = computed(() => {
  const { column = [], group = [] }: AvueFormOption = JSON.parse(props.flowFormOption || '{}')
  const all = [...column, ...group.map(g => g.column ?? []).flat()]
  return all
})

const fieldsDic = computed(() => {
  const dic = allColumn.value.map((item) => {
    return { label: item.label, value: `$\{${item.prop}}`, desc: `$\{${item.prop}}` }
  })
  return dic
})
const flowButtonDisplayDic = enumToDic(FlowButtonDisplay)
const flowButtonApprovalDic = enumToDic(FlowButtonApproval)

const { data: buttonList } = useFlowButtonApi().useList()

watch(formDefaults, (defaults) => {
  if (!defaults)
    return
  // 优先级字段
  if (defaults.priority) {
    // defaults.priority.dicData = fieldsDic.value
    defaults.priority.control = () => {
      return { priority: { dicData: fieldsDic.value } }
    }
  }
  // 表单标题字段
  if (defaults.formTitle) {
    // defaults.formTitle.dicData = fieldsDic.value
    defaults.formTitle.control = () => {
      return { formTitle: { dicData: fieldsDic.value } }
    }
  }
  // 审批人选择
  if (defaults.assignee?.children?.column?.[1])
    defaults.assignee.children.column[1].component = AssigneeSetter
  // 传阅人选择
  if (defaults.circulate?.children?.column?.[1]?.children?.column?.[1])
    defaults.circulate.children.column[1].children.column[1].component = AssigneeSetter
  // 表单配置
  if (defaults.formProperty)
    formData.value.formProperty = mergeFormProperty(allColumn.value, formData.value.formProperty || [])
  // 按钮配置
  if (defaults.button) {
    defaults.button.children?.column?.forEach((col) => {
      if (col.prop === 'display')
        col.dicData = flowButtonDisplayDic
      if (col.prop === 'approval')
        col.dicData = flowButtonApprovalDic
    })
    formData.value.button = mergeButton(buttonList.value || [], formData.value.button || [])
  }
})

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
  return button.filter(e => e.status === 1).map((btn) => {
    const findSource = source.find(e => e.buttonKey === btn.buttonKey)
    const { name, buttonKey, display, approval } = btn
    const result = { name, buttonKey, display, approval, ...findSource }
    return result
  })
}

const { data: flowTaskStatus } = useFlowParamApi().useParam('flow.task.status' as const)

const flowHistoryStyles = computed(() => {
  return props.flowHistory?.map((item) => {
    const style = flowTaskStatus.value?.find(e => e.value === item.status)?.style
    return { id: item.taskNodeKey, style }
  })
})
const flowHistoryToolTips = computed(() => {
  return props.flowHistory?.filter(item => item.taskNodeType === 'userTask')?.map((item) => {
    return {
      id: item.taskNodeKey,
      content:
        `<div>${item.assigneeName}</div>
        <div>${item.endTime ?? ''}</div>
        <div>${item.comment?.comment ?? ''}</div>`,
    }
  })
})

function resetButton() {
  graphData.value?.flowElementList?.forEach((item) => {
    if (item.properties?.button)
      item.properties.button = mergeButton(buttonList.value || [], [])
  })
  graphData.value = { ...graphData.value }
}
function resetFormProperty() {
  graphData.value?.flowElementList?.forEach((item) => {
    if (item.properties?.formProperty)
      item.properties.formProperty = mergeFormProperty(allColumn.value, [])
  })
  graphData.value = { ...graphData.value }
}

// const lf = shallowRef()
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
      <div v-for="item in flowTaskStatus" :key="item.label" class="legend-item">
        <div class="legend-color" :style="{ backgroundColor: item.style?.fill }" />
        <span>{{ item.label }}</span>
      </div>
    </div>
    <FlowViewer :model-value="graphData" :styles="flowHistoryStyles" :tooltips="flowHistoryToolTips" />
  </div>
  <FlowModeler
    v-else v-model="graphData" v-model:formData="formData" v-model:formDefaults="formDefaults"
    :form-options="options" form-width="30%"
  >
    <template #form-top>
      <el-button type="default" @click="resetButton">
        重置所有按钮配置
      </el-button>
      <el-button type="default" @click="resetFormProperty">
        重置所有表单配置
      </el-button>
    </template>
  </FlowModeler>
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
