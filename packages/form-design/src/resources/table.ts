import type { Resource } from "../types";

import MonacoEditor from "../components/monaco-editor/index.vue";

export const table: Resource = {
  type: "table",
  label: "表格选择",
  icon: "el-icon-grid",
  group: "表单组件",
  slotPath: "children.column",
  children: {
    column: []
  },
  settings: [
    {
      label: "显示表头",
      prop: "showHeader",
      type: "switch",
      value: true
    },
    {
      label: "斑马纹",
      prop: "stripe",
      type: "switch",
      value: false
    },
    {
      label: "表格边框",
      prop: "border",
      type: "switch",
      value: false
    },
    {
      label: "表头对齐方式",
      prop: "headerAlign",
      type: "radio",
      button: true,
      dicData: [
        { label: "左", value: "left" },
        { label: "中", value: "center" },
        { label: "右", value: "right" }
      ]
    },
    {
      label: "对齐方式",
      prop: "align",
      type: "radio",
      button: true,
      dicData: [
        { label: "左", value: "left" },
        { label: "中", value: "center" },
        { label: "右", value: "right" }
      ]
    },
    {
      label: "显示序号",
      prop: "index",
      type: "switch",
      value: ""
    },
    {
      label: "加载数据函数",
      prop: "onLoad",
      component: MonacoEditor,
      valueType: "function",
      tooltip: true,
      defaultValue: `({ page }, cb) => {\n    cb({ data: [], total: 0 });\n}`
    }
  ]
};
