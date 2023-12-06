<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  dic: { type: Array as PropType<{ label?: string, value?: string }[]>, default: () => [] },
})
const emit = defineEmits(['update:modelValue', 'change'])
</script>

<template>
  <u-radio-group
    v-bind="$attrs"
    @update:model-value="emit('update:modelValue', $event)"
    @change="emit('change', $event)"
  >
    <u-radio v-for="item in dic" :key="item.value" v-bind="item" :label="item.label" :name="item.value" />
  </u-radio-group>
</template>
