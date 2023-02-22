import type { Resource } from "../types";

export const group: Resource = {
  label: "分组",
  type: "group",
  icon: "el-icon-menu",
  group: "布局组件",
  column: [],
  settings: [
    {
      label: "图标",
      prop: "icon"
    },
    {
      label: "是否默认展开",
      prop: "collapse",
      type: "switch",
      labelWidth: 120,
      value: true
    },
    {
      label: "是否显示箭头",
      prop: "arrow",
      type: "switch",
      labelWidth: 120,
      value: true
    }
  ]
};
