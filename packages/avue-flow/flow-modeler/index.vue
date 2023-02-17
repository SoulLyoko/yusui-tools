<template>
  <el-container>
    <el-main>
      <div :id="containerId" class="lf-container"></div>
    </el-main>
    <el-aside :width="formWidth">
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

import { onMounted } from "vue";
import { uniqueId } from "lodash-es";
import LogicFlow from "@logicflow/core";
import { Control, DndPanel, SelectionSelect, Menu, MiniMap, InsertNodeInPolyline } from "@logicflow/extension";
import "@logicflow/core/dist/style/index.css";
import "@logicflow/extension/lib/style/index.css";

import { BpmnExtend, TurboAdapter } from "../extensions";
import { defaultTheme } from "../constants";
import { useModelerState, useControl, usePattern, useModelerListener } from "./composables";
import FlowEditor from "./components/flow-editor.vue";

const props = defineProps<{
  /** LogicFlow实例 */
  lf?: LogicFlow;
  /** LogicFlow初始化配置 */
  initOptions?: Definition;
  /** 流程图数据 */
  modelValue?: object;
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

const containerId = uniqueId("container");
onMounted(() => {
  lf.value = new LogicFlow({
    container: document.querySelector(`#${containerId}`)!,
    grid: { type: "dot", size: 10 },
    plugins: [Control, DndPanel, SelectionSelect, Menu, MiniMap, InsertNodeInPolyline, BpmnExtend, TurboAdapter],
    ...props.initOptions
  });
  lf.value?.setTheme(defaultTheme);
  useControl(state);
  usePattern(state);
  useModelerListener(state);
  lf.value?.render(graphData.value);
});
</script>
