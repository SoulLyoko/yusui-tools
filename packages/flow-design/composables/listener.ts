import type { EdgeConfig, NodeConfig, TextConfig } from '@logicflow/core'
import type { FlowDesignState } from '../types'

import { nextTick } from 'vue'

import { defaultGroup } from '../options'

export function useModelerListener({
  lf,
  graphData,
  elementData,
  formData,
  formLoading,
  formVisible,
  formOption,
  formOptions,
  editorVisible,
}: FlowDesignState) {
  async function selectElement({ data }: { data?: EdgeConfig | NodeConfig }) {
    if (!data || !data.type || !data.id)
      return

    formLoading.value = true
    formVisible.value = true
    await nextTick()
    elementData.value = data
    formOption.value = {
      menuBtn: false,
      span: 24,
      tabs: true,
      labelPosition: 'left',
      group: formOptions.value?.[data.type!] ?? defaultGroup,
    }
    formData.value = { ...data.properties, id: data.id, name: (data.text as TextConfig)?.value || '' }
    formLoading.value = false
  }

  lf.value?.on('element:click', selectElement)
  // lf.value?.on('node:add', selectElement)
  // lf.value?.on('node:dnd-add', selectElement)
  // lf.value?.on('node:delete', () => selectElement({}))
  lf.value?.on('history:change', () => {
    graphData.value = lf.value?.getGraphData()
  })

  /** 编辑 */
  lf.value?.on('custom:edit-click', () => {
    editorVisible.value = true
  })
}
