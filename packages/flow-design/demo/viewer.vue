<script setup lang="ts">
import { computed } from 'vue'

import { useGraphData } from './data'

const graphData = useGraphData()

const styles = computed(() => {
  const startNode = graphData.value.flowElementList?.[0]
  const taskNode = graphData.value.flowElementList?.[1]
  const noexistNode = { key: 'noexist' }
  return [
    { id: startNode?.key, style: { fill: 'lightgreen' } },
    { id: taskNode?.key, style: { fill: 'lightgreen' } },
    { id: noexistNode.key, style: { fill: 'red' } }, // 不存在的节点不会被设置
    { id: taskNode?.key, style: { fill: 'lightblue' } },
  ]
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
      <span class="legend-text">已办</span>
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

    .legend-text {
      color: #000;
    }
  }
}
</style>
