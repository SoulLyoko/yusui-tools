import fs from 'fs-extra'

import { fixBtnType, fixFormRow } from '.'

describe('avuePatch', () => {
  const avue_min_js = fs.readFileSync('node_modules/@smallwei/avue/lib/avue.min.js', 'utf-8')
  it('fixBtnType', () => {
    expect(fixBtnType(avue_min_js)).toMatch(
      'type:e.menuText("danger"),class:Object(a.normalizeClass)(e.b("delBtn"))',
    )
  })
  it('fixFormRow', () => {
    expect(fixFormRow(avue_min_js)).toMatch('modelValue:e.form[t.prop],tableData:{row:e.form}')
  })
})
