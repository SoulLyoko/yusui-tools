import type { Resource } from "../types";

import * as icons from "@element-plus/icons-vue";
import { kebabCase } from "lodash-unified";

import { EditorSetter } from "../setters";

export const iconList = [
  {
    label: "基本图标",
    list: Object.keys(icons).map(e => `el-icon-${kebabCase(e)}`)
  }
];

export const icon: Resource = {
  name: "icon",
  title: "图标",
  icon: "el-icon-element-plus",
  group: "表单组件",
  props: { type: "icon", label: "图标", iconList: [{ label: "基本图标", list: [] }] },
  settings: [
    {
      label: "图标列表",
      prop: "iconList",
      component: EditorSetter,
      valueType: "array",
      defaultValue: `[{ label: "基本图标", list: [] }]`,
      tooltip: true,
      labelTip: JSON.stringify(iconList)
    }
  ]
};