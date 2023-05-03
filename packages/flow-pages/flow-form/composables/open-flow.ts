import type { MaybeRef } from '@vueuse/core'
import type { Emits, Props } from '../types'

import { computed, defineAsyncComponent, getCurrentInstance, h, ref, render, unref } from 'vue'
import { isFunction, isNil, omitBy, overSome } from 'lodash-es'
import { ElDialog, ElDrawer } from 'element-plus'
import { serialize } from '@yusui/utils'

import FlowForm from '../index.vue'

export type UseFlowFormType = 'dialog' | 'drawer' | 'window'

/** { [onXxx]?: Function } */
export type UseFlowFormEvents<K extends keyof Emits = keyof Emits> = {
  [P in `on${Capitalize<K>}`]?: Function;
}

export type FlowFormProps = Partial<Props> & UseFlowFormEvents

export interface UseFlowFormOptions {
  type: UseFlowFormType
  formPath?: string
  window?: {
    url?: string
    name?: string
    features?: string
  }
  overlay?: any
  [key: string]: any
}

export type UseFlowFormReturn = ReturnType<typeof useFlowForm>

export function useFlowForm(props: MaybeRef<FlowFormProps>, options: UseFlowFormOptions) {
  switch (options.type) {
    case 'window':
      return useFlowFormWindow(props, options as UseFlowFormOptions)
    case 'dialog':
    case 'drawer':
      return useFlowFormOverlay(props, options as UseFlowFormOptions)
    default:
      return { open: () => {}, close: () => {} }
  }
}

export function useFlowFormWindow(props: MaybeRef<FlowFormProps>, options: UseFlowFormOptions) {
  const { window: { url = '', name = 'flow-form', features = 'left=0,top=0,width=1600,height=900' } = {} } = options
  const openedWindow = ref<Window | null>(null)
  const openUrl = computed(() => {
    return `${url}?${serialize(omitBy(props, overSome(isFunction, isNil)))}`
  })
  const open = () => {
    openedWindow.value = window.open(openUrl.value, name, features)
    openedWindow.value?.addEventListener('message', (e) => {
      const { event } = e.data
      const fn = unref(props)[event as keyof FlowFormProps]
      typeof fn === 'function' && fn(e.data)
    })
  }
  const close = () => openedWindow.value?.close()
  return { open, close, openedWindow }
}

export function useFlowFormOverlay(props: MaybeRef<FlowFormProps>, options: UseFlowFormOptions) {
  const { appContext } = getCurrentInstance()!

  let container: HTMLElement
  const open = () => {
    container = document.createElement('div')
    container.className = 'flow-form-wrapper'

    const renderComponent = resolveFlowFormComponent(options.formPath)

    const vnode = h(renderComponent, { ...unref(props) })
    const overlay = h(
      options.type === 'dialog' ? ElDialog : ElDrawer,
      {
        customClass: 'flow-form-overlay',
        modelValue: true,
        width: '80%',
        size: '80%',
        top: '100px',
        fullscreen: true,
        destroyOnClose: true,
        onClose: close,
        ...options.overlay,
      },
      vnode,
    )
    overlay.appContext = appContext!
    render(overlay, container)
    document.body.appendChild(container)
  }
  const close = () => {
    container && document.body.removeChild(container)
  }

  return { open, close }
}

export function resolveFlowFormComponent(formPath?: string) {
  if (formPath)
    return defineAsyncComponent(() => import(formPath))
  else
    return FlowForm
}
