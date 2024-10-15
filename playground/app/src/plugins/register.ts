/// <reference types="@yusui/types/avue" />
import type { UvueConfig } from '@yusui/uvue'

import uvue from '@yusui/uvue'
import { defineVixtPlugin } from 'vixt'
// @ts-ignore
import uview, { setConfig } from 'uview-plus'

// 注册全局组件
export default defineVixtPlugin({
  name: 'vixt:register',
  setup({ app, appConfig }) {
    app.use(uview)
    appConfig.uview && setConfig(appConfig.uview)

    app.use(uvue, appConfig.uvue)
  },
})

declare module 'vixt' {
  interface VixtAppConfig {
    uview?: { config: object, prop: object, color: object, zIndex: object }
    uvue?: UvueConfig
  }
}
