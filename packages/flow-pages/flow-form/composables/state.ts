import type { FlowFormEmit, FlowFormProps } from '../types'
import type { InjectionKey } from 'vue'

import { computed, defineAsyncComponent, inject, provide, ref, watchEffect } from 'vue'
import { clamp, useSwipe, useVModels } from '@vueuse/core'
import { isMobile, useConfigProvider, useEmitter, useFlowTaskApi } from '@yusui/flow-pages'

export const injectionKey: InjectionKey<ReturnType<typeof useProvideState>> = Symbol('flowFormState')

export function useProvideState(props: FlowFormProps, emit: FlowFormEmit) {
  const vModels = useVModels(props, undefined, { passive: true, deep: true })
  const { flowDetail, modelValue: formData, formLoading, activeTab, afterGetDetail } = vModels

  const { emitter } = useEmitter()

  /** 标签页 */
  const { tabs, customForm, request } = useConfigProvider()
  const tabRefs = ref<Record<string, any>>({})
  const tabList = computed(() => {
    return tabs?.filter((tab) => {
      const tabProperty = flowDetail.value?.properties?.formProperty?.find(e => e.prop === tab.prop)
      const mergedTab = { ...tab, display: tabProperty?.display ?? tab.display }
      return mergedTab?.display !== false
    }).map((tab) => {
      let component = tab.component
      if (tab.prop === 'formTab') {
        const ExternalForm = customForm?.[flowDetail?.value?.process?.formPath ?? '']
        if (typeof ExternalForm === 'function')
          component = defineAsyncComponent(ExternalForm! as any)
        else if (ExternalForm)
          component = ExternalForm
      }
      return { ...tab, component }
    }) ?? []
  })

  /** 移动端tabs滑动 */
  const tabsRef = ref()
  if (isMobile()) {
    useSwipe(tabsRef, {
      onSwipeEnd(e, direction) {
        if (!['left', 'right'].includes(direction))
          return
        const currentIndex = tabList.value.findIndex(e => e.prop === activeTab.value)
        const changeIndex = clamp(currentIndex + (direction === 'right' ? -1 : 1), 0, tabList.value.length - 1)
        activeTab.value = tabList.value[changeIndex]!.prop!
      },
    })
  }

  /** 获取流程详情 */
  const { getFlowDetail } = useFlowTaskApi(request)
  watchEffect(() => {
    const { flowKey, taskId, instanceId } = props
    if (!flowKey && !taskId && !instanceId)
      return
    formLoading.value = true
    getFlowDetail({ flowKey, taskId, flowInstanceId: instanceId })
      .then(async (res) => {
        flowDetail.value = res.data
        formData.value = { ...res.data.formData, ...formData.value }
        await afterGetDetail?.value?.(res.data)
        await emitter.emitAsync('afterGetDetail', res.data)
      })
      .finally(() => {
        formLoading.value = false
      })
  })

  /** 表单变量 */
  const formVariables = computed(() => {
    return Object.entries(formData.value || {})
      .filter(([key]) => !key.startsWith('$'))
      .map(([key, value]) => ({ key, value }))
  })

  /** 是否详情 */
  const detail = computed(() => {
    return props.detail === true || props.detail === 'true'
  })

  const state = {
    ...vModels,
    ...useEmitter(),
    formData,
    formVariables,
    tabRefs,
    tabList,
    detail,
    tabsRef,
    emit,
  }

  provide(injectionKey, state)

  return state
}

export function useInjectState() {
  return inject(injectionKey)!
}
