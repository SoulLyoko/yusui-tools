import type { Resource } from "../types";

import { iconList } from "../options";
import { SwitchSetter } from "../setters";

export const group: Resource = {
  name: "group",
  title: "分组",
  icon: "el-icon-menu",
  group: "布局组件",
  isContainer: true,
  rules: {
    parentWhiteList: ["form"],
    childBlackList: ["group"]
  },
  designOption: element => {
    const { label, prop } = element.props ?? {};
    return {
      column: [{ prop, labelWidth: 0, type: "title", modelValue: label, styles: { fontWeight: 500, fontSize: "16px" } }]
    };
  },
  props: { type: "group", label: "分组", column: [] },
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
      component: SwitchSetter,
      defaultValue: true
    },
    {
      label: "是否显示箭头",
      prop: "arrow",
      component: SwitchSetter,
      defaultValue: true
    }
  ]
};
