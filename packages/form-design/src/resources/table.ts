import type { Resource } from "../types";

import MonacoEditor from "../setters/monaco-editor/index.vue";
import OnLoadSetter from "../setters/on-load-setter/index.vue";

export const table: Resource = {
  name: "table",
  title: "表格选择",
  icon: "el-icon-grid",
  group: "表单组件",
  isContainer: true,
  rules: {
    childBlackList: ["group", "dynamic"]
  },
  settingsValue: { type: "table", label: "表格选择", children: { column: [] } },
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
      label: "键值配置",
      prop: "props",
      component: MonacoEditor,
      valueType: "object",
      tooltip: true,
      value: { label: "name", value: "id" }
    },
    {
      label: "加载数据函数",
      prop: "onLoad",
      component: OnLoadSetter
    }
  ]
};
