import type { Resource } from "../types";

export const array: Resource = {
  name: "array",
  title: "数组",
  icon: "el-icon-full-screen",
  group: "表单组件",
  props: { type: "array", label: "数组" },
  settings: [{ label: "最大数量", prop: "limit", type: "number" }]
};

export const img: Resource = {
  ...array,
  name: "img",
  title: "图片链接",
  icon: "el-icon-picture",
  group: "表单组件",
  props: { type: "img", label: "图片链接" }
};

export const url: Resource = {
  ...array,
  name: "url",
  title: "超链接",
  icon: "el-icon-link",
  group: "表单组件",
  props: { type: "url", label: "超链接" }
};
