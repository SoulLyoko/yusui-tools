import type { AvueFormInstance } from '@smallwei/avue'
import type { FlowDesignProps } from '../types'

import { inject, provide, ref } from 'vue'
import { useVModels } from '@vueuse/core'

export const injectionKey = Symbol('flowDesignState')

export function useProvideState(props: FlowDesignProps) {
  const vModels = useVModels(props)
  const {
    lf,
    modelValue: graphData,
    elementData,
    formOptions,
    formData,
    formOption,
    formDefaults,
    dataOptions,
  } = vModels as Required<typeof vModels>
  const formLoading = ref(false)
  const editorVisible = ref(false)

  function onUpdateFormData(val: any) {
    const id = elementData.value?.id
    id && lf.value?.setProperties(id, val)
    id && lf.value?.updateText(id, val.name)
  }

  const formRef = ref<AvueFormInstance>()
  const state = {
    lf,
    graphData,
    elementData,
    formRef,
    formData,
    formDefaults,
    formLoading,
    formOption,
    formOptions,
    editorVisible,
    dataOptions,
    onUpdateFormData,
    // formOptionFormat: props.formOptionFormat ?? (option => option),
    // formDataFormat: props.formDataFormat ?? (data => data),
  }

  provide(injectionKey, state)

  return state
}

export function useInjectState() {
  return inject<ReturnType<typeof useProvideState>>(injectionKey)!
}
