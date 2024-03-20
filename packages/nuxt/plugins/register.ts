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
import '@yusui/components/dist/index.css'

export default defineNuxtPlugin({
  name: '@yusui/nuxt/plugins/register',
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

      app.use(Avue, { ...avueConfig })

      IconSelect.props.collections.default = 'icon-park-,icon-park'
      app.use(YsComponents)
    },
  },
})

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

declare module 'vue' {
  interface GlobalComponents {
    Icon: typeof import('@iconify/vue')['Icon']
    Chart: typeof import('vue-echarts')['default']
    ElOverlay: typeof import('element-plus')['ElOverlay']
  }

  interface ComponentCustomProperties {
    $message: typeof import('element-plus')['ElMessage']
    $notify: typeof import('element-plus')['ElNotification']
    $msgbox: typeof import('element-plus')['ElMessageBox']
    $messageBox: typeof import('element-plus')['ElMessageBox']
    $alert: typeof import('element-plus')['ElMessageBox']['alert']
    $confirm: typeof import('element-plus')['ElMessageBox']['confirm']
    $prompt: typeof import('element-plus')['ElMessageBox']['prompt']
    $loading: typeof import('element-plus')['ElLoadingService']
  }
}
