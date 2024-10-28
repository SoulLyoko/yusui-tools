<script setup lang="ts">
import { computed } from 'vue'

import { defaultGraphData } from '../constants'

const graphData = defaultGraphData()
const startNode = graphData.flowElementList?.[0]
const taskNode = graphData.flowElementList?.[1]
const noexistNode = { key: 'noexist' }

const styles = computed(() => {
  return [
    { id: startNode?.key, style: { fill: 'lightgreen' } },
    { id: taskNode?.key, style: { fill: 'lightgreen' } },
    { id: taskNode?.key, style: { fill: 'lightblue' } }, // 同一个节点后面设置的会覆盖前面的设置
    { id: noexistNode.key, style: { fill: 'red' } }, // 不存在的节点不会被设置
  ]
})
const tooltips = computed(() => {
  const getContent = (item: any) => `
<div>${item.type}</div>
<div>${item.key}</div>
<div>${item.properties?.name}${Math.random().toFixed(2)}</div>
`
  return [
    { id: startNode?.key, show: 'hover', content: getContent(startNode) },
    { id: taskNode?.key, show: 'always', content: getContent(taskNode) },
    { id: taskNode?.key, show: 'both', content: getContent(taskNode) }, // 同一个节点只会显示最后一个
    { id: noexistNode.key, content: getContent(noexistNode) }, // 不存在的节点不会被设置
  ]
})
</script>

<template>
  <div class="flow-status-legend">
    <div class="legend-item">
      <div class="legend-color status-0" />
      <span class="legend-text">待办</span>
      <div class="legend-color status-1" />
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
      &.status-0 {
        background-color: lightblue;
      }
      &.status-1 {
        background-color: lightgreen;
      }
    }

    .legend-text {
      color: #000;
    }
  }
}
</style>
