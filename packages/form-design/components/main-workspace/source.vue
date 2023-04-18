<script setup lang="ts">
import { useInjectState } from '../../composables'
import { EditorSetter } from '../../setters'

const { modelValue } = useInjectState()
</script>

<template>
  <EditorSetter v-model="modelValue" value-type="object" />
</template>
