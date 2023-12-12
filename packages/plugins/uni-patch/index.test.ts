import fs from 'fs-extra'

import { vueusePolyfill } from '.'

describe('uniPatch', () => {
  it('should transform vue.runtime.esm.js', () => {
    const code = fs.readFileSync('node_modules/@dcloudio/uni-mp-vue/dist/vue.runtime.esm.js', 'utf-8')
    const transformedCode = vueusePolyfill(code, '@dcloudio/uni-mp-vue/dist/vue.runtime.esm.js')
    expect(transformedCode).toContain('export const render = () => {}')
    expect(transformedCode).toContain('export const TransitionGroup = {}')
  })
})
