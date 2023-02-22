<template>
  <div :id="containerId" class="lf-container"></div>
</template>

<script setup lang="ts">
import type { Definition } from "@logicflow/core";
import type { TurboData } from "../extensions";

import { onMounted, watch } from "vue";
import { useVModels } from "@vueuse/core";
import { uniqueId } from "lodash-unified";
import LogicFlow from "@logicflow/core";
import "@logicflow/core/dist/style/index.css";
import "@logicflow/extension/lib/style/index.css";

import { BpmnExtend, TurboAdapter } from "../extensions";
import { defaultTheme } from "../constants";

const props = defineProps<{
  /** LogicFlow实例 */
  lf?: LogicFlow;
  /** LogicFlow初始化配置 */
  initOptions?: Definition;
  /** 流程图数据 */
  modelValue?: TurboData;
}>();
const vModels = useVModels(props, undefined, { passive: true });
const { lf, modelValue: graphData } = vModels as Required<typeof vModels>;

const containerId = uniqueId("container");
onMounted(() => {
  lf.value = new LogicFlow({
    container: document.querySelector(`#${containerId}`)!,
    grid: { type: "dot", size: 10 },
    isSilentMode: true,
    plugins: [BpmnExtend, TurboAdapter]
  });
  lf.value?.setTheme(defaultTheme);
  lf.value?.render(graphData.value);
  watch(graphData, val => {
    lf.value?.render(val);
  });
});
</script>
