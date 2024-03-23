import type { App } from 'vue'

import ContextMenu from './context-menu/index.vue'
import IconSelect from './icon-select/index.vue'
import ProCrud from './pro-crud/index.vue'
import ProDict from './pro-dict/index.vue'
import ProHtml from './pro-html/index.vue'
import ProMenu from './pro-menu/index.vue'
import ProText from './pro-text/index.vue'
import ProTree from './pro-tree/index.vue'

export { ContextMenu, IconSelect, ProCrud, ProDict, ProHtml, ProMenu, ProText, ProTree }
export * from './styles'

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
