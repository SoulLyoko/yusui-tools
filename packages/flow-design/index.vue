<script setup lang="ts">
import type { Definition, EdgeConfig, LogicFlow, NodeConfig, ShapeStyleAttribute } from '@logicflow/core'
import type { TooltipItem, TurboData } from './extensions'
import type { AvueFormColumn, AvueFormDefaults, AvueFormGroup, AvueFormOption, DicItem } from '@smallwei/avue'
import type { ButtonItem, FlowFormData } from './types'

import { onMounted } from 'vue'
import { uniqueId } from 'lodash-unified'

import { useInit, useProvideState } from './composables'
import FlowEditor from './components/flow-editor.vue'
import '@logicflow/core/dist/style/index.css'
import '@logicflow/extension/lib/style/index.css'

interface StyleItem {
  id?: string
  style?: ShapeStyleAttribute
}

const props = defineProps<{
  /** LogicFlow实例 */
  lf?: LogicFlow
  /** LogicFlow初始化配置 */
  initOptions?: Definition
  /** 流程图数据 */
  modelValue?: TurboData
  /** 当前选中元素的数据 */
  elementData?: NodeConfig | EdgeConfig
  /** 所有表单配置 */
  formOptions?: Record<string, AvueFormGroup[]>
  /** 当前选中元素的表单数据 */
  formData?: FlowFormData
  /** 当前选中元素的表单配置 */
  formOption?: AvueFormOption
  /** 当前表单控制配置 */
  formDefaults?: AvueFormDefaults
  /** 表单宽度 */
  formWidth?: string
  // formOptionFormat?: (option: AvueFormOption) => AvueFormOption | Promise<AvueFormOption>
  // formDataFormat?: (data: object) => object | Promise<object>
  /** 表单配置数据 */
  dataOptions?: {
    /** 按钮数据 */
    buttonList?: ButtonItem[]
    /** 表单字段数据 */
    formPropertyList?: AvueFormColumn[]
    /** 字段字典 */
    fieldsDic?: DicItem[]
    /** 按钮显示字典 */
    flowButtonDisplayDic?: DicItem[]
    /** 按钮审批字典 */
    flowButtonApprovalDic?: DicItem[]
  }
  /** 查看器模式 */
  type?: 'viewer'
  /** 设置节点的样式 */
  styles?: StyleItem[]
  /** 节点提示框 */
  tooltips?: TooltipItem[]
}>()

const state = useProvideState(props)
const { lf, graphData, formRef, formData, formOption, formDefaults, formLoading, editorVisible, onUpdateFormData } = state
const { initModeler, initViewer } = useInit({ props, state })

const containerId = uniqueId('logicflow-container')
onMounted(() => {
  const container: HTMLElement = document.querySelector(`#${containerId}`)!
  props.type === 'viewer' ? initViewer(container) : initModeler(container)
})
</script>

<template>
  <div v-if="type === 'viewer'" :id="containerId" class="lf-container" />

  <el-container v-else class="lf-container">
    <el-main :id="containerId" class="lf-main" />
    <el-aside :width="formWidth" class="lf-aside">
      <slot name="form-top" />
      <el-empty v-if="!formOption?.group?.length" description="选择元素以编辑数据" />
      <el-skeleton v-else-if="formLoading" />
      <avue-form
        v-else ref="formRef" v-model="formData" v-model:defaults="formDefaults" :option="formOption"
        @update:model-value="onUpdateFormData"
      />
    </el-aside>

    <FlowEditor v-model="graphData" v-model:visible="editorVisible" @confirm="lf?.render($event)">
      <template v-if="$slots['editor-header']" #header>
        <slot name="editor-header" />
      </template>
    </FlowEditor>
  </el-container>
</template>
