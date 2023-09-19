import type { App } from 'vue'

import IconSelect from './icon-select/index.vue'
import InputTree from './input-tree/index.vue'
import VDict from './v-dict/index.vue'
import VText from './v-text/index.vue'

export { IconSelect, InputTree, VDict, VText }

export default {
  install(app: App) {
    app.component('IconSelect', IconSelect)
    app.component('InputTree', InputTree)
    app.component('VDict', VDict)
    app.component('VText', VText)
  },
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    IconSelect: typeof IconSelect
    InputTree: typeof InputTree
    VDict: typeof VDict
    VText: typeof VText
  }
}
