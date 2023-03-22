import type { Resource } from "../types";

import MonacoEditor from "../setters/monaco-editor/index.vue";

export const textarea: Resource = {
  name: "textarea",
  title: "文本域",
  icon: "el-icon-chat-line-square",
  group: "表单组件",
  props: { type: "textarea", label: "文本域" },
  settings: [
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
      label: "最大长度",
      prop: "maxlength",
      type: "number"
    },
    {
      label: "显示统计字数",
      prop: "showWordLimit",
      type: "switch",
      value: false,
      tip: "仅在最大长度大于0时有效"
    },
    {
      label: "是否能被缩放",
      prop: "resize",
      type: "select",
      dicData: [
        { label: "不可缩放", value: "none" },
        { label: "可水平缩放", value: "horizontal" },
        { label: "可垂直缩放", value: "vertical" },
        { label: "可自由缩放", value: "both" }
      ]
    },
    {
      label: "输入框样式",
      prop: "inputStyle",
      component: MonacoEditor,
      valueType: "object",
      tooltip: true,
      defaultValue: `{}`
    }
  ]
};
