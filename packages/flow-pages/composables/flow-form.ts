import type { Emits, Props } from '../flow-form/types'
import type { DialogProps, DrawerProps } from 'element-plus'
import type { Component, VNode } from 'vue'

import { defineAsyncComponent, getCurrentInstance, h, ref, render } from 'vue'
import { isFunction, isNil, merge, omitBy, overSome } from 'lodash-es'
import { ElDialog, ElDrawer } from 'element-plus'
import { serialize } from '@yusui/utils'

import FlowForm from '../flow-form/index.vue'
import { useConfigProvider } from './config'

export type UseFlowFormType = 'dialog' | 'drawer' | 'window'

/** { [onXxx]?: Function } */
export type UseFlowFormEvents<K extends keyof Emits = keyof Emits> = {
  [P in `on${Capitalize<K>}`]?: Function;
}

export type FlowFormProps = Partial<Props> & UseFlowFormEvents

export interface UseFlowFormOptions extends FlowFormProps {
  type?: UseFlowFormType
  /** 外置表单路径 */
  formPath?: string
  /** window.open参数 */
  window?: Parameters<typeof window.open>
  /** 弹窗组件属性 */
  overlay?: Partial<DialogProps | DrawerProps>
}

export type UseFlowFormReturn = ReturnType<typeof useFlowForm>

const defaultOptions: UseFlowFormOptions = {
  type: 'drawer',
  formPath: '',
  window: ['', 'flow-form', 'left=0,top=0,width=1600,height=900'],
  overlay: {
    width: '80%',
    size: '80%',
    top: '100px',
    fullscreen: true,
    destroyOnClose: true,
  },
}

export function useFlowForm(options: UseFlowFormOptions = {}) {
  switch (options?.type) {
    case 'window':
      return useFlowFormWindow(options)
    case 'dialog':
    case 'drawer':
      return useFlowFormOverlay(options)
    default:
      return { open: (mergeOptions?: UseFlowFormOptions) => { }, close: () => { } }
  }
}

export function useFlowFormWindow(options: UseFlowFormOptions = {}) {
  const openedWindow = ref<Window | null>(null)
  const open = (mergeOptions: UseFlowFormOptions = {}) => {
    const mergedOptions = merge(defaultOptions, options, mergeOptions)
    const { window: [url, name, features] = [] } = mergedOptions
    const openUrl = `${url}?${serialize(omitBy(mergedOptions, overSome(isFunction, isNil, k => k in defaultOptions)))}`
    openedWindow.value = window.open(openUrl, name, features)
    openedWindow.value?.addEventListener('message', (e) => {
      const { event } = e.data
      const fn = mergeOptions[event as keyof UseFlowFormEvents]
      typeof fn === 'function' && fn(e.data)
    })
  }
  const close = () => openedWindow.value?.close()
  return { open, close, openedWindow }
}

export function useFlowFormOverlay(options: UseFlowFormOptions = {}) {
  const { appContext } = getCurrentInstance()!
  const { customForm } = useConfigProvider()

  let container: HTMLElement | null
  let overlay: VNode
  const open = (mergeOptions?: UseFlowFormOptions) => {
    container = document.createElement('div')
    container.className = 'flow-form-wrapper'

    const mergedOptions = merge(defaultOptions, options, mergeOptions)
    const renderComponent = resolveFlowFormComponent(customForm ?? {}, mergedOptions.formPath)

    const flowform = h(renderComponent, omitBy(mergedOptions, (k: string) => k in defaultOptions))
    overlay = h(
      mergedOptions.type === 'dialog' ? ElDialog : ElDrawer,
      {
        class: 'flow-form-overlay',
        modelValue: true,
        onClose: close,
        ...mergedOptions.overlay,
      },
      flowform,
    )
    overlay.appContext = appContext!
    render(overlay, container)
    document.body.appendChild(container)
  }
  const close = () => {
    if (overlay?.component?.props?.modelValue)
      overlay.component.props.modelValue = false
    container && document.body.removeChild(container)
    container = null
  }

  return { open, close }
}

function resolveFlowFormComponent(customForm: Record<string, any>, path?: string): Component {
  if (path) {
    const component = customForm?.[path] ?? FlowForm
    if (typeof component === 'function')
      return defineAsyncComponent(component)
    else
      return component
  }
  else {
    return FlowForm
  }
}
