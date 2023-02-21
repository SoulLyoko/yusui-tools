import type { Resource } from "../types";

export const number: Resource = {
  type: "number",
  label: "数字输入",
  icon: "el-icon-more",
  group: "表单组件",
  settings: [
    {
      label: "占位文本",
      prop: "placeholder"
    },
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
      labelWidth: 130,
      value: true,
      control(controls) {
        return {
          controlsPosition: { display: controls }
        };
      }
    },
    {
      label: "控制按钮位置",
      prop: "controlsPosition",
      type: "radio",
      button: true,
      value: "default",
      dicData: [
        { label: "默认", value: "default" },
        { label: "右", value: "right" }
      ]
    }
  ]
};
