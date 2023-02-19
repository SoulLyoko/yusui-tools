export const number = [
  {
    label: "最小值",
    prop: "min",
    type: "number"
  },
  {
    label: "最大值",
    prop: "max",
    type: "number"
  },
  {
    label: "计数器步长",
    prop: "step",
    type: "number"
  },
  {
    label: "数值精度",
    prop: "precision",
    type: "number"
  },
  {
    label: "是否使用控制按钮",
    prop: "controls",
    type: "switch",
    value: true
  },
  {
    label: "控制按钮位置",
    prop: "controlsPosition",
    type: "radio",
    button: true,
    dicData: [
      { label: "默认", value: "" },
      { label: "右", value: "right" }
    ]
  },
  {
    label: "占位文本",
    prop: "placeholder"
  }
];
