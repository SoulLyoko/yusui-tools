<script setup lang="ts">
import type { AvueFormOption } from '@smallwei/avue'
import type { FlowHistory, FlowUserTree } from '@yusui/flow-pages'

import { computed, shallowRef } from 'vue'
import { defaultGraphData, defaultOptions } from '@yusui/flow-design'
import { enumToDic, treeMap } from '@yusui/utils'
import { watchOnce } from '@vueuse/core'
import {
  FlowButtonApproval,
  FlowButtonDisplay,
  useConfigProvider,
  useFlowButtonApi,
  useFlowParamApi,
  useFlowUserApi,
  whetherDic,
} from '@yusui/flow-pages'

const props = defineProps<{
  modelValue?: string
  view?: boolean
  flowFormOption?: string
  flowHistory?: FlowHistory[]
  showLegend?: boolean
}>()
const emit = defineEmits(['update:modelValue', 'nodeClick'])

const lf = shallowRef()
watchOnce(lf, () => {
  lf.value?.on('node:click', (e: any) => emit('nodeClick', e))
})

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

const { FlowDesign, tabs, request } = useConfigProvider()

const tabList = computed(() => {
  return tabs?.map(e => ({ ...e, display: e.display ?? true })) ?? []
})

const ready = computed(() => !props.view)
const { data: buttonList } = useFlowButtonApi(request).useList({ ready })

const { useUserTree } = useFlowUserApi(request)
const { data: userTreeData } = useUserTree({ ready })
const { data: deptTreeData } = useUserTree({ ready, defaultParams: ['dept'] })
const { data: postTreeData } = useUserTree({ ready, defaultParams: ['post'] })

const { useParam } = useFlowParamApi(request)
const { data: dynamicData } = useParam('flow.trends.user')

function userTreeToDic(data: FlowUserTree[]) {
  return treeMap(data, (e) => {
    return { ...e, label: e.title, value: e.id }
  })
}

const dataOptions = computed(() => ({
  formPropertyList: [...allColumn.value, ...tabList.value],
  buttonList: buttonList.value,
  fieldsDic: allColumn.value.map(e => ({ label: e.label, value: `$\{${e.prop}}`, desc: `$\{${e.prop}}` })),
  flowButtonDisplayDic: enumToDic(FlowButtonDisplay),
  flowButtonApprovalDic: enumToDic(FlowButtonApproval),
  flowButtonValidateDic: whetherDic.map(e => ({ ...e, label: '' })),
  flowAssigneeUserDic: userTreeToDic(userTreeData.value ?? []),
  flowAssigneeDeptDic: userTreeToDic(deptTreeData.value ?? []),
  flowAssigneePostDic: userTreeToDic(postTreeData.value ?? []),
  flowAssigneeDynamicDic: dynamicData.value,
}))

const { data: flowTaskStatus } = useParam('flow.task.status')
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
        <div>${item.comment?.handleComment ?? ''}</div>`,
    }
  })
})
</script>

<template>
  <div v-if="view" class="flow-viewer">
    <div v-if="showLegend !== false" class="flow-status-legend">
      <div v-for="item in flowTaskStatus" :key="item.label" class="legend-item">
        <div class="legend-color" :style="{ backgroundColor: item.style?.fill }" />
        <span class="legend-text">{{ item.label }}</span>
      </div>
    </div>
    <FlowDesign
      v-model:lf="lf" :model-value="graphData" :styles="flowHistoryStyles" :tooltips="flowHistoryToolTips"
      type="viewer"
    />
  </div>
  <FlowDesign v-else v-model="graphData" :form-options="defaultOptions" :data-options="dataOptions" form-width="30%" />
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

      .legend-text {
        color: #000;
      }
    }
  }
}
</style>
