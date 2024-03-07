import type { UserConfig } from 'unocss'

import { presetAttributify, presetUno } from 'unocss'

export default {
  shortcuts: [
    ['flex-center', 'flex justify-center items-center'],
    ['full', 'w-full h-full'],
    [/^(.*)-i$/, ([,prefix]) => `${prefix}!`], // w-full-i -> { width: 100% !important }
    [/^(.*)-(\d+)p$/, ([,prefix, d]) => `${prefix}-${d}%`], // w-50p -> { width: 50% }
    [/^(.*)-var-(.*)$/, ([,prefix, v]) => `${prefix}-$${v}`], // bg-var-el-color-primary -> { background-color: var(--el-color-primary) }
  ],
  presets: [
    presetUno(),
    presetAttributify(),
  ],
} as UserConfig
