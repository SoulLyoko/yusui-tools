<template>
  <el-container class="main-container">
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
import type { TurboData } from "../extensions";

import { onMounted, watch, provide } from "vue";
import { uniqueId, isEqual } from "lodash-es";
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
    plugins: [Control, DndPanel, SelectionSelect, Menu, MiniMap, InsertNodeInPolyline, BpmnExtend, TurboAdapter, Group],
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

<style lang="scss">
.main-container {
  height: 100%;
}
.lf-container {
  height: 100%;
}

.lf-drag-able {
  cursor: unset;
}

.lf-dndpanel {
  height: 96%;
  width: 130px;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: repeat(10, 60px);
  .lf-dnd-text {
    overflow: hidden;
  }
  .lf-dnd-item {
    margin-top: 0;
  }
}

.lf-mini-map {
  right: 0;
  bottom: 0;
  margin: 5px;
}

.lf-control-clear {
  background-image: url("https://api.iconify.design/ep/delete.svg?width=20&height=20");
}
.lf-control-editor {
  background-image: url("https://api.iconify.design/ep/edit.svg?width=20&height=20");
}
.lf-control-mini-map {
  background-image: url("https://api.iconify.design/ep/picture.svg?width=20&height=20");
}
.lf-menu-item {
  padding-left: 0 !important;
}
.lf-menu-select {
  .lf-menu-item-icon {
    background: url("https://api.iconify.design/bpmn/lasso-tool.svg?width=16&height=16") no-repeat;
    padding-left: 16px;
  }
}
.lf-menu-clear {
  .lf-menu-item-icon {
    background: url("https://api.iconify.design/bpmn/trash.svg?width=16&height=16") no-repeat;
    padding-left: 16px;
  }
}
</style>
