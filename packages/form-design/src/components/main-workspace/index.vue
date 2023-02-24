<template>
  <Preview v-if="activeWorkspace === 'preview'"></Preview>
  <Source v-else-if="activeWorkspace === 'source'"></Source>
  <Design v-else v-model:list="resourceElementList" @click="activeElement = {}"></Design>
</template>

<script setup lang="ts">
import { useInjectState } from "../../composables";
import Design from "./design.vue";
import Preview from "./preview.vue";
import Source from "../left-panel/source.vue";

const { activeWorkspace, resourceElementList, activeElement } = useInjectState();
</script>
