import type { Plugin, ProxyOptions } from "vite";

/**
 * @param list [[prefix,target,rewrite?]]
 */
export function transformProxy(list: string) {
  try {
    return Object.fromEntries<ProxyOptions>(
      JSON.parse(list).map(([prefix, target, rewrite]: [string, string, boolean]) => {
        return [
          prefix,
          {
            target,
            changeOrigin: true,
            ws: true,
            secure: /^https:\/\//.test(target),
            rewrite: (path: string) => path.replace(new RegExp(`^${rewrite ? prefix : ""}`), "")
          }
        ];
      })
    );
  } catch (err) {
    return {};
  }
}

export interface LoadProxyOptions {
  /**
   * @default 'VITE_PROXY'
   */
  key: string;
}

export function loadProxy(options?: LoadProxyOptions): Plugin {
  const { key = "VITE_PROXY" } = options || {};
  return {
    name: "vite-plugin-load-proxy",
    enforce: "pre",
    configResolved(config) {
      const { env } = config;
      const proxy = env[key];
      config.server.proxy = {
        ...(proxy ? transformProxy(proxy) : {}),
        ...(config.server.proxy || {})
      };
      config.preview.proxy = {
        ...(proxy ? transformProxy(proxy) : {}),
        ...(config.preview.proxy || {})
      };
    }
  };
}
