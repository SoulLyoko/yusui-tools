import type { EdgeConfig, NodeConfig, TextConfig } from '@logicflow/core'
import type { FlowDesignState } from '../types'

import { nextTick } from 'vue'

import { defaultGroup } from '../options'
import { mergeButton, mergeFormProperty } from '../utils'

export function useModelerListener({
  lf,
  graphData,
  elementData,
  formData,
  formLoading,
  formOption,
  formOptions,
  editorVisible,
  dataOptions,
}: FlowDesignState) {
  async function selectElement({ data, isForce } = { data: {} as EdgeConfig | NodeConfig, isForce: false }) {
    const processNode = lf.value?.graphModel.nodes.find(node => node.type === 'process')
    if (!data && processNode?.id)
      data = lf.value?.getNodeDataById(processNode.id) as NodeConfig
    if (data?.id === elementData.value?.id && data?.type === elementData.value?.type && !isForce)
      return

    data.type !== 'process' && lf.value?.selectElementById(data.id!)

    formLoading.value = true
    await nextTick()
    elementData.value = data
    formOption.value = {
      menuBtn: false,
      span: 24,
      labelPosition: 'left',
      group: formOptions.value?.[data.type!] ?? defaultGroup,
    }
    formData.value = { ...data.properties, id: data.id, name: (data.text as TextConfig)?.value || '' }
    formLoading.value = false
  }

  lf.value?.on('element:click', selectElement)
  lf.value?.on('blank:click', selectElement)
  lf.value?.on('node:add', selectElement)
  lf.value?.on('node:dnd-add', selectElement)
  lf.value?.on('node:delete', () => selectElement())
  lf.value?.on('history:change', () => {
    graphData.value = lf.value?.getGraphData()
  })

  /** 编辑 */
  lf.value?.on('custom:edit-click', () => {
    editorVisible.value = true
  })
  /** 重置表单配置 */
  lf.value?.on('custom:reset-form-property', () => {
    graphData.value?.flowElementList?.forEach((item) => {
      if (item.properties?.formProperty)
        item.properties.formProperty = mergeFormProperty(dataOptions.value?.formPropertyList || [], [])
    })
    graphData.value = { ...graphData.value }
  })
  /** 重置按钮配置 */
  lf.value?.on('custom:reset-button', () => {
    graphData.value?.flowElementList?.forEach((item) => {
      if (item.properties?.button)
        item.properties.button = mergeButton(dataOptions.value?.buttonList || [], [])
    })
    graphData.value = { ...graphData.value }
  })
}
