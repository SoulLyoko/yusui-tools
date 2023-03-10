<template>
  <Preview v-if="workType === 'preview'"></Preview>
  <Source v-else-if="workType === 'source'"></Source>
  <Design
    v-else
    :componentData="elementTree"
    :list="elementTree.children ?? []"
    @update:list="elementTree.children = $event"
    @click.stop="setActiveElement()"
  ></Design>
</template>

<script setup lang="ts">
import { useInjectState } from "../../composables";
import Design from "./design.vue";
import Preview from "./preview.vue";
import Source from "./source.vue";

const { elementTree, workType, setActiveElement } = useInjectState();
</script>
