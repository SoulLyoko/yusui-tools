import { id, name, desc } from "./base";
import FlowNodeSelect from "../flow-modeler/components/flow-node-select.vue";

export const processId = { ...id, label: "流程标识" };
export const processName = { ...name, label: "流程名称" };
export const processDesc = { ...desc, label: "流程描述" };
export const processCategory = { label: "流程分类", prop: "category" };
export const processIcon = { label: "图标", prop: "icon" };
export const processSkipFirstNode = {
  label: "跳过第一节点",
  prop: "skipFirstNode",
  type: "switch",
  labelWidth: 100,
  value: true
};
export const processRollbackNode = {
  label: "默认驳回节点",
  prop: "rollbackNode",
  type: "select",
  labelWidth: 100,
  component: FlowNodeSelect,
  params: { filterType: "userTask" }
};

export const processColumn = [
  // processId,
  // processName,
  // processDesc,
  // processCategory,
  // processIcon,
  processSkipFirstNode,
  processRollbackNode
];
