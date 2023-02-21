<template>
  <FlowModeler v-model:lf="lf" v-model="graphData" :formOptions="formOptions" formWidth="30%"></FlowModeler>
</template>

<script setup lang="ts">
import { ref, watchEffect, computed } from "vue";
import { FlowModeler, defaultGraphData } from "@yusui/flow-design";

import { formOptions } from "./options";

const props = defineProps<{
  modelValue?: string;
}>();
const emit = defineEmits(["update:modelValue"]);

const graphData = computed({
  get() {
    if (typeof props.modelValue === "string" && props.modelValue) {
      return props.modelValue ? JSON.parse(props.modelValue) : defaultGraphData();
    } else if (typeof props.modelValue === "object") {
      return Object.keys(props.modelValue) ? props.modelValue : defaultGraphData();
    }
    return defaultGraphData();
  },
  set(val) {
    emit("update:modelValue", JSON.stringify(val));
  }
});

const lf = ref();
watchEffect(() => {
  /** 解决在弹窗中连接锚点，画布会发生移动的问题 */
  lf.value?.on("anchor:dragstart", () => {
    lf.value?.updateEditConfig({ stopMoveGraph: true });
  });
  lf.value?.on("anchor:dragend", () => {
    lf.value?.updateEditConfig({ stopMoveGraph: false });
  });
});
</script>
