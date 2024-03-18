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
  name: '@yusui/nuxt/plugins/components',
  setup(nuxt) {
    disableCache('local')
    enableCache('session')
    nuxt.vueApp.component('Icon', Icon)

    Chart.props.autoresize = { type: [Boolean, Object], default: true }
    nuxt.vueApp.component('Chart', Chart)

    nuxt.vueApp.use(ElementPlus, { locale: zhCn })
    nuxt.vueApp.component('ElOverlay', ElOverlay)
    nuxt.vueApp.use(Avue)

    IconSelect.props.collections.default = 'icon-park,icon-park-'
    nuxt.vueApp.use(YsComponents)
  },
})
