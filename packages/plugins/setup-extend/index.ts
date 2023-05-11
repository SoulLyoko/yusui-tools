import type { Plugin } from 'vite'

import { compileScript, parse } from '@vue/compiler-sfc'
import MagicString from 'magic-string'

export function transformSetupExtend(code: string, id: string) {
  const { descriptor } = parse(code)
  if (descriptor.script || !descriptor.scriptSetup)
    return null

  let s: MagicString | undefined
  const FILENAME_RE = /.*\/(\S*)/
  const str = () => s || (s = new MagicString(code))
  const { attrs: { name, lang, inheritAttrs } } = compileScript(descriptor, { id })
  if (name || inheritAttrs) {
    str().appendLeft(
      0,
        `<script ${lang ? `lang="${lang}"` : ''}>
import { defineComponent } from 'vue'
export default defineComponent({
  ${name ? `name: '${name}',` : ''}
  ${inheritAttrs ? `inheritAttrs: ${inheritAttrs !== 'false'},` : ''}
})
</script>\n`,
    )
  }

  const map = str().generateMap({ hires: true })
  const filename = FILENAME_RE.exec(id)![1]

  map.file = filename
  map.sources = [filename]

  return {
    map,
    code: str().toString(),
  }
}

export function setupExtend(): Plugin {
  return {
    name: 'vite-plugin-setup-extend',
    enforce: 'pre',
    async transform(code, id) {
      if (!/\.vue$/.test(id))
        return null
      return transformSetupExtend(code, id)
    },
  }
}
