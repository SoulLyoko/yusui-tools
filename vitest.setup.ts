import type { App } from 'vue'

import { config } from '@vue/test-utils'
import ElementPlus, { ElOverlay } from 'element-plus'
import { Icon as VIcon } from '@iconify/vue'
import Avue from '@smallwei/avue'

const GlobalComponents = {
  install(app: App) {
    app.use(ElementPlus)
    app.component('ElOverlay', ElOverlay)
    app.component('VIcon', VIcon)
    app.use(Avue)
  },
}

config.global.plugins = [GlobalComponents]
