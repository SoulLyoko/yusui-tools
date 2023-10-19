import fs from 'fs-extra'

import { fixFormRow, fixMenuBtnSlot, fixMenuBtnType } from '.'

describe('avuePatch', () => {
  const avue_min_js = fs.readFileSync('node_modules/@smallwei/avue/lib/avue.min.js', 'utf-8')
  it('fixMenuBtnType', () => {
    expect(fixMenuBtnType(avue_min_js)).toMatch(
      'type:e.menuText("danger"),class:Object(a.normalizeClass)(e.b("delBtn"))',
    )
  })
  it('fixFormRow', () => {
    expect(fixFormRow(avue_min_js)).toMatch('modelValue:e.form[t.prop],tableData:{row:e.form}')
  })
  it('fixMenuBtnSlot', () => {
    expect(fixMenuBtnSlot(avue_min_js)).toMatch('e.$slots,"menu-btn"')
  })
})
