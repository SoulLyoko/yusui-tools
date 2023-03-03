import type { Resource } from "../types";

import { iconList } from "./icon";
import MonacoEditor from "../setters/monaco-editor/index.vue";

export const input: Resource = {
  name: "input",
  title: "输入框",
  icon: "el-icon-chat-dot-square",
  group: "表单组件",
  settingsValue: { type: "input", label: "输入框" },
  settings: [
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
      label: "前缀文字",
      prop: "prepend"
    },
    {
      label: "后缀文字",
      prop: "append"
    },
    {
      label: "前缀图标",
      prop: "prefixIcon",
      type: "icon",
      iconList: iconList
    },
    {
      label: "后缀图标",
      prop: "suffixIcon",
      type: "icon",
      iconList: iconList
    },
    {
      label: "输入值格式化",
      prop: "formatter",
      component: MonacoEditor,
      valueType: "function",
      tooltip: true,
      defaultValue: `(value) => value`
    },
    {
      label: "返回值格式化",
      prop: "parser",
      component: MonacoEditor,
      valueType: "function",
      tooltip: true,
      defaultValue: `(value) => value`
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
