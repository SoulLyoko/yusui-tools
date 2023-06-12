<script setup lang="ts">
import type { AvueFormDefaults, AvueFormOption } from '@smallwei/avue'
import type { FlowFormData } from '@yusui/flow-design'
import type { FlowHistory } from '../../api'

import { computed, ref } from 'vue'
import { defaultGraphData, defaultOptions } from '@yusui/flow-design'
import { enumToDic } from '@yusui/utils'
import { watchDebounced } from '@vueuse/core'

import { FlowButtonApproval, FlowButtonDisplay, useFlowButtonApi, useFlowParamApi } from '../../api'
import { useConfigProvider } from '../../composables'
import AssigneeSetter from './assignee-setter.vue'

const props = defineProps<{
  modelValue?: string
  view?: boolean
  flowFormOption?: string
  flowHistory?: FlowHistory[]
}>()
const emit = defineEmits(['update:modelValue'])

const { FlowDesign } = useConfigProvider()

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
const { data: buttonList } = useFlowButtonApi().useList()
const dataOptions = computed(() => ({
  formPropertyList: allColumn.value,
  buttonList: buttonList.value?.filter(e => e.status === 1),
  fieldsDic: allColumn.value.map(e => ({ label: e.label, value: `$\{${e.prop}}`, desc: `$\{${e.prop}}` })),
  flowButtonDisplayDic: enumToDic(FlowButtonDisplay),
  flowButtonApprovalDic: enumToDic(FlowButtonApproval),
}))

const formData = ref<FlowFormData>({})
const formDefaults = ref<AvueFormDefaults>({})
watchDebounced(formDefaults, async (defaults) => {
  if (!defaults)
    return
  // 审批人选择
  if (defaults.assignee?.children?.column?.[1])
    defaults.assignee.children.column[1].component = AssigneeSetter
  // 传阅人选择
  if (defaults.circulate?.children?.column?.[1]?.children?.column?.[1])
    defaults.circulate.children.column[1].children.column[1].component = AssigneeSetter
}, { debounce: 1 })

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
    <FlowDesign :model-value="graphData" :styles="flowHistoryStyles" :tooltips="flowHistoryToolTips" type="viewer" />
  </div>
  <FlowDesign
    v-else v-model="graphData" v-model:formData="formData" v-model:formDefaults="formDefaults"
    :form-options="defaultOptions" :data-options="dataOptions" form-width="30%"
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
