import type { MaybeRefOrGetter, Ref } from 'vue'

import { watch } from 'vue'
import { useLocalStorage } from '@vueuse/core'

export interface UseComponentThemeOptions {
  initialValue?: MaybeRefOrGetter<Theme>
}

export type Theme = keyof typeof themes | undefined

const themes = {
  element: 'element',
  antd: 'antd',
  arco: 'arco',
}

export function useComponentTheme(options?: UseComponentThemeOptions) {
  const theme = useLocalStorage('component-theme-scheme', options?.initialValue ?? 'element') as Ref<Theme>

  watch(theme, onChange, { immediate: true })

  function onChange(val?: Theme) {
    document.documentElement.classList.forEach((item) => {
      if (item.startsWith('component-theme-'))
        document.documentElement.classList.remove(item)
    })
    if (!val || val === 'element')
      return
    document.documentElement.classList.add(`component-theme-${val}`)
  }

  return { theme, themes }
}
