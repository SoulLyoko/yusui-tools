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
import '../../components/styles/index.scss'
import '../../flow-design/styles/index.scss'
import '../../form-design/styles/index.scss'
import { dicRequest, request } from './request'

export default {
  ...defaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.use(components)
    app.use(ElementPlus, { locale: zhCn })
    app.use(YSComponents)
    app.component('VIcon', Icon)
    app.component('Icon', Icon)
    app.mixin({
      async beforeCreate() {
        await import('@smallwei/avue').then(module => app.use(module.default, { axios: dicRequest }))
        await import('@yusui/flow-design').then(module => app.component('FlowViewer', module.FlowViewer))
        await import('@yusui/flow-design').then(module => app.component('FlowModeler', module.FlowModeler))
        await import('@yusui/form-design').then(module => app.component('FormDesign', module.FormDesign))
        await import('@yusui/flow-pages').then(module => app.use(module.default, {
          request,
          upload: {
            action: import.meta.env.VITE_UPLOAD_URL,
            headers: { Authorization: import.meta.env.VITE_TOKEN },
            download: row => window.open(row.fileUrl),
            preview: row => window.open(row.fileUrl),
          },
        }))
      },
    })
  },
} as Theme
