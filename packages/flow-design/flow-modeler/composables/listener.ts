import type { ModelerState } from '../types'
import type { AvueFormOption } from '@smallwei/avue'

import { nextTick } from 'vue'

import { defaultGroup } from '../../options'
import { mergeButton, mergeFormProperty } from '../../utils'

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
}: ModelerState) {
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
    // formOption.value = await formOptionFormat({
    //   menuBtn: false,
    //   span: 24,
    //   labelPosition: 'left',
    //   group: formOptions.value?.[data.type] ?? defaultGroup,
    // })
    // formData.value = await formDataFormat({ ...data.properties, id: data.id, name: data.text?.value || '' })

    const dataToSet = { ...data.properties, id: data.id, name: data.text?.value || '' }
    // 表单配置
    if (hasProp('formProperty', formOption.value))
      dataToSet!.formProperty = mergeFormProperty(dataOptions.value?.formPropertyColumn || [], dataToSet?.formProperty || [])
    // 按钮配置
    if (hasProp('button', formOption.value))
      dataToSet!.button = mergeButton(dataOptions.value?.buttonList || [], dataToSet?.button || [])

    formData.value = dataToSet

    await nextTick()
    formLoading.value = false
  }

  function hasProp(prop: string, option: AvueFormOption) {
    return option.group?.some(g => g.column?.some(c => c.prop === prop))
  }

  lf.value?.on('element:click', selectElement)
  lf.value?.on('blank:click', selectElement)
  lf.value?.on('node:add', selectElement)
  lf.value?.on('node:dnd-add', selectElement)
  lf.value?.on('node:delete', () => selectElement())
  lf.value?.on('history:change', () => {
    graphData.value = lf.value?.getGraphData()
  })

  lf.value?.on('custom:edit-click', () => {
    editorVisible.value = true
  })
  lf.value?.on('custom:reset-form-property', () => {
    graphData.value?.flowElementList?.forEach((item) => {
      if (item.properties?.formProperty)
        item.properties.formProperty = mergeFormProperty(dataOptions.value?.formPropertyColumn || [], [])
    })
    graphData.value = { ...graphData.value }
  })
  lf.value?.on('custom:reset-button', () => {
    graphData.value?.flowElementList?.forEach((item) => {
      if (item.properties?.button)
        item.properties.button = mergeButton(dataOptions.value?.buttonList || [], [])
    })
    graphData.value = { ...graphData.value }
  })
}
