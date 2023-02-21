import type { Resource } from "../types";

export const input: Resource = {
  type: "input",
  label: "输入框",
  icon: "el-icon-chat-dot-square",
  group: "表单组件",
  settings: [
    {
      label: "占位文本",
      prop: "placeholder"
    },
    {
      label: "最大长度",
      prop: "maxlength",
      type: "number"
    },
    {
      label: "前缀图标",
      prop: "prefixIcon"
    },
    {
      label: "后缀图标",
      prop: "suffixIcon"
    },
    {
      label: "是否显示清除按钮",
      prop: "clearable",
      type: "switch",
      labelWidth: 130,
      value: false
    },
    {
      label: "自动填充",
      prop: "autocomplete",
      type: "switch",
      labelWidth: 130,
      dicData: [
        { label: "", value: "off" },
        { label: "", value: "on" }
      ],
      value: "off"
    }
  ]
};
