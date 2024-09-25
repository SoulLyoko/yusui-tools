import type { App } from 'vue'

import { Icon } from '@iconify/vue'
import '@smallwei/avue/lib/index.css'
// import { FlowDesign } from '@yusui/flow-design'
// import { FormDesign } from '@yusui/form-design'
import axios from 'axios'
import ElementPlus, { ElOverlay } from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/theme-chalk/dark/css-vars.css'
import DefaultTheme from 'vitepress/theme'

import YSComponents from '../../components/index'
// import '../../components/index.scss'
import '../../flow-design/styles/index.scss'
import '../../form-design/styles/index.scss'
import '../../theme/index.scss'
import components from '../components'
import './index.scss'
import Layout from './Layout.vue'

export default {
  extends: DefaultTheme,
  Layout,
  async enhanceApp({ app }: { app: App }) {
    app.use(components)
    app.use(ElementPlus, { locale: zhCn })
    app.component('ElOverlay', ElOverlay)
    app.use(YSComponents)
    app.component('Icon', Icon)
    if (!import.meta.env.SSR) {
      import('@guolao/vue-monaco-editor').then(({ loader }) => {
        loader.config({
          paths: {
            vs: 'https://cdn.bootcdn.net/ajax/libs/monaco-editor/0.40.0/min/vs',
          },
        })
      })
      const { default: Avue } = await import('@smallwei/avue')
      app.use(Avue, { axios })
      const { FlowDesign } = await import('@yusui/flow-design')
      const { FormDesign } = await import('@yusui/form-design')
      app.component('FlowDesign', FlowDesign)
      app.component('FormDesign', FormDesign)
    }
  },
}
