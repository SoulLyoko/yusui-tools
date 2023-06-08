<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'

import { defaultGraphData } from './constants'
import { defaultOptions } from './options'
import FlowDesign from './index.vue'

const graphData = ref(defaultGraphData())

watchEffect(() => {
  console.log('🚀 ~ file: demo.vue:14 ~ graphData', graphData)
})

const formOptions = defaultOptions

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
  <h1>设计器</h1>
  <FlowDesign v-model="graphData" :form-options="formOptions" class="demo" form-width="30%" />
  <h1>查看模式</h1>
  <FlowDesign :model-value="graphData" class="demo" type="viewer" :styles="styles" :tooltips="tooltips" />
</template>

<style lang="scss" scoped>
.demo {
  height: 600px;
}
</style>
