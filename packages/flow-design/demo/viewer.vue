<script setup lang="ts">
import { computed, ref } from 'vue'

import { defaultGraphData } from '../constants'

const graphData = ref(defaultGraphData())

const styles = computed(() => {
  return graphData.value.flowElementList?.map((item) => {
    return {
      id: item.key,
      style: { fill: 'lightgreen' },
    }
  })
})
const tooltips = computed(() => {
  return graphData.value.flowElementList?.map((item) => {
    return {
      id: item.key,
      content: `<div>${item.key}</div>`,
    }
  })
})
</script>

<template>
  <div class="flow-status-legend">
    <div class="legend-item">
      <div class="legend-color" />
      <span>已办</span>
    </div>
  </div>
  <FlowDesign :model-value="graphData" type="viewer" :styles="styles" :tooltips="tooltips" style="height:400px" />
</template>

<style lang="scss" scoped>
.flow-status-legend {
  position: absolute;
  left: 4px;
  z-index: 1;
  display: flex;

  .legend-item {
    display: flex;
    align-items: center;
    margin-right: 10px;

    .legend-color {
      width: 16px;
      height: 16px;
      margin-right: 5px;
      background-color: lightgreen;
    }
  }
}
</style>
