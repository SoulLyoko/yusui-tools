import type { Resource } from "../types";

export const array: Resource = {
  name: "array",
  title: "数组",
  icon: "el-icon-full-screen",
  group: "表单组件",
  settingsValue: { type: "array", label: "数组" },
  settings: [{ label: "最大数量", prop: "limit", type: "number" }]
};

export const img: Resource = {
  name: "img",
  title: "图片链接",
  icon: "el-icon-picture",
  group: "表单组件",
  settingsValue: { type: "img", label: "图片链接" },
  settings: [...array.settings!]
};

export const url: Resource = {
  name: "url",
  title: "超链接",
  icon: "el-icon-link",
  group: "表单组件",
  settingsValue: { type: "url", label: "超链接" },
  settings: [...array.settings!]
};
