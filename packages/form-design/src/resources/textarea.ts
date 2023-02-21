import type { Resource } from "../types";

export const textarea: Resource = {
  type: "textarea",
  label: "文本域",
  icon: "el-icon-chat-line-square",
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
      label: "最小行数",
      prop: "minRows",
      type: "number"
    },
    {
      label: "最大行数",
      prop: "maxRows",
      type: "number"
    },
    {
      label: "是否显示统计字数",
      prop: "showWordLimit",
      type: "switch",
      labelWidth: 130,
      value: false
    },
    {
      label: "是否能被缩放",
      prop: "resize",
      type: "select",
      labelWidth: 100,
      dicData: [
        { label: "不可缩放", value: "none" },
        { label: "可水平缩放", value: "horizontal" },
        { label: "可垂直缩放", value: "vertical" },
        { label: "可自由缩放", value: "both" }
      ]
    }
  ]
};
