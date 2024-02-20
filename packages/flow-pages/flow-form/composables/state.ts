import type { FlowFormEmit, FlowFormProps } from '../types'
import type { InjectionKey } from 'vue'
import type { FlowButton, FlowParamMap } from '@yusui/flow-pages'

import { computed, defineAsyncComponent, inject, provide, ref, watchEffect } from 'vue'
import { clamp, useSwipe, useVModels } from '@vueuse/core'
import { isMobile, useButtonHandler, useConfigProvider, useEmitter, useFlowParamApi, useFlowTaskApi } from '@yusui/flow-pages'
import { ElMessage } from 'element-plus'

export const injectionKey: InjectionKey<ReturnType<typeof useProvideState>> = Symbol('flowFormState')

export function useProvideState(props: FlowFormProps, emit: FlowFormEmit) {
  const vModels = useVModels(props, undefined, { passive: true, deep: true })
  const {
    flowDetail,
    modelValue: formData,
    formLoading,
    submitLoading,
    activeTab,
    activeBtn,
    approvalVisible,
    afterGetDetail,
    beforeClick,
    beforeSubmit,
    afterSubmit,
  } = vModels

  const emitter = useEmitter()

  /** 标签页 */
  const { tabs, customForm, request, flowParams: defaultFlowParams } = useConfigProvider()
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
      threshold: 300,
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
        setTimeout(async () => {
          await afterGetDetail?.value?.(res.data)
          await emitter.emitter.emitAsync('afterGetDetail', res.data)
        }, 300)
      })
      .finally(() => {
        formLoading.value = false
      })
  })

  /** 流程参数 */
  const { useParams } = useFlowParamApi(request)
  const { data: flowParamsData } = useParams()
  const flowParams = computed(() => ({ ...defaultFlowParams, ...flowParamsData.value } as FlowParamMap))
  function useFlowParam<K extends keyof FlowParamMap>(key: K) {
    return computed<FlowParamMap[K]>(() => flowParams.value[key])
  }

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
    ...emitter,
    formData,
    formVariables,
    tabRefs,
    tabList,
    detail,
    tabsRef,
    emit,
    onButtonClick,
    onSubmit,
    flowParams,
    useFlowParam,
  }

  provide(injectionKey, state)

  /** 按钮点击时如果配置了显示审批窗口则显示，否则直接提交流程 */
  async function onButtonClick(btn: FlowButton) {
    activeBtn.value = btn
    if (btn.validate === 1) {
      for (const tabRef of Object.values(tabRefs.value))
        await tabRef?.validate?.()
    }
    await beforeClick?.value?.(btn)
    await emitter.emitter.emitAsync('beforeClick', btn)
    if (btn?.approval !== 'false')
      approvalVisible.value = true
    else
      onSubmit()
  }

  /** 提交处理 */
  const buttonHandler = useButtonHandler(state)
  async function onSubmit() {
    try {
      submitLoading.value = true
      await beforeSubmit?.value?.(activeBtn.value!)
      await emitter.emitter.emitAsync('beforeSubmit', activeBtn.value!)
      const { buttonKey } = activeBtn.value
      const handler = buttonHandler[buttonKey!]
      if (!handler) {
        ElMessage.error('没有找到相应的操作')
        return
      }
      const res = await handler?.()
      await afterSubmit?.value?.(res)
      await emitter.emitter.emitAsync('afterSubmit', res)
      approvalVisible.value = false
      emit('complete', activeBtn.value!)
    }
    finally {
      submitLoading.value = false
    }
  }

  return state
}

export function useInjectState() {
  return inject(injectionKey)!
}
