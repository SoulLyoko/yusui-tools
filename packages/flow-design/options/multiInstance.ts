export const multiInstanceType = {
  label: "多实例类型",
  prop: "multiInstanceType",
  tip: "选择后节点变更为多人任务",
  type: "select",
  dicData: [
    { label: "并行多重事件", value: "parallel" },
    { label: "时序多重事件", value: "sequential" }
    // { label: "循环", value: "standard" }
  ]
};

export const completionCondition = {
  label: "完成条件",
  prop: "completionCondition",
  type: "slider",
  labelTip: "任务完成的百分比，如2人接收，需同时完成才往下进行时=100%，只需1人完成时=50%"
};

export const isRecall = {
  label: "回收任务",
  prop: "isRecall",
  type: "switch",
  value: false,
  labelTip: "满足完成条件时，该节点未审批任务是否回收，回收的任务仅保留记录，对应人员无需再办理"
};

export const collection = {
  label: "集合",
  prop: "collection",
  value: ""
};

export const elementVariable = {
  label: "元素变量",
  prop: "elementVariable",
  value: ""
};

export const multiInstanceColumn = [
  multiInstanceType,
  completionCondition,
  isRecall
  // collection,
  // elementVariable
];
