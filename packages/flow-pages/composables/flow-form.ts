import type { FlowFormEmits, FlowFormProps } from '../flow-form/types'
import type { DialogProps, DrawerProps } from 'element-plus'

import { h, shallowRef } from 'vue'
import { isFunction, isNil, merge, omitBy, overSome } from 'lodash-es'
import { useOverlay } from '@yusui/composables'
import { serialize } from '@yusui/utils'

import { useConfigProvider } from './config'
import { CONFIG_DEFAULT } from '../constants'

// #region types
export type UseFlowFormType = 'dialog' | 'drawer' | 'window'

/** { [onXxx]?: Function } */
export type UseFlowFormEvents<K extends keyof FlowFormEmits = keyof FlowFormEmits> = {
  [P in `on${Capitalize<K>}`]?: (...args: Parameters<FlowFormEmits[K]>) => void
}

export type UseFlowFormProps = Partial<FlowFormProps> & UseFlowFormEvents

export interface UseFlowFormOptions extends UseFlowFormProps {
  /**
   * 弹窗类型
   * @default 'drawer'
   */
  type?: UseFlowFormType
  /**
   * window.open参数
   * @default ['', 'flow-form', 'left=0,top=0,width=1600,height=900']
   */
  window?: Parameters<typeof window.open>
  /**
   * 弹窗组件属性
   * @default { width: '80%', size: '80%', top: '100px', fullscreen: true, destroyOnClose: true }
   */
  overlay?: Partial<DialogProps | DrawerProps>
}

export type UseFlowFormReturn = ReturnType<typeof useFlowForm>
// #endregion types

/** 判断是useFlowform的配置而不是FlowFrom的props */
function isOptionsKeys(value: any, key: string) {
  return key in (CONFIG_DEFAULT.useFlowFormOptions ?? {})
}

/** 打开流程弹窗 */
export function useFlowForm(initOptions: UseFlowFormOptions = {}) {
  const { useFlowFormOptions } = useConfigProvider()
  const mergedOptions = merge({ ...useFlowFormOptions }, { ...initOptions })
  switch (mergedOptions?.type) {
    case 'window':
      return useFlowFormWindow(mergedOptions)
    case 'dialog':
    case 'drawer':
      return useFlowFormOverlay(mergedOptions)
    default:
      return { open: (_mergeOptions?: UseFlowFormOptions) => { }, close: () => { } }
  }
}

/** window弹窗 */
export function useFlowFormWindow(initOptions: UseFlowFormOptions = {}) {
  const openedWindow = shallowRef<Window | null>(null)
  const open = (options: UseFlowFormOptions = {}) => {
    const mergedOptions = merge({ ...initOptions }, { ...options })
    const { window: [url, name, features] = [] } = mergedOptions
    const openUrl = `${url}?${serialize(omitBy(mergedOptions, overSome(isFunction, isNil, isOptionsKeys)))}`
    openedWindow.value = window.open(openUrl, name, features)
    openedWindow.value?.addEventListener('message', (e) => {
      const { event, data } = e.data
      const fn = mergedOptions[event as keyof UseFlowFormEvents]
      typeof fn === 'function' && fn(data)
    })
  }
  const close = () => openedWindow.value?.close()
  return { open, close, openedWindow }
}

/** dialog和drawer弹窗 */
export function useFlowFormOverlay(initOptions: UseFlowFormOptions = {}) {
  const { FlowForm } = useConfigProvider()
  const { open: _open, close } = useOverlay()

  const open = (options: UseFlowFormOptions = {}) => {
    const mergedOptions = merge({ ...initOptions }, { ...options })
    _open({
      content: () => h(FlowForm!, omitBy(mergedOptions, isOptionsKeys)),
      class: 'flow-form-overlay',
      type: mergedOptions.type as 'dialog' | 'drawer',
      ...mergedOptions.overlay,
    })
  }

  return { open, close }
}
