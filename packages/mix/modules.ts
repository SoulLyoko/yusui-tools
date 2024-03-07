import type { App } from 'vue'
import type { ConfigProviderProps } from 'element-plus'
import type { AvueConfig } from '@smallwei/avue'

import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'
import { Icon, disableCache, enableCache } from '@iconify/vue'
import Chart from 'vue-echarts'
import ElementPlus, { ElOverlay } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import Avue from '@smallwei/avue'
import YsComponents from '@yusui/components'

import { mergeConfig } from './utils'

import 'echarts'
import 'nprogress/nprogress.css'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@smallwei/avue/lib/index.css'
import '@yusui/components/dist/index.css'

export { setupRouterComponents } from '@yusui/plugins'

export interface MixModulesConfig {
  router?: Partial<Parameters<typeof createRouter>[0]>
  elementPlus?: Partial<ConfigProviderProps>
  avue?: AvueConfig
}

const defaultConfig: MixModulesConfig = {
  router: { history: createWebHistory(import.meta.env.BASE_URL) },
  elementPlus: { locale: zhCn },
  avue: {},
}

export function mixModules(userConfig?: MixModulesConfig) {
  const config = mergeConfig(defaultConfig, userConfig)

  const router = createRouter(config.router as any)

  const pinia = createPinia()
  pinia.use(createPersistedState())

  return {
    router,
    pinia,
    install(app: App) {
      app.use(router)

      app.use(pinia)

      disableCache('local')
      enableCache('session')
      app.component('Icon', Icon)

      Chart.props.autoresize = { type: [Boolean, Object], default: true }
      app.component('Chart', Chart)

      app.use(ElementPlus, config.elementPlus)
      app.component('ElOverlay', ElOverlay)
      app.use(Avue, config.avue)

      app.use(YsComponents)
    },
  }
}
