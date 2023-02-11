<template>
  <FlowModeler v-model="graphData" :formOptions="formOptions" class="demo" formWidth="30%"></FlowModeler>
</template>

<script setup lang="ts">
import type { AvueFormGroup } from "@smallwei/avue";

import { ref, watchEffect } from "vue";

import FlowModeler from "./index.vue";
import "../styles/flow-modeler.css";
import {
  assigneeColumn,
  baseColumns,
  buttonColumn,
  executionListenerColumn,
  formpropertyColumn,
  multiInstanceColumns,
  processColumns,
  propertyColumn,
  sequenceFlowColumns,
  serialColumn,
  serviceTaskColumns,
  taskListenerColumn,
  timelimitColumn,
  userTaskColumns
} from "./options";
import { defaultGraphData } from "../constants";

const graphData = ref(defaultGraphData());

watchEffect(() => {
  console.log("🚀 ~ file: demo.vue:14 ~ graphData", graphData);
});

const formOptions: Record<string, AvueFormGroup[]> = {
  "bpmn:startEvent": [
    { label: "基本配置", prop: "base", column: baseColumns },
    { label: "表单配置", prop: "formproperty", collapse: false, column: [formpropertyColumn] },
    { label: "扩展属性", prop: "property", collapse: false, column: [propertyColumn] }
  ],
  "bpmn:endEvent": [
    { label: "基本配置", prop: "base", column: baseColumns },
    { label: "表单配置", prop: "formproperty", collapse: false, column: [formpropertyColumn] },
    { label: "扩展属性", prop: "property", collapse: false, column: [propertyColumn] },
    { label: "执行监听", prop: "executionListener", collapse: false, column: [executionListenerColumn] }
  ],
  "bpmn:userTask": [
    { label: "基本配置", prop: "base", column: [...baseColumns, ...userTaskColumns] },
    { label: "人员配置", prop: "assignee", collapse: false, column: [assigneeColumn] },
    { label: "多实例配置", prop: "multiInstance", collapse: false, column: multiInstanceColumns },
    { label: "按钮配置", prop: "button", collapse: false, column: [buttonColumn] },
    { label: "表单配置", prop: "formproperty", collapse: false, column: [formpropertyColumn] },
    { label: "任务监听", prop: "taskListener", collapse: false, column: [taskListenerColumn] },
    { label: "执行监听", prop: "executionListener", collapse: false, column: [executionListenerColumn] },
    { label: "时限控制", prop: "timelimit", collapse: false, column: [timelimitColumn] },
    { label: "扩展属性", prop: "property", collapse: false, column: [propertyColumn] }
  ],
  "bpmn:serviceTask": [
    { label: "基本配置", prop: "base", column: baseColumns },
    { label: "服务配置", prop: "service", collapse: false, column: serviceTaskColumns }
  ],
  "bpmn:sequenceFlow": [
    { label: "基本配置", prop: "base", column: baseColumns },
    { label: "条件配置", prop: "sequenceFlow", collapse: false, column: sequenceFlowColumns },
    { label: "扩展属性", prop: "property", collapse: false, column: [propertyColumn] }
  ],
  "bpmn:process": [
    { label: "流程配置", prop: "base", column: processColumns },
    { label: "流水号配置", prop: "serial", collapse: false, column: [serialColumn] },
    { label: "扩展属性", prop: "property", collapse: false, column: [propertyColumn] }
  ],
  "bpmn:subProcess": [
    { label: "基本配置", prop: "base", column: baseColumns },
    { label: "人员配置", prop: "assignee", collapse: false, column: [assigneeColumn] },
    { label: "多实例配置", prop: "multiInstance", collapse: false, column: multiInstanceColumns },
    { label: "扩展属性", prop: "property", collapse: false, column: [propertyColumn] }
  ]
};
</script>

<style lang="scss" scoped>
.demo {
  height: 600px;
}
</style>
