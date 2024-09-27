import { presetUni } from '@uni-helper/unocss-preset-uni'
import { defineConfig, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  presets: [
    presetUni(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
