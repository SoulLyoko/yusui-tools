import type { Ref } from 'vue'
import type { IconSelectProps } from '../types'

import { computed, ref } from 'vue'

export function useDisplayIcons(props: IconSelectProps, icons: Ref<string[]>) {
  const searchValue = ref('')
  const displayCount = ref(0)
  const displaySize = computed(() => (props.width! / 70) * (props.height! / 40))
  const displayIcons = computed(() => {
    return icons.value.filter(e => e.includes(searchValue.value)).filter((e, i) => i < displayCount.value)
  })

  function loadDisplayIcons() {
    if (displayCount.value > icons.value.length)
      return
    displayCount.value += displaySize.value
  }

  function resetDisplayIcons() {
    displayCount.value = displaySize.value
  }

  return {
    searchValue,
    displayIcons,
    resetDisplayIcons,
    loadDisplayIcons,
  }
}
