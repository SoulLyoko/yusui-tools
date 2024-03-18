import type { AvueConfig } from '@smallwei/avue'
import type { ConfigProviderProps } from 'element-plus'

import ElementPlus, { ElOverlay } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import Avue from '@smallwei/avue'
import { Icon, disableCache, enableCache } from '@iconify/vue'
import Chart from 'vue-echarts'
import YsComponents, { IconSelect } from '@yusui/components'

import 'echarts'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@smallwei/avue/lib/index.css'

// import '@yusui/components/dist/index.css'

declare module 'nuxt/schema' {
  interface CustomAppConfig {
    avue?: AvueConfig
    elementPlus?: Partial<ConfigProviderProps>
  }
}
declare module '@nuxt/schema' {
  interface CustomAppConfig {
    avue?: AvueConfig
    elementPlus?: Partial<ConfigProviderProps>
  }
}

export default defineNuxtPlugin({
  name: '@yusui/nuxt/plugins/components',
  hooks: {
    'app:created': (app) => {
      disableCache('local')
      enableCache('session')
      app.component('Icon', Icon)

      Chart.props.autoresize = { type: [Boolean, Object], default: true }
      app.component('Chart', Chart)

      const { elementPlus: elementPlusConfig, avue: avueConfig } = app.$nuxt._appConfig

      app.use(ElementPlus, { locale: zhCn, ...elementPlusConfig })
      app.component('ElOverlay', ElOverlay)

      app.use(Avue, avueConfig)

      IconSelect.props.collections.default = 'icon-park,icon-park-'
      app.use(YsComponents)
    },
  },
})
