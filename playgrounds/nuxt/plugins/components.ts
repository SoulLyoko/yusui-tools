import ElementPlus, { ElOverlay } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import Avue from '@smallwei/avue'
import YSComponents from '@yusui/components'

import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@smallwei/avue/lib/index.css'
import '@yusui/components/dist/index.css'

export default defineNuxtPlugin((nuxt) => {
  nuxt.vueApp.use(ElementPlus, { locale: zhCn })
  nuxt.vueApp.component('ElOverlay', ElOverlay)
  nuxt.vueApp.use(Avue)

  nuxt.vueApp.use(YSComponents)
})
