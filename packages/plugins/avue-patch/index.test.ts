import fs from 'fs-extra'

import { fixFormRow, fixMenuBtnSlot, fixMenuBtnType } from '.'

describe('avuePatch', () => {
  const avue_min_js = fs.readFileSync('node_modules/@smallwei/avue/lib/avue.min.js', 'utf-8')

  it('fixMenuBtnType ', () => {
    expect(fixMenuBtnType(avue_min_js)).toMatch('menuText("danger")')
  })

  it('fixFormRow ', () => {
    expect(fixFormRow(avue_min_js)).toMatch('tableData:{row:e.form}')
  })

  it('fixMenuBtnSlot ', () => {
    expect(fixMenuBtnSlot(avue_min_js)).toMatch('e.$slots,"menu-btn"')
  })
})
