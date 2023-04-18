<script setup lang="ts">
import { ref, watchEffect } from 'vue'

import { defaultGraphData } from '../constants'
import { defaultOptions } from '../options'

const graphData = ref(defaultGraphData())

watchEffect(() => {
  console.log('🚀 ~ file: demo.vue:14 ~ graphData', graphData)
})

const formOptions = defaultOptions
</script>

<template>
  <FlowModeler v-model="graphData" :form-options="formOptions" class="demo" form-width="30%" />
</template>

<style lang="scss" scoped>
.demo {
  height: 600px;
}
</style>
