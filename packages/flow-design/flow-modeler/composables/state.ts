import type { ModelerProps } from '../types'

import { inject, provide, ref } from 'vue'
import { useVModels } from '@vueuse/core'

export const injectionKey = Symbol('modelerState')

export function useProvideModelerState(props: ModelerProps) {
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
  const formLoading = ref(false)
  const editorVisible = ref(false)

  function onUpdateFormData(val: any) {
    const id = elementData.value?.id
    id && lf.value?.setProperties(id, val)
    id && lf.value?.updateText(id, val.name)
  }

  const state = {
    lf,
    graphData,
    elementData,
    formData,
    formDefaults,
    formLoading,
    formOption,
    formOptions,
    editorVisible,
    dataOptions,
    onUpdateFormData,
    formOptionFormat: props.formOptionFormat ?? (option => option),
    formDataFormat: props.formDataFormat ?? (data => data),
  }

  provide(injectionKey, state)

  return state
}

export function useInjectModelerState() {
  return inject<ReturnType<typeof useProvideModelerState>>(injectionKey)!
}
