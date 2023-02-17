import { idColumn, nameColumn, documentationColumn } from "./base";

export const processIdColumn = { ...idColumn, label: "流程标识" };
export const processNameColumn = { ...nameColumn, label: "流程名称" };
export const processDocumentationColumn = { ...documentationColumn, label: "流程描述" };
export const processCategoryColumn = {
  label: "流程分类",
  prop: "category"
};
export const processIconColumn = { label: "图标", prop: "icon" };
export const processSkipFirstNodeColumn = {
  label: "跳过第一节点",
  prop: "skipFirstNode",
  type: "switch",
  labelWidth: 100,
  value: "true",
  dicData: [
    { label: "否", value: "false" },
    { label: "是", value: "true" }
  ]
};
export const processRollbackNodeColumn = {
  label: "默认驳回节点",
  prop: "rollbackNode",
  type: "select",
  labelWidth: 100,
  params: { filterType: "bpmn:UserTask" }
};

export const processColumns = [
  processIdColumn,
  processNameColumn,
  processDocumentationColumn,
  processCategoryColumn,
  processIconColumn,
  processSkipFirstNodeColumn,
  processRollbackNodeColumn
];
