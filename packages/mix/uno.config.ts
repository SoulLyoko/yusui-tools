import type { UserConfig } from 'unocss'

import { presetAttributify, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'

export default {
  content: {
    pipeline: {
      include: [
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/, // the default
        '**/src/**/*.{ts}', // include ts files
      ],
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  shortcuts: [
    ['flex-center', 'flex justify-center items-center'],
    ['full', 'w-full h-full'],
    [/^(.*)-i$/, ([, prefix]) => `${prefix}!`], // w-full-i -> { width: 100% !important }
    [/^(.*)-(\d+)p$/, ([, prefix, d]) => `${prefix}-${d}%`], // w-50p -> { width: 50% }
    [/^(.*)-var-(.*)$/, ([, prefix, v]) => `${prefix}-$${v}`], // bg-var-el-color-primary -> { background-color: var(--el-color-primary) }
    [
      /^(.*)-(rgb|rgba)-(\d+)-(\d+)-(\d+)-?(\d+)?$/,
      ([, prefix, , r, g, b, a]) => `${prefix}-[rgba(${r},${g},${b},${a !== undefined ? (Number(a) / 100) : 1})]`,
    ], // bg-rgba-255-255-255-90 -> { background-color: rgba(255,255,255,0.9) }
    [
      /^(b|border)-?([a-z])?-(\d+)-([a-z]+)-(.*)$/,
      ([, , p, w, s, c]) => `b${p ? `-${p}` : ''}-${w} b-${s} b-${c}`,
    ], // b-1-solid-red -> { border: 1px solid red }
  ],
} as UserConfig
