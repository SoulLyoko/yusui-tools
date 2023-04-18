<script setup lang="ts">
import { useInjectState } from '../../composables'
import Design from './design.vue'
import Preview from './preview.vue'
import Source from './source.vue'

const { elementTree, workType, setActiveElement } = useInjectState()
</script>

<template>
  <Preview v-if="workType === 'preview'" />
  <Source v-else-if="workType === 'source'" />
  <Design
    v-else
    :component-data="elementTree"
    :list="elementTree.children ?? []"
    @update:list="elementTree.children = $event"
    @click.stop="setActiveElement()"
  />
</template>
