import type { App } from 'vue'

import { loader } from '@guolao/vue-monaco-editor'
import { Icon } from '@iconify/vue'
import Avue from '@smallwei/avue'
import '@smallwei/avue/lib/index.css'
import { FlowDesign } from '@yusui/flow-design'
import { FormDesign } from '@yusui/form-design'
import axios from 'axios'
import ElementPlus, { ElOverlay } from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/theme-chalk/dark/css-vars.css'
import DefaultTheme from 'vitepress/theme'

import YSComponents from '../../components/index'
import '../../theme/index.scss'
import components from '../components'
import './index.scss'
import Layout from './Layout.vue'

export default {
  extends: DefaultTheme,
  Layout,
  async enhanceApp({ app }: { app: App }) {
    loader.config({
      paths: {
        vs: 'https://cdn.bootcdn.net/ajax/libs/monaco-editor/0.47.0/min/vs',
      },
    })
    app.use(components)
    app.use(ElementPlus, { locale: zhCn })
    app.component('ElOverlay', ElOverlay)
    app.use(Avue, { axios })
    app.use(YSComponents)
    app.component('Icon', Icon)
    app.component('FlowDesign', FlowDesign)
    app.component('FormDesign', FormDesign)
  },
}
