import type { Plugin, ProxyOptions } from 'vite'

/**
 * @param list [prefix,target,rewrite?][]
 */
export function transformProxy(list: string) {
  try {
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
  catch (err) {
    return {}
  }
}

export interface LoadProxyOptions {
  /**
   * @default 'VITE_PROXY'
   */
  key: string
}

/**
 * 为 vite 开发服务添加代理配置
 * @param options { key: 'VITE_PROXY' }
 */
export function loadProxy(options?: LoadProxyOptions): Plugin {
  const { key = 'VITE_PROXY' } = options || {}
  return {
    name: 'vite-plugin-load-proxy',
    enforce: 'pre',
    configResolved(config) {
      const { env } = config
      const proxy = env[key]
      config.server.proxy = {
        ...(proxy ? transformProxy(proxy) : {}),
        ...(config.server.proxy || {}),
      }
      config.preview.proxy = {
        ...(proxy ? transformProxy(proxy) : {}),
        ...(config.preview.proxy || {}),
      }
    },
  }
}
