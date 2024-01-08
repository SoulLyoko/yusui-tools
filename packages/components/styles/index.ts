import type { Ref } from 'vue'
import type { MaybeRefOrGetter } from '@vueuse/core'

import { watch } from 'vue'
import { useLocalStorage } from '@vueuse/core'

export interface UseComponentThemeOptions {
  initialValue?: MaybeRefOrGetter<string>
}

export function useComponentTheme(options?: UseComponentThemeOptions): Ref<string | undefined> {
  const theme = useLocalStorage('component-theme-scheme', options?.initialValue)

  watch(theme, onChange, { immediate: true })

  function onChange(val?: string) {
    document.documentElement.classList.forEach((item) => {
      if (item.startsWith('component-theme-'))
        document.documentElement.classList.remove(item)
    })
    if (!val)
      return
    document.documentElement.classList.add(`component-theme-${val}`)
  }

  return theme
}
