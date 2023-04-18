<script setup lang="ts">
import type { Definition, EdgeConfig, NodeConfig } from '@logicflow/core'
import type { AvueFormGroup, AvueFormOption } from '@smallwei/avue'
import type { TurboData } from '../extensions'

import { onMounted, watch } from 'vue'
import { uniqueId } from 'lodash-unified'
import LogicFlow from '@logicflow/core'
import { InsertNodeInPolyline, MiniMap, SelectionSelect } from '@logicflow/extension'
import '@logicflow/core/dist/style/index.css'
import '@logicflow/extension/lib/style/index.css'

import { BpmnExtend, Control, Dagre, Group, Menu, Panel, TurboAdapter } from '../extensions'
import { defaultTheme } from '../constants'
import { useModelerListener, useProvideModelerState } from './composables'
import FlowEditor from './components/flow-editor.vue'

const props = defineProps<{
  /** LogicFlow实例 */
  lf?: LogicFlow
  /** LogicFlow初始化配置 */
  initOptions?: Definition
  /** 流程图数据 */
  modelValue?: TurboData
  /** 当前选中元素的数据 */
  elementData?: NodeConfig | EdgeConfig
  /** 当前选中元素的表单数据 */
  formData?: object
  formOption?: AvueFormOption
  /** 表单配置 */
  formOptions?: Record<string, AvueFormGroup[]>
  /** 表单宽度 */
  formWidth?: string
  formOptionFormat?: (option: AvueFormOption) => AvueFormOption | Promise<AvueFormOption>
  formDataFormat?: (data: object) => object | Promise<object>
}>()

const state = useProvideModelerState(props)
const { lf, graphData, formData, formLoading, formOption, editorVisible, onUpdateFormData } = state

const containerId = uniqueId('container')
onMounted(() => {
  lf.value = new LogicFlow({
    container: document.querySelector(`#${containerId}`)!,
    grid: { type: 'dot', size: 10 },
    nodeTextDraggable: true,
    edgeTextDraggable: true,
    nodeTextEdit: true,
    edgeTextEdit: true,
    plugins: [
      Control,
      Panel,
      SelectionSelect,
      Menu,
      MiniMap,
      InsertNodeInPolyline,
      BpmnExtend,
      Group,
      TurboAdapter,
      Dagre,
    ],
    edgeGenerator: (sourceNode, targetNode) => {
      if (['note', 'serviceTask'].includes(targetNode.type))
        return 'noteFlow'
    },
    ...props.initOptions,
  })
  lf.value?.setTheme(defaultTheme)
  useModelerListener(state)
  watch(
    graphData,
    (val) => {
      // const eq = isEqual(val, lf.value?.getGraphData());
      const newVal = JSON.stringify(val)
      const oldVal = JSON.stringify(lf.value?.getGraphData())
      const eq = newVal === oldVal
      if (eq)
        return
      lf.value?.render(val)
      lf.value?.emit('element:click', { isForce: true })
    },
    { immediate: true },
  )
})
</script>

<template>
  <el-container class="lf-container">
    <el-main :id="containerId" class="lf-main" />
    <el-aside :width="formWidth" class="lf-aside">
      <el-empty v-if="!formOption?.group?.length" description="选择元素以编辑数据" />
      <avue-form
        v-else-if="!formLoading"
        v-model="formData"
        :option="formOption"
        @update:model-value="onUpdateFormData"
      />
    </el-aside>

    <FlowEditor v-model="graphData" v-model:visible="editorVisible" @confirm="lf?.render($event)" />
  </el-container>
</template>
