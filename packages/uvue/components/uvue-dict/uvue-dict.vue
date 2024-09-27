<script setup lang="ts">
import type { PropType } from 'vue'

import { useDict } from '@yusui/composables'
import { useAttrs } from 'vue'

defineProps({
  type: { type: String as PropType<'select' | 'cascader' | 'checkbox' | 'radio' | 'switch'>, default: 'select' },
})
const emit = defineEmits(['update:modelValue', 'change'])

const { data: dic } = useDict(useAttrs())
</script>

<template>
  <uvue-select
    v-if="type === 'select'"
    v-bind="$attrs"
    :dic="dic"
    @update:model-value="emit('update:modelValue', $event)"
    @change="emit('change', $event)"
  />
  <uvue-cascader
    v-if="type === 'cascader'"
    v-bind="$attrs"
    :dic="dic"
    @update:model-value="emit('update:modelValue', $event)"
    @change="emit('change', $event)"
  />
  <uvue-checkbox
    v-if="type === 'checkbox'"
    v-bind="$attrs"
    :dic="dic"
    @update:model-value="emit('update:modelValue', $event)"
    @change="emit('change', $event)"
  />
  <uvue-radio
    v-if="type === 'radio'"
    v-bind="$attrs"
    :dic="dic"
    @update:model-value="emit('update:modelValue', $event)"
    @change="emit('change', $event)"
  />
  <uvue-switch
    v-if="type === 'switch'"
    v-bind="$attrs"
    :dic="dic"
    @update:model-value="emit('update:modelValue', $event)"
    @change="emit('change', $event)"
  />
</template>
