import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router/auto'
import type { ConfigProviderProps } from 'element-plus'
import type { AvueConfig } from '@smallwei/avue'

import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import { Icon, disableCache, enableCache } from '@iconify/vue'
import Chart from 'vue-echarts'
import ElementPlus, { ElOverlay } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import Avue from '@smallwei/avue'
import YsComponents from '@yusui/components'

import 'echarts'

import 'uno.css'
import 'nprogress/nprogress.css'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@smallwei/avue/lib/index.css'
import '@yusui/components/dist/index.css'

export interface MixModulesConfig {
  vueRouter?: Parameters<typeof createRouter>[0]
  elementPlus?: Partial<ConfigProviderProps>
  avue?: AvueConfig
}

const defaultConfig: MixModulesConfig = {
  vueRouter: {
    history: createWebHistory(import.meta.env.BASE_URL),
    extendRoutes: (routes) => {
      routes = setupComponentsName(routes)
      routes = setupLayouts(routes)
      return routes
    },
  },
  elementPlus: { locale: zhCn },
  avue: {},
}

/** 自动注册路由组件的名称 */
function setupComponentsName(routes: RouteRecordRaw[]) {
  return routes.map((route) => {
    if (typeof route.component === 'function') {
      const asyncComponent = (route.component as () => any)()
      if (asyncComponent instanceof Promise) {
        route.component = () => asyncComponent.then((module) => {
          module.default.name = route.name
          return module
        })
      }
    }
    let children: RouteRecordRaw[] = []
    if (route.children?.length)
      children = setupComponentsName(route.children)

    return { ...route, children } as RouteRecordRaw
  })
}

export function mixModules(userConfig?: MixModulesConfig) {
  const config: MixModulesConfig = { ...defaultConfig, ...userConfig }

  const pinia = createPinia()
  pinia.use(createPersistedState())

  const router = createRouter(config.vueRouter!)

  return {
    pinia,
    router,
    install(app: App) {
      app.use(pinia)

      app.use(router)

      disableCache('local')
      enableCache('session')
      app.component('Icon', Icon)

      Chart.props.autoresize = { type: [Boolean, Object], default: true }
      app.component('Chart', Chart)

      app.use(ElementPlus, config.elementPlus)
      app.component('ElOverlay', ElOverlay)
      app.use(Avue, config.avue)

      app.use(YsComponents)
    },
  }
}
