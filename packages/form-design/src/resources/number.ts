import type { Resource } from "../types";

export const number: Resource = {
  name: "number",
  title: "数字输入框",
  icon: "el-icon-more",
  group: "表单组件",
  settingsValue: { type: "number", label: "数字输入框" },
  settings: [
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
      label: "只能输入步长倍数",
      prop: "stepStrictly",
      type: "switch",
      labelWidth: 130,
      value: false
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
    },
    {
      label: "清空时显示值",
      prop: "valueOnClear",
      type: "select",
      filterable: true,
      allowCreate: true,
      defaultFirstOption: true,
      dicData: [
        { label: "最小值", value: "min" },
        { label: "最大值", value: "max" }
      ],
      control(val, form) {
        if (val && !["min", "max"].includes(val)) {
          form.valueOnClear = Number(val);
        }
        return {};
      }
    }
  ]
};
