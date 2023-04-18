import type { App } from 'vue'

import { config } from '@vue/test-utils'
import ElementPlus from 'element-plus'
import { Icon as VIcon } from '@iconify/vue'

const GlobalComponents = {
  install(app: App) {
    app.use(ElementPlus)
    app.component('VIcon', VIcon)
  },
}

config.global.plugins = [GlobalComponents]
