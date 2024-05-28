import type { App } from 'vue'

import { ContextMenu, IconSelect, ProCrud, ProDict, ProHtml, ProMenu, ProText, ProTree } from '.'

export * from './context-menu'
export * from './icon-select'
export * from './pro-crud'
export * from './pro-dict'
export * from './pro-html'
export * from './pro-menu'
export * from './pro-text'
export * from './pro-tree'

export default {
  install(app: App) {
    app.component('ContextMenu', ContextMenu)
    app.component('IconSelect', IconSelect)
    app.component('ProCrud', ProCrud as any)
    app.component('ProDict', ProDict)
    app.component('ProHtml', ProHtml)
    app.component('ProMenu', ProMenu)
    app.component('ProText', ProText)
    app.component('ProTree', ProTree)
  },
}
