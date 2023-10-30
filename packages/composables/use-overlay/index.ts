import type { VNode } from 'vue'
import type { UseOverlayOptions, UseOverlayType } from './types'

import { getCurrentInstance, h, ref, render, resolveComponent } from 'vue'

/** 命令式使用弹窗 */
export function useOverlay<T extends UseOverlayType>(initialOptions?: UseOverlayOptions<T>) {
  const { appContext: _appContext } = getCurrentInstance() ?? {}

  const modalComponentMap = {
    dialog: resolveComponent('ElDialog'),
    drawer: resolveComponent('ElDrawer'),
  }

  const visible = ref(false)
  let vnode: VNode | null
  let overlay: Element | null
  function open(options?: UseOverlayOptions<T>) {
    visible.value = true
    options = { ...initialOptions, ...options }
    const { type = 'dialog', header, content, footer, appContext = _appContext } = options
    /** 没有插槽则视为组件式调用 */
    if (!(header || content || footer))
      return
    vnode = h(
      modalComponentMap[type] as any,
      {
        ...options,
        modelValue: true,
        onClose() {
          close()
          options?.onClose?.()
        },
      },
      {
        header: options.header,
        default: options.content,
        footer: options.footer,
      },
    )
    appContext && (vnode.appContext = appContext)
    const container = document.createElement('div')
    render(vnode, container)
    overlay = container.firstElementChild
    overlay && document.body.appendChild(overlay)
  }
  function close() {
    visible.value = false
    if (vnode?.component?.props?.modelValue)
      vnode.component.props.modelValue = false
    setTimeout(() => overlay && document.body.removeChild(overlay), 300)
  }

  return { open, close, visible }
}
