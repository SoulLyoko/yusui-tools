<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ modelValue?: any; defaultValue?: boolean }>()
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return typeof props.modelValue === 'boolean' ? props.modelValue : props.defaultValue
  },
  set(val) {
    emit('update:modelValue', val)
  },
})
</script>

<template>
  <el-switch v-model="value" />
</template>
