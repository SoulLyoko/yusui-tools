<script setup lang="ts">
import type { PropType } from 'vue'

import { computed, useAttrs } from 'vue'

const props = defineProps({
  dic: { type: Array as PropType<{ label?: string, value?: string, color?: string }[]>, default: () => [] },
})
const emit = defineEmits(['update:modelValue', 'change'])

const attrs = useAttrs()
const switchProps = computed(() => {
  const [inactiveItem, activeItem] = props.dic ?? []
  return {
    ...attrs,
    inactiveValue: inactiveItem?.value,
    inactiveColor: inactiveItem?.color,
    activeValue: activeItem?.value,
    activeColor: activeItem?.color,
  }
})
</script>

<template>
  <u-switch
    v-bind="switchProps" @update:model-value="emit('update:modelValue', $event)"
    @change="emit('change', $event)"
  />
</template>
