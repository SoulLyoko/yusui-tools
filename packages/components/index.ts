import type { App } from 'vue'

import IconSelect from './icon-select/index.vue'
import InputTree from './input-tree/index.vue'
import VText from './v-text/index.vue'

export { IconSelect, VText }

export default {
  install(app: App) {
    app.component('IconSelect', IconSelect)
    app.component('InputTree', InputTree)
    app.component('VText', VText)
  },
}
