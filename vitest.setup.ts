import type { App } from 'vue'

import { config } from '@vue/test-utils'
import { Icon } from '@iconify/vue'
import ElementPlus, { ElOverlay } from 'element-plus'
import Avue from '@smallwei/avue'

const GlobalComponents = {
  install(app: App) {
    app.component('Icon', Icon)
    app.use(ElementPlus)
    app.component('ElOverlay', ElOverlay)
    app.use(Avue)
  },
}

config.global.plugins = [GlobalComponents]
