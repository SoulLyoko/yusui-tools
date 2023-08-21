import type { Plugin, ProxyOptions } from 'vite'

/**
 * @param list [prefix,target,rewrite?][]
 */
export function transformProxy(list: string) {
  return Object.fromEntries<ProxyOptions>(
    JSON.parse(list).map(([prefix, target, rewrite]: [string, string, boolean]) => {
      const option: ProxyOptions = {
        target,
        changeOrigin: true,
        ws: true,
        secure: /^https:\/\//.test(target),
      }
      if (rewrite)
        option.rewrite = (path: string) => path.replace(new RegExp(`^${prefix}`), '')
      return [prefix, option]
    }),
  )
}

export interface LoadProxyOptions {
  /**
   * 环境变量的 key
   * @default 'VITE_PROXY'
   */
  key?: string
  /**
   * 是否打印转换结果
   * @default false
   */
  log?: boolean
}

/**
 * 为 vite 开发服务添加代理配置
 * @param options { key: 'VITE_PROXY' }
 */
export function loadProxy(options?: LoadProxyOptions): Plugin {
  const { key = 'VITE_PROXY', log } = options || {}
  return {
    name: 'vite-plugin-load-proxy',
    enforce: 'pre',
    configResolved(config) {
      const { env } = config
      const proxy = env[key] ? transformProxy(env[key]) : {}
      log && console.log('proxy:', proxy)
      config.server.proxy = {
        ...proxy,
        ...(config.server.proxy || {}),
      }
      config.preview.proxy = {
        ...proxy,
        ...(config.preview.proxy || {}),
      }
    },
  }
}
