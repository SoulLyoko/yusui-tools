import type { FlowFormEmit, FlowFormProps } from '../types'
import type { InjectionKey } from 'vue'

import { computed, defineAsyncComponent, inject, provide, ref, watchEffect } from 'vue'
import { useVModels } from '@vueuse/core'
import { useConfigProvider, useFlowTaskApi } from '@yusui/flow-pages'

export const injectionKey: InjectionKey<ReturnType<typeof useProvideState>> = Symbol('flowFormState')

export function useProvideState(props: FlowFormProps, emit: FlowFormEmit) {
  const vModels = useVModels(props, undefined, { passive: true, deep: true })
  const { flowDetail, modelValue: formData, formLoading } = vModels

  /** 标签页 */
  const { tabs, customForm, request } = useConfigProvider()
  const tabRefs = ref<Record<string, any>>({})
  const tabList = computed(() => {
    return tabs?.filter((tab) => {
      const tabProperty = flowDetail.value?.properties?.formProperty?.find(e => e.prop === tab.prop)
      return tabProperty?.display !== false
    }) ?? []
  })

  /** 标签页表单组件 */
  const formTabComponent = computed(() => {
    const InternalForm = tabList.value.find(tab => tab.prop === 'formTab')?.component
    const ExternalForm = customForm?.[flowDetail?.value?.process?.formPath ?? '']
    if (typeof ExternalForm === 'function')
      return defineAsyncComponent(ExternalForm! as any)
    else
      return ExternalForm ?? InternalForm
  })

  // 获取流程详情
  const { getFlowDetail } = useFlowTaskApi(request)
  watchEffect(() => {
    const { flowKey, taskId, instanceId } = props
    if (!flowKey && !taskId && !instanceId)
      return
    formLoading.value = true
    getFlowDetail({ flowKey, taskId, flowInstanceId: instanceId })
      .then((res) => {
        flowDetail.value = res.data
        formData.value = res.data.formData || {}
      })
      .finally(() => {
        formLoading.value = false
      })
  })

  // 表单变量
  const formVariables = computed(() => {
    return Object.entries(formData.value || {})
      .filter(([key]) => !key.startsWith('$'))
      .map(([key, value]) => ({ key, value }))
  })

  const state = {
    ...vModels,
    formData,
    formVariables,
    tabRefs,
    tabList,
    formTabComponent,
    emit,
  }

  provide(injectionKey, state)

  return state
}

export function useInjectState() {
  return inject(injectionKey)!
}
