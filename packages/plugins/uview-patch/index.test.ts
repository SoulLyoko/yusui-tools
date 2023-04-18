import fs from 'fs-extra'

import { fixBackTop } from '.'

describe('uviewPatch', () => {
  it('should transform code', () => {
    const code = fs.readFileSync('node_modules/uview-plus/components/u-back-top/u-back-top.vue', 'utf-8')
    expect(fixBackTop(code, 'u-back-top')).toContain('mixins: [mpMixin, mixin')
  })
})
