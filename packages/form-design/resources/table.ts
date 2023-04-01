import type { Resource } from "../types";

import { alignDic } from "../options";
import { EditorSetter, OnLoadSetter, SwitchSetter } from "../setters";

export const table: Resource = {
  name: "table",
  title: "表格选择",
  icon: "el-icon-grid",
  group: "表单组件",
  isContainer: true,
  props: { type: "table", label: "表格选择", children: { column: [] } },
  settings: [
    {
      label: "显示表头",
      prop: "showHeader",
      component: SwitchSetter,
      defaultValue: true
    },
    {
      label: "斑马纹",
      prop: "stripe",
      component: SwitchSetter,
      defaultValue: false
    },
    {
      label: "表格边框",
      prop: "border",
      component: SwitchSetter,
      defaultValue: false
    },
    {
      label: "表头对齐方式",
      prop: "headerAlign",
      type: "radio",
      button: true,
      dicData: alignDic
    },
    {
      label: "整体对齐方式",
      prop: "align",
      type: "radio",
      button: true,
      dicData: alignDic
    },
    {
      label: "显示序号",
      prop: "index",
      type: "switch"
    },
    {
      label: "键值配置",
      prop: "props",
      component: EditorSetter,
      valueType: "object",
      tooltip: true,
      value: { label: "name", value: "id" }
    },
    {
      label: "格式化函数",
      prop: "formatter",
      component: EditorSetter,
      valueType: "function",
      tooltip: true,
      defaultValue: `(row) => row.name`
    },
    {
      label: "加载数据函数",
      prop: "onLoad",
      component: OnLoadSetter
    }
  ]
};
