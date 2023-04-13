<template>
  <div class="flow-list">
    <div v-for="item in flowList" :key="item.flowKey" class="flow-item" @click="startFlow(item)">
      <v-icon class="flow-icon" :icon="item.flowIcon" width="60" />
      <div class="flow-name">{{ item.flowName }}</div>
    </div>
  </div>
  <FlowForm v-model:visible="flowFormVisible" :flowKey="flowKey"></FlowForm>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { getPublishFlow, type FlowDeploy } from "../api/flow-deploy";
import FlowForm from "../flow-form/index.vue";

const flowList = ref<FlowDeploy[]>([]);

getPublishFlow().then(res => {
  flowList.value = res.data;
});

const flowFormVisible = ref(false);
const flowKey = ref("");
function startFlow(item: FlowDeploy) {
  flowKey.value = item.flowKey!;
  flowFormVisible.value = true;
}
</script>

<style lang="scss" scoped>
.flow-list {
  .flow-item {
    display: inline-block;
    text-align: center;
    cursor: pointer;
    width: 100px;
    vertical-align: top;
    .flow-icon {
      display: inline;
    }
    &:hover {
      background-color: #f5f5f5;
    }
  }
}
</style>
