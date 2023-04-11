<template>
  <el-radio-group v-model="activeType">
    <el-radio-button v-for="item in typeList" :key="item.label" :label="item.label">
      <Icon :icon="item.icon"></Icon>
    </el-radio-button>
  </el-radio-group>
  <div style="height: 700px">
    <FormDesignWrapper
      v-if="activeType === 'graph'"
      :modelValue="flowDetail?.process?.flowData"
      :flowHistory="flowDetail?.flowHistory"
      view
    ></FormDesignWrapper>
  </div>
</template>

<script setup lang="ts">
import type { FlowDetail } from "../../api/flow-task";

import { ref } from "vue";
import { Icon } from "@iconify/vue";

import FormDesignWrapper from "../../components/flow-design-wrapper/index.vue";

const props = defineProps<{
  flowDetail?: FlowDetail;
}>();
const typeList = [
  { label: "table", icon: "ep:grid" },
  { label: "graph", icon: "ep:picture" },
  { label: "timeline", icon: "ep:finished" }
];
const activeType = ref("graph");
</script>

<style lang="scss" scoped></style>
