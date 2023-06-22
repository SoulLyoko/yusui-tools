import type { IconSelectProps } from '../types'

import { computed } from 'vue'

export function useIframeSrc(props: IconSelectProps) {
  const iframeSrcMap = {
    iconify: 'https://icon-sets.iconify.design/',
    icones: 'https://icones.js.org/',
  }

  const iframeSrc = computed(() => iframeSrcMap[props.source!])

  return { iframeSrc }
}
