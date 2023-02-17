export const multiInstanceTypeColumn = {
  label: "多实例类型",
  prop: "multiInstanceType",
  type: "select",
  dicData: [
    { label: "并行多重事件", value: "parallel" },
    { label: "时序多重事件", value: "sequential" },
    { label: "循环", value: "standard" }
  ]
};

export const completionConditionColumn = {
  label: "完成条件",
  prop: "completionCondition",
  value: ""
};

export const collectionColumn = {
  label: "集合",
  prop: "collection",
  value: ""
};

export const elementVariableColumn = {
  label: "元素变量",
  prop: "elementVariable",
  value: ""
};

export const multiInstanceColumns = [
  multiInstanceTypeColumn,
  completionConditionColumn,
  collectionColumn,
  elementVariableColumn
];
