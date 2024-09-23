import type { App } from 'vue'

import { Icon } from '@iconify/vue'
import Avue from '@smallwei/avue'
import { config } from '@vue/test-utils'
import ElementPlus, { ElOverlay } from 'element-plus'

const GlobalComponents = {
  install(app: App) {
    app.component('Icon', Icon)
    app.use(ElementPlus)
    app.component('ElOverlay', ElOverlay)
    app.use(Avue)
  },
}

config.global.plugins = [GlobalComponents]
