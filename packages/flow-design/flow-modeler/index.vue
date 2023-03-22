<template>
  <el-container class="lf-container">
    <el-main :id="containerId" class="lf-main"> </el-main>
    <el-aside :width="formWidth" class="lf-aside">
      <el-empty v-if="!formOption.group?.length" description="选择元素以编辑数据"></el-empty>
      <avue-form
        v-else-if="!formLoading"
        v-model="formData"
        :option="formOption"
        @update:modelValue="onUpdateFormData"
      ></avue-form>
    </el-aside>

    <FlowEditor v-model="graphData" v-model:visible="editorVisible" @confirm="lf?.render($event)"></FlowEditor>
  </el-container>
</template>

<script setup lang="ts">
import type { NodeConfig, EdgeConfig, Definition } from "@logicflow/core";
import type { AvueFormGroup } from "@smallwei/avue";
import type { TurboData } from "../extensions";

import { onMounted, watch, provide } from "vue";
import { uniqueId, isEqual } from "lodash-unified";
import LogicFlow from "@logicflow/core";
import { Control, DndPanel, SelectionSelect, Menu, MiniMap, InsertNodeInPolyline } from "@logicflow/extension";
import "@logicflow/core/dist/style/index.css";
import "@logicflow/extension/lib/style/index.css";

import { BpmnExtend, TurboAdapter, Group } from "../extensions";
import { defaultTheme } from "../constants";
import { useModelerState, useControl, usePattern, useMenu, useModelerListener } from "./composables";
import FlowEditor from "./components/flow-editor.vue";

const props = defineProps<{
  /** LogicFlow实例 */
  lf?: LogicFlow;
  /** LogicFlow初始化配置 */
  initOptions?: Definition;
  /** 流程图数据 */
  modelValue?: TurboData;
  /** 当前选中元素的数据 */
  elementData?: NodeConfig | EdgeConfig;
  /** 当前选中元素的表单数据 */
  formData?: object;
  /** 表单配置 */
  formOptions?: Record<string, AvueFormGroup[]>;
  /** 表单宽度 */
  formWidth?: string;
}>();

const state = useModelerState(props);
const { lf, graphData, formData, formLoading, formOption, editorVisible, onUpdateFormData } = state;
provide("modelerState", state);

const containerId = uniqueId("container");
onMounted(() => {
  lf.value = new LogicFlow({
    container: document.querySelector(`#${containerId}`)!,
    grid: { type: "dot", size: 10 },
    nodeTextDraggable: true,
    edgeTextDraggable: true,
    nodeTextEdit: true,
    edgeTextEdit: true,
    plugins: [Control, DndPanel, SelectionSelect, Menu, MiniMap, InsertNodeInPolyline, BpmnExtend, Group, TurboAdapter],
    edgeGenerator: (sourceNode, targetNode) => {
      if (["note", "serviceTask"].includes(targetNode.type)) return "noteFlow";
    },
    ...props.initOptions
  });
  lf.value?.setTheme(defaultTheme);
  useControl(state);
  usePattern(state);
  useModelerListener(state);
  useMenu(state);
  watch(
    graphData,
    val => {
      const eq = isEqual(val, lf.value?.getGraphData());
      !eq && lf.value?.render(val);
    },
    { immediate: true }
  );
});
</script>
