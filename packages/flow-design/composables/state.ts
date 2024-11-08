import type { FlowDesignProps } from '../types'
import type { AvueFormInstance } from '@smallwei/avue'

import { useVModels } from '@vueuse/core'
import { inject, provide, ref } from 'vue'

export const injectionKey = 'flowDesignState'

export function useProvideState(props: FlowDesignProps) {
  const vModels = useVModels(props, undefined, { passive: true })
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

  const formRef = ref<AvueFormInstance>()
  const formLoading = ref(false)
  const formVisible = ref(false)
  const editorVisible = ref(false)

  function onUpdateFormData(val: any) {
    const id = elementData.value?.id
    id && lf.value?.setProperties(id, val)
    id && lf.value?.updateText(id, val.name)
    formVisible.value = false
  }

  const state = {
    lf,
    graphData,
    elementData,
    formRef,
    formVisible,
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
