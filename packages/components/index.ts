import type { App } from 'vue'

import ContextMenu from './context-menu/index.vue'
import EpMenu from './ep-menu/index.vue'
import EpTree from './ep-tree/index.vue'
import IconSelect from './icon-select/index.vue'
import VDict from './v-dict/index.vue'
import VText from './v-text/index.vue'
import CrudPlus from './crud-plus/index.vue'

export { EpMenu, EpTree, IconSelect, VDict, VText }

export default {
  install(app: App) {
    app.component('ContextMenu', ContextMenu)
    app.component('EpMenu', EpMenu)
    app.component('EpTree', EpTree)
    app.component('IconSelect', IconSelect)
    app.component('VDict', VDict)
    app.component('VText', VText)
    app.component('CrudPlus', CrudPlus as any)
  },
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    ContextMenu: typeof ContextMenu
    EpMenu: typeof EpMenu
    EpTree: typeof EpTree
    IconSelect: typeof IconSelect
    VDict: typeof VDict
    VText: typeof VText
    CrudPlus: typeof CrudPlus
  }
}
