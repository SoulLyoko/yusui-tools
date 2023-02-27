import type { Resource } from "../types";

import { iconList } from "./icon";

export const group: Resource = {
  name: "group",
  title: "分组",
  icon: "el-icon-menu",
  group: "布局组件",
  container: "column",
  settingsValue: { type: "group", label: "分组", column: [] },
  settings: [
    {
      label: "图标",
      prop: "icon",
      type: "icon",
      iconList
    },
    {
      label: "是否默认展开",
      prop: "collapse",
      type: "switch",
      value: true
    },
    {
      label: "是否显示箭头",
      prop: "arrow",
      type: "switch",
      value: true
    }
  ]
};
