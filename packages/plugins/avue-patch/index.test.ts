import fs from 'fs-extra'

import { fixFormRow, fixMenuBtnSlot, fixMenuBtnType } from '.'

describe('avuePatch', () => {
  const avue_min_js = fs.readFileSync('node_modules/@smallwei/avue/lib/avue.min.js', 'utf-8')
  const avue_js = fs.readFileSync('node_modules/@smallwei/avue/lib/avue.js', 'utf-8')

  it('fixMenuBtnType prod', () => {
    expect(fixMenuBtnType(avue_min_js)).toMatch('menuText("danger")')
  })
  it('fixMenuBtnType dev', () => {
    expect(fixMenuBtnType(avue_js)).toMatch(`menuText('danger')`)
  })

  it('fixFormRow prod', () => {
    expect(fixFormRow(avue_min_js)).toMatch('tableData:{row:e.form}')
  })
  it('fixFormRow dev', () => {
    expect(fixFormRow(avue_js)).toMatch('tableData: { row: _ctx.form }')
  })

  it('fixMenuBtnSlot prod', () => {
    expect(fixMenuBtnSlot(avue_min_js)).toMatch('e.$slots,"menu-btn"')
  })
  it('fixMenuBtnSlot dev', () => {
    expect(fixMenuBtnSlot(avue_js)).toMatch('_ctx.$slots, \\"menu-btn\\"')
  })
})
