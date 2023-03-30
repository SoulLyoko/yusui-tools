<template>
  <div>
    <el-button v-for="item in flowList" :key="item.flowKey" type="primary" plain @click="startFlow(item)">
      {{ item.flowName }}
    </el-button>
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

<style lang="scss" scoped></style>
