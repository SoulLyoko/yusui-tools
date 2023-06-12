import type { App } from 'vue'
import type { Theme } from 'vitepress'

import defaultTheme from 'vitepress/theme'
import './index.scss'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import '@smallwei/avue/lib/index.css'
import { Icon } from '@iconify/vue'

import components from '../components'
import YSComponents from '../../components/index'
import '../../flow-design/styles/index.scss'
import '../../form-design/styles/index.scss'
import { dicRequest, request } from './request'

export default {
  ...defaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.use(components)
    app.use(ElementPlus, { locale: zhCn })
    app.use(YSComponents)
    app.component('Icon', Icon)
    app.mixin({
      async beforeCreate() {
        const { default: Avue } = await import('@smallwei/avue')
        app.use(Avue, { axios: dicRequest })
        const { FlowDesign } = await import('@yusui/flow-design')
        const { FormDesign } = await import('@yusui/form-design')
        const { default: FlowPages } = await import('@yusui/flow-pages')
        app.component('FlowDesign', FlowDesign)
        app.component('FormDesign', FormDesign)
        app.use(FlowPages, {
          FlowDesign,
          FormDesign,
          request,
          upload: {
            action: import.meta.env.VITE_UPLOAD_URL,
            headers: { Authorization: import.meta.env.VITE_TOKEN },
            download: row => window.open(row.fileUrl),
            preview: row => window.open(row.fileUrl),
          },
        })
      },
    })
  },
} as Theme
