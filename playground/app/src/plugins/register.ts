/// <reference types="@yusui/types/avue" />
import type { UvueConfig } from '@yusui/uvue'

import uvue from '@yusui/uvue'
import { defineVixtPlugin } from 'vixt'
// #ifndef H5
// @ts-ignore
import uview, { setConfig } from 'uview-plus'
// #endif

// 注册全局组件
export default defineVixtPlugin({
  name: 'vixt:register',
  async setup({ app, appConfig }) {
    if (uni.getSystemInfoSync().uniPlatform === 'web') {
      // #ifdef H5
      // @ts-ignore
      const { default: uview, setConfig } = await import('uview-plus')
      app.use(uview)
      appConfig.uview && setConfig(appConfig.uview)
      // #endif
    }
    else {
      app.use(uview)
      appConfig.uview && setConfig(appConfig.uview)
    }

    app.use(uvue, appConfig.uvue)
  },
})

declare module 'vixt' {
  interface VixtAppConfig {
    uview?: { config: object, prop: object, color: object, zIndex: object }
    uvue?: UvueConfig
  }
}
