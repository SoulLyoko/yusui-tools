<template>
  <div :id="containerId" class="lf-container"></div>
</template>

<script setup lang="ts">
import { onMounted, shallowRef } from "vue";
import { uniqueId } from "lodash-es";
import LogicFlow from "@logicflow/core";
import { BpmnElement, Group } from "@logicflow/extension";
import "@logicflow/core/dist/style/index.css";
import "@logicflow/extension/lib/style/index.css";

import { BpmnExtend, TurboAdapter } from "../extensions";
import { defaultTheme } from "../constants";

const props = defineProps<{
  graphData: object;
}>();

const containerId = uniqueId("container");
const lf = shallowRef<LogicFlow>();
onMounted(() => {
  lf.value = new LogicFlow({
    container: document.querySelector(`#${containerId}`)!,
    grid: { type: "dot", size: 10 },
    isSilentMode: true,
    plugins: [BpmnElement, BpmnExtend, TurboAdapter, Group]
  });
  lf.value?.setTheme(defaultTheme);
  lf.value?.render(props.graphData);
});
</script>
