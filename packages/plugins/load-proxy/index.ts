import type { ProxyOptions } from "vite";

/**
 * @param list [[prefix,target,rewrite?]]
 */
export function loadProxy(list: string) {
  try {
    return Object.fromEntries(
      JSON.parse(list).map(([prefix, target, rewrite]: [string, string, boolean]) => {
        return [
          prefix,
          {
            target,
            changeOrigin: true,
            ws: true,
            secure: /^https:\/\//.test(target),
            rewrite: path => path.replace(new RegExp(`^${rewrite ? prefix : ""}`), "")
          } as ProxyOptions
        ];
      })
    );
  } catch (err) {
    return {};
  }
}
