// export const isMultiInstance = {
//   label: "是否多实例",
//   prop: "isMultiInstance",
//   type: "switch",
//   value: false
// };

export const multiInstanceType = {
  label: "多实例类型",
  prop: "multiInstanceType",
  // tip: "选择后节点变更为多人任务",
  type: "select",
  dicData: [
    { label: "并行审批", value: "parallel", desc: "同时接收审批" },
    { label: "顺序审批", value: "sequential", desc: "按顺序审批" }
    // { label: "循环", value: "standard" }
  ]
};

export const completionCondition = {
  label: "完成条件",
  prop: "completionCondition",
  type: "slider",
  showInput: true,
  showInputControls: false,
  labelPosition: "top" as const,
  step: 0.01,
  max: 1,
  value: 0,
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
  // isMultiInstance,
  multiInstanceType,
  completionCondition,
  isRecall
  // collection,
  // elementVariable
];
