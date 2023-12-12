import type { Plugin } from 'vite'

/** 增加小程序中vueuse的运行所需 */
export function vueusePolyfill(code: string, id: string) {
  if (!id.endsWith('@dcloudio/uni-mp-vue/dist/vue.runtime.esm.js'))
    return code
  code += `
export const render = () => {}
export const TransitionGroup = {}
`
  return code
}

export function uniPatch(): Plugin {
  return {
    name: 'vite-plugin-uni-patch',
    transform(code, id) {
      code = vueusePolyfill(code, id)
      return code
    },
  }
}
