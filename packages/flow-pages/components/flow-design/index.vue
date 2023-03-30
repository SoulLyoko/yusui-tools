<template>
  <FlowViewer v-if="view" v-model="graphData"></FlowViewer>
  <FlowModeler v-else v-model:lf="lf" v-model="graphData" :formOptions="formOptions" formWidth="30%"></FlowModeler>
</template>

<script setup lang="ts">
import { ref, watchEffect, computed } from "vue";
import { FlowModeler, FlowViewer, defaultGraphData } from "@yusui/flow-design";

import { formOptions } from "./options";

const props = defineProps<{
  modelValue?: string;
  view?: boolean;
}>();
const emit = defineEmits(["update:modelValue"]);

const graphData = computed({
  get() {
    let getter = defaultGraphData();
    if (typeof props.modelValue === "string" && props.modelValue) {
      getter = JSON.parse(props.modelValue);
    } else if (typeof props.modelValue === "object" && Object.keys(props.modelValue)) {
      getter = props.modelValue;
    }
    return getter;
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
