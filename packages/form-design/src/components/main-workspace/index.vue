<template>
  <Preview v-if="workType === 'preview'"></Preview>
  <Source v-else-if="workType === 'source'"></Source>
  <Design v-else v-model:list="resourceElementList" @click.stop="activeElement = {}"></Design>
</template>

<script setup lang="ts">
import { useInjectState } from "../../composables";
import Design from "./design.vue";
import Preview from "./preview.vue";
import Source from "./source.vue";

const { workType, resourceElementList, activeElement } = useInjectState();
</script>
