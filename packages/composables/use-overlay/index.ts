import type { UseOverlayOptions, UseOverlayType } from './types'
import type { ConcreteComponent, VNode } from 'vue'

import { sleep } from '@yusui/utils'
import { pick } from 'lodash-es'
import { getCurrentInstance, h, render, resolveComponent } from 'vue'

/** 命令式使用弹窗 */
export function useOverlay<T extends UseOverlayType>(options?: UseOverlayOptions<T>) {
  const { appContext: _appContext } = getCurrentInstance() ?? {}

  const overlayComponentMap = {
    dialog: resolveComponent('ElDialog') as ConcreteComponent,
    drawer: resolveComponent('ElDrawer') as ConcreteComponent,
    overlay: resolveComponent('ElOverlay') as ConcreteComponent,
  }

  let vnode: VNode | null
  let overlay: Element | null
  async function open(localOptions?: UseOverlayOptions<T>) {
    const mergedOptions = { ...options, ...localOptions }
    const { type = 'dialog', appContext = _appContext, onClose } = mergedOptions
    vnode = h(
      overlayComponentMap[type],
      {
        ...options,
        modelValue: true,
        onClose() {
          close()
          onClose?.()
        },
      },
      pick(options, 'header', 'default', 'footer'),
    )
    appContext && (vnode.appContext = appContext)
    const container = document.createElement('div')
    render(vnode, container)
    overlay = container.firstElementChild
    overlay && document.body.appendChild(overlay)
  }
  async function close(delay = 300) {
    if (vnode?.component?.props?.modelValue)
      vnode.component.props.modelValue = false
    await sleep(delay)
    overlay && document.body.removeChild(overlay)
  }

  return { open, close }
}
