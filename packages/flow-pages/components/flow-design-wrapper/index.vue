<script setup lang="ts">
import type { AvueFormDefaults, AvueFormOption } from '@smallwei/avue'
import type { FlowFormData } from '@yusui/flow-design'
import type { FlowHistory } from '../../api'

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
const { data: buttonListData } = useFlowButtonApi().useList()
const buttonList = computed(() => buttonListData.value?.filter(e => e.status === 1))

const fieldsDic = computed(() => {
  const dic = allColumn.value.map((item) => {
    return { label: item.label, value: `$\{${item.prop}}`, desc: `$\{${item.prop}}` }
  })
  return dic
})
const flowButtonDisplayDic = enumToDic(FlowButtonDisplay)
const flowButtonApprovalDic = enumToDic(FlowButtonApproval)

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
  // 按钮
  if (defaults.button) {
    defaults.button.children?.column?.forEach((col) => {
      if (col.prop === 'display')
        col.dicData = flowButtonDisplayDic
      if (col.prop === 'approval')
        col.dicData = flowButtonApprovalDic
    })
  }
})

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
    :form-options="options" :data-options="{ formPropertyColumn: allColumn, buttonList }" form-width="30%"
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
