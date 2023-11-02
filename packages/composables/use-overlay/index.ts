import type { ConcreteComponent, VNode } from 'vue'
import type { UseOverlayOptions, UseOverlayType } from './types'

import { getCurrentInstance, h, render, resolveComponent } from 'vue'
import { pick } from 'lodash-es'
import { sleep } from '@yusui/utils'

/** 命令式使用弹窗 */
export function useOverlay<T extends UseOverlayType>(initOptions?: UseOverlayOptions<T>) {
  const { appContext: _appContext } = getCurrentInstance() ?? {}

  const overlayComponentMap = {
    dialog: resolveComponent('ElDialog') as ConcreteComponent,
    drawer: resolveComponent('ElDrawer') as ConcreteComponent,
    overlay: resolveComponent('ElOverlay') as ConcreteComponent,
  }

  let vnode: VNode | null
  let overlay: Element | null
  async function open(options?: UseOverlayOptions<T>) {
    options = { ...initOptions, ...options }
    const { type = 'dialog', appContext = _appContext, onClose } = options
    let ElOverlay: any
    if (type === 'overlay') {
      try {
        ElOverlay = (await import('element-plus')).ElOverlay
      }
      catch {}
    }
    vnode = h(
      ElOverlay ?? overlayComponentMap[type],
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
