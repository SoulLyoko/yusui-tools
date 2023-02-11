<template>
  <FlowViewer class="demo" :graphData="graphData"></FlowViewer>
</template>

<script setup lang="ts">
import { ref } from "vue";

import FlowViewer from "./index.vue";
import "../styles/flow-viewer.css";
import { defaultGraphData } from "../constants";

const graphData = ref(defaultGraphData());
</script>

<style lang="scss" scoped>
.demo {
  height: 600px;
}
</style>
