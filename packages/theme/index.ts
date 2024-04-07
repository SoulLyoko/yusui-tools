import type { MaybeRefOrGetter, Ref } from 'vue'

import { watch } from 'vue'
import { useLocalStorage } from '@vueuse/core'

export interface UseThemeOptions {
  initialValue?: MaybeRefOrGetter<Theme>
}

export type Theme = keyof typeof themes | undefined

const themes = {
  'element-plus': 'element-plus',
  'ant-design': 'ant-design',
  'arco-design': 'arco-design',
}

export function useTheme(options?: UseThemeOptions) {
  const theme = useLocalStorage('theme-scheme', options?.initialValue ?? 'element-plus') as Ref<Theme>

  watch(theme, onChange, { immediate: true })

  function onChange(val?: Theme) {
    document.documentElement.classList.forEach((item) => {
      if (item.startsWith('theme-'))
        document.documentElement.classList.remove(item)
    })
    if (!val || val === 'element-plus')
      return
    document.documentElement.classList.add(`theme-${val}`)
  }

  return { theme, themes }
}
