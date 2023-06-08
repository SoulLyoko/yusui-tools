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
  formOptionFormat,
  formDataFormat,
  dataOptions,
  formRef,
  formDefaults,
}: FlowDesignState) {
  async function selectElement({ data, isForce } = { data: undefined as any, isForce: false }) {
    const processNode = lf.value?.graphModel.nodes.find(node => node.type === 'process')
    if (!data && processNode?.id) {
      // elementData!.value = undefined;
      // formOption.value.group = [];
      // formData.value = {};
      // return;
      data = lf.value?.getNodeDataById(processNode.id)
    }
    if (data?.id === elementData.value?.id && !isForce)
      return
    data.type !== 'process' && lf.value?.selectElementById(data.id)

    formLoading.value = true
    await nextTick()
    elementData.value = data
    formOption.value = {
      menuBtn: false,
      span: 24,
      labelPosition: 'left',
      group: formOptions.value?.[data.type] ?? defaultGroup,
    }
    formData.value = { ...data.properties, id: data.id, name: data.text?.value || '' }
    // formOption.value = await formOptionFormat({
    //   menuBtn: false,
    //   span: 24,
    //   labelPosition: 'left',
    //   group: formOptions.value?.[data.type] ?? defaultGroup,
    // })
    // formData.value = await formDataFormat({ ...data.properties, id: data.id, name: data.text?.value || '' })
    formLoading.value = false
    await nextTick()
    handleDataOptions()
  }

  async function handleDataOptions() {
    const { formPropertyList, buttonList, fieldsDic, flowButtonDisplayDic, flowButtonApprovalDic } = dataOptions.value ?? {}
    const hasProp = (prop: string) => formOption.value?.group?.some(g => g.column?.some(c => c.prop === prop))
    // 按钮配置
    if (hasProp('button')) {
      formData.value!.button = mergeButton(buttonList || [], formData.value?.button || [])
      formDefaults.value?.button.children?.column?.forEach((col) => {
        if (col.prop === 'display')
          col.dicData = flowButtonDisplayDic
        if (col.prop === 'approval')
          col.dicData = flowButtonApprovalDic
      })
    }
    // 表单配置
    if (hasProp('formProperty'))
      formData.value!.formProperty = mergeFormProperty(formPropertyList || [], formData.value?.formProperty || [])
    // 优先级字段
    if (hasProp('priority'))
      formRef.value?.updateDic('priority', fieldsDic)
    // 表单标题字段
    if (hasProp('formTitle'))
      formRef.value?.updateDic('formTitle', fieldsDic)
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
