<template>
  <FlowViewer class="demo" :modelValue="graphData"></FlowViewer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { FlowViewer, defaultGraphData } from "@yusui/avue-flow";

const graphData = ref(defaultGraphData());
</script>

<style lang="scss" scoped>
.demo {
  height: 600px;
}
</style>
