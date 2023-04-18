import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import Avue from '@smallwei/avue'
import '@smallwei/avue/lib/index.css'

import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus, { locale: zhCn })
app.use(Avue, { appendToBody: true })
app.mount('#app')
