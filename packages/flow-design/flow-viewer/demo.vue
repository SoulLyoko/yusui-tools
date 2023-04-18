<script setup lang="ts">
import { ref } from 'vue'

import { defaultGraphData } from '../constants'

const graphData = ref(defaultGraphData())
</script>

<template>
  <FlowViewer class="demo" :model-value="graphData" />
</template>

<style lang="scss" scoped>
.demo {
  height: 600px;
}
</style>
