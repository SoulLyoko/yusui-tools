<template>
  <FlowModeler v-model="graphData" :formOptions="formOptions" class="demo" formWidth="30%"></FlowModeler>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { FlowModeler, defaultOptions, defaultGraphData } from "@yusui/flow-design";

const graphData = ref(defaultGraphData());

watchEffect(() => {
  console.log("🚀 ~ file: demo.vue:14 ~ graphData", graphData);
});

const formOptions = defaultOptions;
</script>

<style lang="scss" scoped>
.demo {
  height: 600px;
}
</style>
