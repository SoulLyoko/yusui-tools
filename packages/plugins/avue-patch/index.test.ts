import fs from 'fs-extra'

import { fixFormRow, fixMenuBtnType } from '.'

describe('avuePatch', () => {
  const avue_min_js = fs.readFileSync('node_modules/@smallwei/avue/lib/avue.min.js', 'utf-8')

  it('fixMenuBtnType ', () => {
    expect(fixMenuBtnType(avue_min_js)).toMatch('menuText("danger")')
  })

  it('fixFormRow ', () => {
    expect(fixFormRow(avue_min_js)).toMatch('tableData:{row:e.form}')
  })
})
