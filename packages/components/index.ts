import type { App } from 'vue'

import IconSelect from './icon-select/index.vue'
import VText from './v-text/index.vue'

export { IconSelect, VText }

export default {
  install(app: App) {
    app.component('IconSelect', IconSelect)
    app.component('VText', VText)
  },
}
