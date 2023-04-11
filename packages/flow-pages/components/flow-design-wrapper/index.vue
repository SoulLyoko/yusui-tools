<template>
  <FlowViewer v-if="view" v-model:lf="lf" :modelValue="graphData" :styles="flowHistoryStyles"></FlowViewer>
  <FlowModeler
    v-else
    v-model="graphData"
    v-model:lf="lf"
    v-model:elementData="elementData"
    v-model:formOption="modelerFormOption"
    :formOptions="options"
    :formDataFormat="formDataFormat"
    formWidth="30%"
  ></FlowModeler>
</template>

<script setup lang="ts">
import type { AvueFormOption, AvueFormColumn } from "@smallwei/avue";
import type { FormPropertyItem } from "@yusui/flow-design";
import type { TaskDetail } from "../../api/flow-task";

import { ref, computed, nextTick, shallowRef } from "vue";
import { FlowModeler, FlowViewer, defaultGraphData } from "@yusui/flow-design";

import { options } from "./options";

const props = defineProps<{
  modelValue?: string;
  view?: boolean;
  formOption?: string;
  flowHistory?: TaskDetail[];
}>();
const emit = defineEmits(["update:modelValue"]);

const modelerFormOption = ref<AvueFormOption>({});
const elementData = ref();

function mergeFormProperty(column: AvueFormColumn[], source: FormPropertyItem[]): FormPropertyItem[] {
  return column.map(col => {
    const findSource = source.find(e => e.prop === col.prop);
    const { label, prop, display = true, disabled = false, detail = false, readonly = false, rules } = col;
    const required = rules?.some(e => e.required) ?? false;
    const result = { label, prop, display, disabled, detail, readonly, required, ...findSource };
    if (col.type === "dynamic" && col.children?.column?.length) {
      result.children = mergeFormProperty(col.children.column, findSource?.children ?? []);
    }
    return result;
  });
}

async function formDataFormat(data: any) {
  await nextTick();
  if (!modelerFormOption.value.group?.some(e => e.prop === "formProperty")) return data;
  const { column = [], group = [] }: AvueFormOption = JSON.parse(props.formOption || "{}");
  const formProperty = mergeFormProperty(
    [...column, ...group.map(g => g.column ?? []).flat()],
    data.formProperty || []
  );
  return { ...data, formProperty };
}

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

const fillColorMap = {
  1: "lightgreen",
  2: "lightblue"
};

const flowHistoryStyles = computed(() => {
  const entries =
    props.flowHistory?.map(item => {
      const style = { fill: fillColorMap[item.status] };
      return [item.taskNodeKey, style];
    }) ?? [];
  return Object.fromEntries(entries);
});

const lf = shallowRef();
// watchEffect(() => {
/** 解决在弹窗中连接锚点，画布会发生移动的问题 */
// lf.value?.on("anchor:dragstart", () => {
//   lf.value?.updateEditConfig({ stopMoveGraph: true });
// });
// lf.value?.on("anchor:dragend", () => {
//   lf.value?.updateEditConfig({ stopMoveGraph: false });
// });
// });
</script>
