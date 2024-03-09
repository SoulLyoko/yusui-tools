import type { PluginOption } from 'vite'
import type { AnyFn } from '@vueuse/core'

import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueLayouts from 'vite-plugin-vue-layouts'
import VueComponents from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
import { viteMockServe } from 'vite-plugin-mock'
import { checker } from 'vite-plugin-checker'
import compression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'
import { avuePatch, createEnvDts, indexHtml, loadProxy, normalizeRoutes } from '@yusui/plugins'

import { mergeConfig } from './utils'

type ConfigType<T extends AnyFn> = Parameters<T>[0] | false

export interface MixPluginsConfig {
  vue?: ConfigType<typeof Vue>
  vueJsx?: ConfigType<typeof VueJsx>
  vueDevTools?: ConfigType<typeof VueDevTools>
  vueRouter?: ConfigType<typeof VueRouter>
  vueLayouts?: ConfigType<typeof VueLayouts>
  vueComponents?: ConfigType<typeof VueComponents>
  autoImport?: ConfigType<typeof AutoImport>
  unocss?: ConfigType<typeof UnoCSS>
  mock?: ConfigType<typeof viteMockServe>
  checker?: ConfigType<typeof checker>
  compression?: ConfigType<typeof compression>
  visualizer?: ConfigType<typeof visualizer>
  indexHtml?: boolean
  avuePatch?: boolean
  envDts?: ConfigType<typeof createEnvDts>
  loadProxy?: ConfigType<typeof loadProxy>
}

const defaultConfig: MixPluginsConfig = {
  vue: {},
  vueJsx: {},
  vueDevTools: {},
  vueRouter: {
    dts: 'src/types/typed-router.d.ts',
    extendRoute: normalizeRoutes,
  },
  vueLayouts: {},
  vueComponents: { dts: 'src/types/components.d.ts' },
  autoImport: {
    resolvers: [ElementPlusResolver({ importStyle: false })],
    imports: ['vue', '@vueuse/core', VueRouterAutoImports],
    dirs: ['src/composables', 'src/stores', 'src/utils'],
    dts: 'src/types/auto-imports.d.ts',
    vueTemplate: true,
  },
  unocss: {},
  mock: {},
  checker: { vueTsc: true },
  compression: {},
  visualizer: {},
  indexHtml: true,
  avuePatch: true,
  envDts: { dts: 'src/types/vite-env.d.ts' },
  loadProxy: {},
}

export function mixPlugins(userConfig?: MixPluginsConfig) {
  const config = mergeConfig(defaultConfig, userConfig)

  const plugins: PluginOption[] = []

  config.indexHtml && plugins.push(indexHtml())
  config.vue && plugins.push(Vue(config.vue))
  config.vueJsx && plugins.push(VueJsx(config.vueJsx))
  // https://github.com/vuejs/devtools-next
  config.vueDevTools && plugins.push(VueDevTools(config.vueDevTools))
  // https://github.com/posva/unplugin-vue-router
  config.vueRouter && plugins.push(VueRouter(config.vueRouter))
  // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
  config.vueLayouts && plugins.push(VueLayouts(config.vueLayouts))
  // https://github.com/antfu/vite-plugin-components
  config.vueComponents && plugins.push(VueComponents(config.vueComponents))
  // https://github.com/antfu/unplugin-auto-import
  config.autoImport && plugins.push(AutoImport(config.autoImport))
  // https://github.com/antfu/unocss
  config.unocss && plugins.push(UnoCSS(config.unocss))
  // https://github.com/vbenjs/vite-plugin-mock
  config.mock && plugins.push(viteMockServe(config.mock))
  // https://github.com/fi3ework/vite-plugin-checker
  config.checker && plugins.push(checker(config.checker))
  // https://github.com/alloc/vite-plugin-compress
  config.compression && plugins.push(compression(config.compression))
  // https://github.com/btd/rollup-plugin-visualizer
  config.visualizer && plugins.push(visualizer(config.visualizer))
  // @yusui/plugins
  config.avuePatch && plugins.push(avuePatch())
  config.envDts && plugins.push(createEnvDts(config.envDts))
  config.loadProxy && plugins.push(loadProxy(config.loadProxy))

  return plugins
}
