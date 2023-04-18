import type { App } from 'vue'

import BasicContainer from './basic-container/index.vue'
import IconSelect from './icon-select/index.vue'
import VText from './v-text/index.vue'

export { BasicContainer, IconSelect, VText }

export default {
  install(app: App) {
    app.component('BasicContainer', BasicContainer)
    app.component('IconSelect', IconSelect)
    app.component('VText', VText)
  },
}
