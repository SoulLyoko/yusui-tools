<template>
  <div :id="containerId" class="lf-container"></div>
</template>

<script setup lang="ts">
import type { Definition, ShapeStyleAttribute } from "@logicflow/core";
import type { TurboData } from "../extensions";

import { onMounted, watch } from "vue";
import { useVModels } from "@vueuse/core";
import { uniqueId } from "lodash-unified";
import LogicFlow from "@logicflow/core";
import "@logicflow/core/dist/style/index.css";
import "@logicflow/extension/lib/style/index.css";

import { BpmnExtend, TurboAdapter, Group } from "../extensions";
import { defaultTheme } from "../constants";

const props = defineProps<{
  /** LogicFlow实例 */
  lf?: LogicFlow;
  /** LogicFlow初始化配置 */
  initOptions?: Definition;
  /** 流程图数据 */
  modelValue?: TurboData;
  /** 设置节点的样式 */
  styles?: { id?: string; style?: ShapeStyleAttribute }[];
}>();
const vModels = useVModels(props, undefined, { passive: true });
const { lf, modelValue: graphData } = vModels as Required<typeof vModels>;

const containerId = uniqueId("container");
onMounted(() => {
  lf.value = new LogicFlow({
    container: document.querySelector(`#${containerId}`)!,
    grid: { type: "dot", size: 10 },
    isSilentMode: true,
    plugins: [BpmnExtend, Group, TurboAdapter],
    ...props.initOptions
  });
  lf.value?.setTheme(defaultTheme);
  watch(
    graphData,
    val => {
      lf.value?.render(val);
    },
    { immediate: true }
  );
  watch(
    () => props.styles,
    val => {
      val?.forEach(({ id, style }) => {
        id && lf.value?.graphModel?.updateAttributes(id, { style });
      });
    },
    { immediate: true }
  );
});
</script>
