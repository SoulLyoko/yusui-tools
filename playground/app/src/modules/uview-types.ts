import path from 'node:path'

import fs from 'fs-extra'
import { resolvePathSync } from 'mlly'
import { defineVixtModule } from 'vixt/core'

export default defineVixtModule({
  meta: {
    name: 'vixt:uview-types',
  },
  setup(_, vixt) {
    const { buildTypesDir, rootDir } = vixt.options
    const uviewPlusCompsFile = fs.readFileSync(resolvePathSync('uview-plus/types/comps.d.ts'), 'utf-8')
    fs.outputFileSync(path.resolve(rootDir!, buildTypesDir!, 'uview.d.ts'), uviewPlusCompsFile.replace(/up-/g, 'u-').replace(/\.\/comps/g, 'uview-plus/types/comps'))
    return []
  },
})
