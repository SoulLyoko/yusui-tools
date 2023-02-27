import type { Resource } from "../types";

export const color: Resource = {
  name: "color",
  title: "颜色",
  icon: "el-icon-brush",
  group: "表单组件",
  settingsValue: { type: "color", label: "颜色" },
  settings: [
    {
      label: "支持透明度选择",
      prop: "showAlpha",
      type: "switch",
      value: false,
      labelWidth: 120
    },
    {
      label: "颜色格式",
      prop: "colorFormat",
      type: "select",
      dicData: [
        { label: "hsl", value: "hsl" },
        { label: "hsv", value: "hsv" },
        { label: "hex", value: "hex" },
        { label: "rgb", value: "rgb" }
      ]
    },
    {
      label: "预定义颜色",
      prop: "predefine",
      type: "array"
    }
  ]
};
